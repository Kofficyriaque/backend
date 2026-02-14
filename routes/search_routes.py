from fastapi import APIRouter, Query, HTTPException
from typing import Optional
from services.search_service import (
    get_all_metiers, get_all_regions, get_all_experiences,
    get_all_competences, search_offres, get_offre_by_id
)

router = APIRouter(prefix="/search", tags=["Search"])


@router.get("/metiers")
def list_metiers():
    return get_all_metiers()


@router.get("/regions")
def list_regions():
    return get_all_regions()


@router.get("/experiences")
def list_experiences():
    return get_all_experiences()


@router.get("/competences")
def list_competences():
    return get_all_competences()


@router.get("/offres")
def search(
    metier: Optional[str] = Query(None),
    region: Optional[str] = Query(None),
    experience: Optional[str] = Query(None),
    salaire_min: Optional[float] = Query(None),
    salaire_max: Optional[float] = Query(None),
    keyword: Optional[str] = Query(None),
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100)
):
    return search_offres(
        metier=metier,
        region=region,
        experience=experience,
        salaire_min=salaire_min,
        salaire_max=salaire_max,
        keyword=keyword,
        page=page,
        limit=limit
    )


@router.get("/offres/{offre_id}")
def get_offre(offre_id: int):
    offre = get_offre_by_id(offre_id)
    if not offre:
        raise HTTPException(status_code=404, detail="Offre not found")
    return offre
