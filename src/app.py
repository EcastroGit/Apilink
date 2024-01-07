import os
from flask import Flask, render_template
from routes.api_marvel import api_marvel
from routes.api_dc_comics import api_dc_comics
from routes.api_europe_teams import api_europe_teams

def crear_app(): 
    app = Flask(__name__)

    # Configuración de las rutas de las plantillas y archivos estáticos
    app.template_folder = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'templates'))
    app.static_folder = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'static'))

    # Registro de blueprints para las rutas de las APIs
    app.register_blueprint(api_marvel, url_prefix='/api/marvel')
    app.register_blueprint(api_dc_comics, url_prefix='/api/dc-comics')
    app.register_blueprint(api_europe_teams, url_prefix='/api/europe-teams')

    # Definición de rutas y funciones asociadas

    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/catalog")
    def catalog():
        return render_template("catalog.html")

    @app.route("/docs")
    def docs():
        return render_template("docs.html")

    @app.route("/apis-docs")
    def api_docs():
        return render_template("apis-docs.html")

    @app.route("/privacy-policy")
    def privacy_policy():
        return render_template("privacy-policy.html")

    # Manejo de errores 404
    @app.errorhandler(404)
    def page_not_found(error):
        return render_template("404.html"), 404
    return app

# Configuración y arranque del servidor
if __name__ == '__main__':
    try:
        app = crear_app()
        app.run(port=4000, debug=True)  # Puerto 4000 y modo de depuración activado
    except Exception as e:
        print(f"Error al iniciar la aplicación: {e}")
