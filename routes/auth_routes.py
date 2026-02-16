from fastapi import APIRouter, Depends
from pydantic import BaseModel, EmailStr
from typing import Optional
from services.auth_service import (
    register_user, authenticate_user, create_access_token, get_current_user,
    update_profile, change_password, generate_reset_code, reset_password, 
    change_role, send_verification_code, verify_email_code
)

router = APIRouter(prefix="/auth", tags=["Authentication"])


class RegisterRequest(BaseModel):
    nom: str
    prenom: str
    email: EmailStr
    password: str
    location: str
    role: str
    date_creation:str

class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    idUtilisateur: int
    nom: str
    prenom: str
    email: str
    location: str
    role: Optional[str]
    date_creation:str


class TokenResponse(BaseModel):
    access_token: str
    user: UserResponse


class UpdateProfileRequest(BaseModel):
    nom: str
    prenom: str


class ChangePasswordRequest(BaseModel):
    old_password: str
    new_password: str


class ChangeRoleRequest(BaseModel):
    role: str


class ForgotPasswordRequest(BaseModel):
    email: EmailStr


class ResetPasswordRequest(BaseModel):
    email: EmailStr
    code: str
    new_password: str


class VerifyEmailRequest(BaseModel):
    email: EmailStr
    code: str


@router.post("/register", response_model=TokenResponse)
def register(data: RegisterRequest):
    user = register_user(
        nom=data.nom,
        prenom=data.prenom,
        email=data.email,
        password=data.password,
        location=data.location,
        role=data.role,
        date_creation=data.date_creation
    )
    token = create_access_token(user["idUtilisateur"])
    return TokenResponse(access_token=token, user=UserResponse(**user))


@router.post("/login", response_model=TokenResponse)
def login(data: LoginRequest):
    user = authenticate_user(email=data.email, password=data.password)
    token = create_access_token(user["idUtilisateur"])
    return TokenResponse(access_token=token, user=user)

#pas nécessaire
@router.get("/me", response_model=UserResponse)
def get_me(current_user: dict = Depends(get_current_user)):
    return UserResponse(**current_user)


@router.put("/profile", response_model=UserResponse)
def update_user_profile(data: UpdateProfileRequest, current_user: dict = Depends(get_current_user)):
    user = update_profile(current_user["idUtilisateur"], data.nom, data.prenom)
    return UserResponse(**user)


@router.post("/change-password")
def change_user_password(data: ChangePasswordRequest, current_user: dict = Depends(get_current_user)):
    change_password(current_user["idUtilisateur"], data.old_password, data.new_password)
    return {"message": "Password changed successfully"}


@router.post("/change-role", response_model=UserResponse)
def change_user_role(data: ChangeRoleRequest, current_user: dict = Depends(get_current_user)):
    user = change_role(current_user["idUtilisateur"], data.role)
    return UserResponse(**user)


@router.post("/forgot-password")
def forgot_password(data: ForgotPasswordRequest):
    result = generate_reset_code(data.email)
    return result


@router.post("/reset-password")
def reset_user_password(data: ResetPasswordRequest):
    reset_password(data.email, data.code, data.new_password)
    return {"message": "Password reset successfully"}


@router.post("/send-verification")
def send_verification(data: ForgotPasswordRequest):
    result = send_verification_code(data.email)
    return result


@router.post("/verify-email")
def verify_email(data: VerifyEmailRequest):
    verify_email_code(data.email, data.code)
    return {"message": "Email verified successfully"}

