# backend/app/core/config.py
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    CORS_ORIGINS = os.getenv("CORS_ORIGINS")