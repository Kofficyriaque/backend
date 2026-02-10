import pickle
import os
from typing import Optional, List
import pandas as pd
import warnings

warnings.filterwarnings('ignore')

_model = None
_model_loaded = False


def _get_model_path():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    possible_paths = [
        os.path.join(current_dir, '..', 'salary_model_xgboost.pkl'),
        os.path.join(current_dir, '..', '..', 'salary_model_xgboost.pkl'),
        os.path.join(current_dir, '..', '..', 'models', 'salary_model_xgboost.pkl'),
        os.path.join(current_dir, 'salary_model_xgboost.pkl'),
    ]
    
    for path in possible_paths:
        abs_path = os.path.abspath(path)
        if os.path.exists(abs_path):
            print(f"[DEBUG] Found model at: {abs_path}")
            return abs_path
    
    return None


def load_model():
    global _model, _model_loaded
    
    if _model_loaded:
        return _model
    
    model_path = _get_model_path()
    
    if model_path is None:
        print("[ERROR] Model not found")
        _model_loaded = True
        return None
    
    try:
        print(f"[DEBUG] Loading model from: {model_path}")
        with open(model_path, 'rb') as f:
            model_data = pickle.load(f)
        
        if isinstance(model_data, dict):
            _model = model_data.get('model') or model_data.get('pipeline')
        else:
            _model = model_data
        
        print(f"[SUCCESS] Model loaded: {type(_model)}")
        _model_loaded = True
        return _model
        
    except Exception as e:
        print(f"[ERROR] Failed to load: {e}")
        _model_loaded = True
        return None


def predict_salary(
    titre: str,
    description: str,
    metier: Optional[str] = None,
    region: Optional[str] = None,
    experience: Optional[str] = None,
    competences: Optional[List[str]] = None
) -> dict:
    
    model = load_model()
    competences_str = ", ".join(competences) if competences else ""
    
    if model is not None:
        try:
            # ساخت text_features که مدل نیاز داره
            text_features = f"{titre or ''} {description or ''} {competences_str}"
            
            input_data = pd.DataFrame([{
                "text_features": text_features,
                "metier": metier or "",
                "region": region or "",
                "experience": experience or ""
            }])
            
            print(f"[DEBUG] Input columns: {list(input_data.columns)}")
            print(f"[DEBUG] Predicting...")
            
            with warnings.catch_warnings():
                warnings.simplefilter("ignore")
                prediction = model.predict(input_data)
            
            salaire_predit = float(prediction[0])
            print(f"[SUCCESS] Prediction: {salaire_predit}")
            
            return {
                "salaire_predit": round(salaire_predit, 2),
                "salaire_min": round(salaire_predit * 0.85, 2),
                "salaire_max": round(salaire_predit * 1.15, 2),
                "salaire_mensuel": round(salaire_predit / 12, 2),
                "marge_erreur": 3900,
                "model_used": True
            }
            
        except Exception as e:
            print(f"[ERROR] Prediction failed: {e}")
            import traceback
            traceback.print_exc()
    
    # Fallback
    print("[DEBUG] Using heuristic fallback")
    base_salary = 35000
    
    if experience:
        exp_lower = experience.lower()
        if any(x in exp_lower for x in ['senior', '5', '10', 'expert']):
            base_salary += 15000
        elif any(x in exp_lower for x in ['junior', '0-2', 'débutant']):
            pass
        else:
            base_salary += 8000
    
    if region:
        region_lower = region.lower()
        if 'paris' in region_lower or 'île-de-france' in region_lower:
            base_salary += 8000
        elif any(x in region_lower for x in ['lyon', 'rhône', 'marseille']):
            base_salary += 4000
    
    if competences:
        high_value = ['python', 'java', 'aws', 'kubernetes', 'docker', 'react', 'machine learning']
        for comp in competences:
            if comp.lower() in high_value:
                base_salary += 2000
    
    return {
        "salaire_predit": round(base_salary, 2),
        "salaire_min": round(base_salary * 0.85, 2),
        "salaire_max": round(base_salary * 1.15, 2),
        "salaire_mensuel": round(base_salary / 12, 2),
        "marge_erreur": 3900,
        "model_used": False
    }


def extract_competences_from_text(text: str) -> List[str]:
    KNOWN = [
        'python', 'java', 'javascript', 'sql', 'react', 'angular', 'vue',
        'node.js', 'docker', 'kubernetes', 'aws', 'azure', 'gcp',
        'machine learning', 'deep learning', 'tensorflow', 'pytorch',
        'git', 'linux', 'agile', 'scrum', 'devops',
        'mongodb', 'postgresql', 'mysql', 'redis',
        'typescript', 'c++', 'go', 'rust', 'scala',
        'fastapi', 'django', 'flask', 'spring', 'php', 'html', 'css'
    ]
    text_lower = text.lower()
    return [c for c in KNOWN if c in text_lower]


def get_experience_level(text: str) -> Optional[str]:
    text_lower = text.lower()
    if any(t in text_lower for t in ['senior', '5 ans', '10 ans', 'expert', 'lead']):
        return "Senior (5+ ans)"
    elif any(t in text_lower for t in ['junior', 'débutant', '0-2 ans']):
        return "Junior (0-2 ans)"
    elif any(t in text_lower for t in ['intermédiaire', '2-5 ans', '3 ans']):
        return "Intermédiaire (2-5 ans)"
    return None