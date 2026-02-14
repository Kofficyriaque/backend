from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.auth_routes import router as auth_router
from routes.search_routes import router as search_router
from routes.prediction_routes import router as prediction_router

app = FastAPI(
    title="PrediSalaire API",
    description="API de prédiction de salaire basée sur l'IA",
    version="2.0.0"
)

origins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:3000",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
    expose_headers=["*"],
)

app.include_router(auth_router, prefix="/api")
app.include_router(search_router, prefix="/api")
app.include_router(prediction_router, prefix="/api")


@app.get("/")
def root():
    return {"message": "PrediSalaire API v2", "docs": "/docs"}


@app.get("/health")
def health():
    return {"status": "healthy"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)