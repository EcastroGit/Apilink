import os
from flask import Blueprint, jsonify, send_file
from models.db_samples.db_dc_sample import dc_comics_characters


api_dc_comics = Blueprint('api_dc_comics', __name__)

@api_dc_comics.route("/v1/characters")
def api_dc_controller():
    return jsonify(dc_comics_characters)

@api_dc_comics.route("/v1/characters/avatar/<filename>")
def  api_dc_images(filename):
    image_path = os.path.join(os.path.dirname(__file__), "..", "models", "db_samples", "api_images", "dc_comics", filename)
    return send_file(image_path, mimetype="image/jpg")

