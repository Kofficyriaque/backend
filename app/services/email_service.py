import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import os 
load_dotenv(".env.secret") # Charger les variables d'environnements

SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT =int(os.getenv("SMTP_PORT"))
SMTP_EMAIL = os.getenv("SMTP_EMAIL")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")

def send_otp_email(to_email: str, code: str, purpose: str = "reset") -> bool:
   
    try:
        if purpose == "reset":
            subject = "PrediSalaire - Code de réinitialisation"
            body = f"""
            <html>
            <body style="font-family: Arial, sans-serif; padding: 20px;">
                <div style="max-width: 500px; margin: 0 auto; background: #f8fafc; padding: 30px; border-radius: 10px;">
                    <h2 style="color: #1e40af; margin-bottom: 20px;">Réinitialisation de mot de passe</h2>
                    <p>Vous avez demandé la réinitialisation de votre mot de passe.</p>
                    <p>Voici votre code de vérification :</p>
                    <div style="background: #1e40af; color: white; font-size: 32px; font-weight: bold; text-align: center; padding: 20px; border-radius: 8px; letter-spacing: 8px; margin: 20px 0;">
                        {code}
                    </div>
                    <p style="color: #64748b; font-size: 14px;">Ce code expire dans 15 minutes.</p>
                    <p style="color: #64748b; font-size: 14px;">Si vous n'avez pas demandé cette réinitialisation, ignorez cet email.</p>
                    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
                    <p style="color: #94a3b8; font-size: 12px;">PrediSalaire - Estimation de salaire par IA</p>
                </div>
            </body>
            </html>
            """
        else:
            subject = "PrediSalaire - Vérification de votre email"
            body = f"""
            <html>
            <body style="font-family: Arial, sans-serif; padding: 20px;">
                <div style="max-width: 500px; margin: 0 auto; background: #f8fafc; padding: 30px; border-radius: 10px;">
                    <h2 style="color: #1e40af; margin-bottom: 20px;">Bienvenue sur PrediSalaire!</h2>
                    <p>Merci de vous être inscrit. Veuillez vérifier votre adresse email.</p>
                    <p>Voici votre code de vérification :</p>
                    <div style="background: #1e40af; color: white; font-size: 32px; font-weight: bold; text-align: center; padding: 20px; border-radius: 8px; letter-spacing: 8px; margin: 20px 0;">
                        {code}
                    </div>
                    <p style="color: #64748b; font-size: 14px;">Ce code expire dans 15 minutes.</p>
                    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
                    <p style="color: #94a3b8; font-size: 12px;">PrediSalaire - Estimation de salaire par IA</p>
                </div>
            </body>
            </html>
            """

        msg = MIMEMultipart("alternative")
        msg["Subject"] = subject
        msg["From"] = f"PrediSalaire <{SMTP_EMAIL}>"
        msg["To"] = to_email

        msg.attach(MIMEText(body, "html"))

        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_EMAIL, SMTP_PASSWORD)
            server.sendmail(SMTP_EMAIL, to_email, msg.as_string())

        print(f"[EMAIL] Code {code} sent to {to_email}")
        return True

    except Exception as e:
        print(f"[EMAIL ERROR] Failed to send email: {e}")
        return False
