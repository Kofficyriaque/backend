from typing import List, Optional
from database import Database


def get_all_metiers() -> List[dict]:
    return Database.fetch_all("SELECT idMetier, libelle FROM Metiers ORDER BY libelle")


def get_all_regions() -> List[dict]:
    return Database.fetch_all("SELECT idRegion, region FROM Region ORDER BY region")


def get_all_experiences() -> List[dict]:
    return Database.fetch_all("SELECT idExperience, libelle FROM Experience ORDER BY idExperience")


def get_all_competences() -> List[dict]:
    return Database.fetch_all("SELECT idCompetence, libelle FROM Competence ORDER BY libelle")


def search_offres(
    metier: Optional[str] = None,
    region: Optional[str] = None,
    experience: Optional[str] = None,
    salaire_min: Optional[float] = None,
    salaire_max: Optional[float] = None,
    keyword: Optional[str] = None,
    page: int = 1,
    limit: int = 20
) -> dict:
    conditions = []
    params = []
    
    if metier:
        conditions.append("m.libelle LIKE %s")
        params.append(f"%{metier}%")
    
    if region:
        conditions.append("r.region LIKE %s")
        params.append(f"%{region}%")
    
    if experience:
        conditions.append("e.libelle LIKE %s")
        params.append(f"%{experience}%")
    
    if salaire_min is not None:
        conditions.append("s.salaire_avg >= %s")
        params.append(salaire_min)
    
    if salaire_max is not None:
        conditions.append("s.salaire_avg <= %s")
        params.append(salaire_max)
    
    if keyword:
        conditions.append("(o.titre LIKE %s OR o.description LIKE %s)")
        params.append(f"%{keyword}%")
        params.append(f"%{keyword}%")
    
    where_clause = " AND ".join(conditions) if conditions else "1=1"
    
    count_result = Database.fetch_one(
        f"""SELECT COUNT(*) as total
            FROM Offre o
            LEFT JOIN Metiers m ON o.idMetier = m.idMetier
            LEFT JOIN Experience e ON o.idExperience = e.idExperience
            LEFT JOIN Departement d ON o.idDepartement = d.idDepartement
            LEFT JOIN Region r ON d.idRegion = r.idRegion
            LEFT JOIN Salaire s ON o.idsalaire = s.idsalaire
            WHERE {where_clause}""",
        tuple(params) if params else None
    )
    total = count_result["total"] if count_result else 0
    
    offset = (page - 1) * limit
    params.extend([limit, offset])
    
    offres = Database.fetch_all(
        f"""SELECT 
            o.idOffre,
            o.titre,
            o.description,
            s.salaire_min,
            s.salaire_max,
            s.salaire_avg,
            m.libelle as metier,
            e.libelle as experience,
            d.departement,
            r.region
        FROM Offre o
        LEFT JOIN Metiers m ON o.idMetier = m.idMetier
        LEFT JOIN Experience e ON o.idExperience = e.idExperience
        LEFT JOIN Departement d ON o.idDepartement = d.idDepartement
        LEFT JOIN Region r ON d.idRegion = r.idRegion
        LEFT JOIN Salaire s ON o.idsalaire = s.idsalaire
        WHERE {where_clause}
        ORDER BY s.salaire_avg DESC
        LIMIT %s OFFSET %s""",
        tuple(params)
    )
    
    return {
        "total": total,
        "page": page,
        "limit": limit,
        "offres": offres
    }


def get_offre_by_id(offre_id: int) -> Optional[dict]:
    return Database.fetch_one(
        """SELECT 
            o.idOffre, o.titre, o.description,
            s.salaire_min, s.salaire_max, s.salaire_avg,
            m.libelle as metier, e.libelle as experience,
            d.departement, r.region
        FROM Offre o
        LEFT JOIN Metiers m ON o.idMetier = m.idMetier
        LEFT JOIN Experience e ON o.idExperience = e.idExperience
        LEFT JOIN Departement d ON o.idDepartement = d.idDepartement
        LEFT JOIN Region r ON d.idRegion = r.idRegion
        LEFT JOIN Salaire s ON o.idsalaire = s.idsalaire
        WHERE o.idOffre = %s""",
        (offre_id,)
    )
