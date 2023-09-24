import os
from flask import Blueprint, jsonify, send_file
from models.db_samples.db_teams_sample import europe_teams


api_europe_teams = Blueprint('api_europe_teams', __name__)

@api_europe_teams.route("/v1/top-teams")
def api_teams_controller():
    return jsonify(europe_teams)

@api_europe_teams.route("/v1/top-teams/crest/<filename>")
def api_teams_images(filename):
    image_path = os.path.join(os.path.dirname(__file__), "..", "models", "db_samples", "api_images", "europe_teams", filename)
    return send_file(image_path, mimetype="image/jpg")  # Cambia la mimetype según el tipo de imagen que estés sirviendo