# backend/app/routes/home_route.py
from flask import Blueprint, request
from app.controllers.home_controller import HomeController

home_bp = Blueprint("home_bp", __name__)

@home_bp.get("/home-data")
def home_data():
    return HomeController.get_home_data()

@home_bp.get("/home-data-version")
def home_data_version():
    return HomeController.get_home_data_version()