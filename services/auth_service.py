from datetime import datetime, timedelta
import jwt
import pytz
import hashlib
import random
import string
from fastapi import HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from database import Database
from services.email_service import send_otp_email
import os
from dotenv import load_dotenv

load_dotenv(".env.secret") # Charger les variables d'environnements

JWT_SECRET = os.getenv("JWT_SECRET")
JWT_ALGORITHM = os.getenv("JWT_ALGORITHM")
JWT_EXPIRE_HOURS = int(os.getenv("JWT_EXPIRE_HOURS"))
security = HTTPBearer()
reset_codes = {}
verify_codes = {}

tz = pytz.timezone("Europe/Paris")

#hashage du mot de passe
def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()

#vérification mot de passe
def verify_password(plain_password: str, hashed_password: str) -> bool:
    return hash_password(plain_password) == hashed_password

#creation de token
def create_access_token(user_id: int) -> str:
    expire = datetime.now(tz) + timedelta(hours=JWT_EXPIRE_HOURS)
    payload = {"sub": str(user_id), "exp": expire}
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

#decode du token
def decode_token(token: str) -> dict:
    try:
        return jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")

#récupérer l'utilisateur courant
def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)) -> dict:
    payload = decode_token(credentials.credentials)
    user_id = payload.get("sub")
    
    if not user_id:
        raise HTTPException(status_code=401, detail="Invalid token")
    
    user = Database.fetch_one(
        """SELECT u.idUtilisateur, u.nom, u.prenom, u.email, u.statut,u.location,u.role t.libelle as role
           FROM Utilisateur u
           LEFT JOIN TypeDeCompte t ON u.idTypeCompte = t.idTypeCompte
           WHERE u.idUtilisateur = %s""",
        (int(user_id),)
    )
    
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    
    return user

#génération du code random
def generate_code() -> str:
    return ''.join(random.choices(string.digits, k=6))

# enregistrement du mot de passe
def register_user(nom: str, prenom: str, email: str, password: str, role: str, location:str) -> dict:
    existing = Database.fetch_one("SELECT idUtilisateur FROM Utilisateur WHERE email = %s", (email,))
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    type_compte = Database.fetch_one("SELECT idTypeCompte FROM TypeDeCompte WHERE libelle = %s", (role,))
    if not type_compte:
        raise HTTPException(status_code=400, detail="Invalid role")
    
    hashed = hash_password(password)
    user_id = Database.execute(
        """INSERT INTO Utilisateur (nom, prenom, email, password, statut, location, idTypeCompte)
           VALUES (%s, %s, %s, %s, %s, %s,%s)""",
        (nom, prenom, email, hashed, "active", location, type_compte["idTypeCompte"])
    )
    
    return {
        "idUtilisateur": user_id,
        "nom": nom,
        "prenom": prenom,
        "email": email,
        "statut": "active",
        "location":location,
        "role": role
    }


def authenticate_user(email: str, password: str) -> dict:
    user = Database.fetch_one(
        """SELECT u.idUtilisateur, u.nom, u.prenom, u.email, u.password, u.statut,u.location, t.libelle as role
           FROM Utilisateur u
           LEFT JOIN TypeDeCompte t ON u.idTypeCompte = t.idTypeCompte
           WHERE u.email = %s""",
        (email,)
    )
    
    if not user or not verify_password(password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    return {
        "idUtilisateur": user["idUtilisateur"],
        "nom": user["nom"],
        "prenom": user["prenom"],
        "email": user["email"],
        "statut": user["statut"],
        "location": user["location"],
        "role": user["role"]
    }


def update_profile(user_id: int, nom: str, prenom: str) -> dict:
    Database.execute(
        "UPDATE Utilisateur SET nom = %s, prenom = %s WHERE idUtilisateur = %s",
        (nom, prenom, user_id)
    )
    return Database.fetch_one(
        """SELECT u.idUtilisateur, u.nom, u.prenom, u.email, u.statut,u.location, t.libelle as role
           FROM Utilisateur u
           LEFT JOIN TypeDeCompte t ON u.idTypeCompte = t.idTypeCompte
           WHERE u.idUtilisateur = %s""",
        (user_id,)
    )


def change_password(user_id: int, old_password: str, new_password: str) -> bool:
    user = Database.fetch_one("SELECT password FROM Utilisateur WHERE idUtilisateur = %s", (user_id,))
    if not user or not verify_password(old_password, user["password"]):
        raise HTTPException(status_code=400, detail="Invalid current password")
    
    Database.execute(
        "UPDATE Utilisateur SET password = %s WHERE idUtilisateur = %s",
        (hash_password(new_password), user_id)
    )
    return True


def change_role(user_id: int, new_role: str) -> dict:
    type_compte = Database.fetch_one(
        "SELECT idTypeCompte FROM TypeDeCompte WHERE libelle = %s",
        (new_role,)
    )
    if not type_compte:
        raise HTTPException(status_code=400, detail="Invalid role")
    
    Database.execute(
        "UPDATE Utilisateur SET idTypeCompte = %s WHERE idUtilisateur = %s",
        (type_compte["idTypeCompte"], user_id)
    )
    
    return Database.fetch_one(
        """SELECT u.idUtilisateur, u.nom, u.prenom, u.email, u.statut, t.libelle as role
           FROM Utilisateur u
           LEFT JOIN TypeDeCompte t ON u.idTypeCompte = t.idTypeCompte
           WHERE u.idUtilisateur = %s""",
        (user_id,)
    )


def generate_reset_code(email: str) -> dict:
    user = Database.fetch_one("SELECT idUtilisateur FROM Utilisateur WHERE email = %s", (email,))
    if not user:
        raise HTTPException(status_code=404, detail="Email not found")
    
    code = generate_code()
    reset_codes[email] = {
        "code": code,
        "expires": datetime.utcnow() + timedelta(minutes=15),
        "user_id": user["idUtilisateur"]
    }
    
    email_sent = send_otp_email(email, code, purpose="reset")
    
    return {
        "message": "Reset code sent to email" if email_sent else "Failed to send email",
        "email_sent": email_sent
    }


def verify_reset_code(email: str, code: str) -> bool:
    if email not in reset_codes:
        raise HTTPException(status_code=400, detail="No reset code found")
    
    data = reset_codes[email]
    if datetime.utcnow() > data["expires"]:
        del reset_codes[email]
        raise HTTPException(status_code=400, detail="Code expired")
    
    if data["code"] != code:
        raise HTTPException(status_code=400, detail="Invalid code")
    
    return True


def reset_password(email: str, code: str, new_password: str) -> bool:
    verify_reset_code(email, code)
    
    data = reset_codes[email]
    Database.execute(
        "UPDATE Utilisateur SET password = %s WHERE idUtilisateur = %s",
        (hash_password(new_password), data["user_id"])
    )
    del reset_codes[email]
    return True


def send_verification_code(email: str) -> dict:
    code = generate_code()
    verify_codes[email] = {
        "code": code,
        "expires": datetime.utcnow() + timedelta(minutes=15)
    }
    
    email_sent = send_otp_email(email, code, purpose="verify")
    
    return {
        "message": "Verification code sent" if email_sent else "Failed to send email",
        "email_sent": email_sent
    }


def verify_email_code(email: str, code: str) -> bool:
    if email not in verify_codes:
        raise HTTPException(status_code=400, detail="No verification code found")
    
    data = verify_codes[email]
    if datetime.utcnow() > data["expires"]:
        del verify_codes[email]
        raise HTTPException(status_code=400, detail="Code expired")
    
    if data["code"] != code:
        raise HTTPException(status_code=400, detail="Invalid code")
    
    del verify_codes[email]
    return True