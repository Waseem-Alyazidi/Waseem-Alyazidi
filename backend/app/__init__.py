# backend/app/__init__.py
from flask import Flask
from flask_cors import CORS # type: ignore
from app.core.config import Config

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    CORS(app, origins=app.config["CORS_ORIGINS"])

    from app.routes.home_route import home_bp
    app.register_blueprint(home_bp, url_prefix="/api")
    
    return app