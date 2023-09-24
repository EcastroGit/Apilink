import os
from flask import Blueprint, jsonify, send_file, request
from models.db_samples.db_marvel_sample import marvel_characters


api_marvel = Blueprint('api_marvel', __name__)

@api_marvel.route("/v1/characters")   
def api_marvel_controller(): # Aquí se debe configurar para enviar imágenes de muéstra desde models
    return jsonify(marvel_characters)  

@api_marvel.route("/v1/characters/avatar/<filename>")
def api_marvel_images(filename):
    image_path = os.path.join(os.path.dirname(__file__), "..", "models", "db_samples", "api_images", "marvel", filename)
    return send_file(image_path, mimetype="image/jpg")  # Cambia la mimetype según el tipo de imagen que estés sirviendo

