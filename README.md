Architecture Technique
Le projet repose sur une architecture hybride Cloud LLM / Local Embeddings, optimisant vitesse, coût et performance.
code
Mermaid
graph TD
    subgraph "Ingestion de Données"
        A[Offre d'Emploi / Texte] --> B[Groq LLM - Extraction NLP]
        B --> C[Liste Compétences JSON]
    end

    subgraph "Moteur Prédictif (ML)"
        C --> D[XGBoost Regressor]
        E[Données Marché .CSV] --> D
        D --> F[Salaire Estimé + KPIs]
    end

    subgraph "Système RAG (Analyse de CV)"
        G[PDF CV] --> H[PyPDFLoader + Splitter]
        H --> I[HuggingFace Embeddings - Local]
        I --> J[FAISS Vector Store - Memory]
        J --> K[Retrieval QA Chain]
        K --> L[Coach IA / Analyse Décisionnelle]
    end

    F --> M[Interface Streamlit]
    L --> M
Fonctionnalités Clés
1. Intelligence Salariale (XGBoost)
Analyse Sémantique : Extraction automatique des mots-clés techniques via Llama 3.3.
Modélisation : Utilisation d'un modèle XGBoost optimisé pour prédire le salaire annuel en fonction de la région, de l'expérience et de la stack technique.
2. Assistant de Recrutement RAG (Retrieval-Augmented Generation)
Analyse PDF : Chargement et vectorisation instantanée de CVs.
Prise de Décision : L'IA ne se contente pas de "discuter", elle identifie les écarts de compétences (Gap Analysis) et justifie les scores de pertinence.
3. Classement de Masse (Bulk Screening)
Algorithme de Similarité Cosinus pour classer des dizaines de CVs simultanément par rapport à une description de poste, sans coût API (calculé localement).
🛠️ Stack Technologique
LLM : Llama 3.3 70B via Groq API (Inférence ultra-rapide).
Orchestration : LangChain (LCEL - LangChain Expression Language).
Embeddings : sentence-transformers/all-MiniLM-L6-v2 (Exécution locale).
Base de données vectorielle : FAISS (Efficacité en mémoire vive).
Machine Learning : XGBoost, Scikit-Learn, Pandas.
Interface : Streamlit (Dashboard interactif).
⚙️ Installation & Configuration
Cloner le projet
code
Bash
git clone https://github.com/Kofficyriaque/backend.git
cd backend
Installer les dépendances
code
Bash
pip install -r requirements.txt
Variables d'environnement
Créez un fichier .env à la racine :
code
Text
GROQ_API_KEY=votre_cle_gsk_ici
Lancer l'application
code
Bash
streamlit run dashboard.py
