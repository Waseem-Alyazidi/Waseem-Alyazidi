# backend/app/controllers/home_controller.py
from flask import jsonify
from app.services.home_service import HomeService

class HomeController:
    @staticmethod
    def get_home_data():
        home_data = HomeService.get_home_data()

        if not home_data or not isinstance(home_data["version"]):
            return jsonify({
                "error": "Home data not found"
            }), 404
        return jsonify(home_data), 200

    @staticmethod
    def get_home_data_version():
        version = HomeService.get_home_data_version()

        if not isinstance(version, str):
            return jsonify({
                "error": "Home version not found"
            }), 404
        return version