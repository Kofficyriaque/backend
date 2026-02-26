from dotenv import load_dotenv
import gspread
from google.oauth2.service_account import Credentials
from datetime import datetime
import os
import json


# --- CONFIGURATION GOOGLE SHEETS ---
# Définir la portée de l'API
load_dotenv()

SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive"
]

# Fichier JSON avec la clé du Service Account
creds_json = os.environ.get("GOOGLE_CREDS_JSON")
creds_dict = json.loads(creds_json)
# Connexion au service Google Sheets
credentials = Credentials.from_service_account_info(
    creds_dict, scopes=SCOPES
)
gc = gspread.authorize(credentials)

# Ouvrir la feuille par nom
SHEET_NAME = "Feedbacks"  # Nom du Google Sheet
sheet = gc.open(SHEET_NAME).sheet1  # On prend la première feuille

# --- FONCTION D'ENVOI DE FEEDBACK ---
def send_feedback_to_sheet(user_name, user_email, feedback_text,feedback_note):
    """
    Ajoute un feedback dans la Google Sheet.
    """
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    row = [timestamp, user_name, user_email, feedback_text,feedback_note]
    sheet.append_row(row)