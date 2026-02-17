from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import Optional, List
from services.auth_service import get_current_user
from services.prediction_service import predict_salary, extract_competences_from_text, get_experience_level
from database import Database
from datetime import datetime

router = APIRouter(prefix="/predict", tags=["Prediction"])


class PredictionRequest(BaseModel):
    titre: str
    description: str
    metier: Optional[str] = None
    region: Optional[str] = None
    experience: Optional[str] = None
    competences: Optional[List[str]] = None


class PredictionResponse(BaseModel):
    salaire_predit: float
    salaire_min: float
    salaire_max: float
    salaire_mensuel: float
    marge_erreur: float
    competences_detectees: List[str]
    niveau_experience: Optional[str]
    model_used: bool = False


@router.post("/salary", response_model=PredictionResponse)
def predict(data: PredictionRequest, current_user: dict = Depends(get_current_user)):
    
    competences_detectees = extract_competences_from_text(f"{data.titre} {data.description}")
    all_competences = list(set((data.competences or []) + competences_detectees))
    niveau_experience = data.experience or get_experience_level(data.description)
    
    result = predict_salary(
        titre=data.titre,
        description=data.description,
        metier=data.metier,
        region=data.region,
        experience=niveau_experience,
        competences=all_competences,
    )
    
    try:
        Database.execute(
            """ INSERT INTO Historique(salaire_predit,salaire_min,salaire_mensuel,niveau_experience, date_predit,description,competences,region, idUtilisateur,titre)
            VALUES (%s, %s, %s,%s, %s, %s,%s, %s, %s, %s)""",
            (result["salaire_predit"],result["salaire_min"],result["salaire_mensuel"], niveau_experience,datetime.now().strftime("%d/%m/%Y %H:%M:%S"),data.description,",".join(data.competences),data.region,current_user["idUtilisateur"], data.titre)
        )
    except Exception as e:
        print("ERREUR SQL :", e)
    
    return PredictionResponse(
        salaire_predit=result["salaire_predit"],
        salaire_min=result["salaire_min"],
        salaire_max=result["salaire_max"],
        salaire_mensuel=result["salaire_mensuel"],
        marge_erreur=result["marge_erreur"],
        competences_detectees=competences_detectees,
        niveau_experience=niveau_experience,
        model_used=result.get("model_used", False)
    )


@router.get("/history")
def get_history(current_user: dict = Depends(get_current_user)):
    return Database.fetch_all(
        """SELECT *
           FROM Historique
           WHERE idUtilisateur = %s
           ORDER BY date_predit DESC""",
        (current_user["idUtilisateur"],)
    )
