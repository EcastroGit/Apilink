import os
from flask import Flask, render_template
from config.app_config import server_config
from routes.api_marvel import api_marvel
from routes.api_dc_comics import api_dc_comics
from routes.api_europe_teams import api_europe_teams


app = Flask(__name__)

# Flask searchs templates and static in the same directory as app.py by default
# Configure flask to search in a superior level
app.template_folder = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'templates'))
app.static_folder = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'static'))

# Blueprints for APIs routes
app.register_blueprint(api_marvel, url_prefix='/api/marvel')
app.register_blueprint(api_dc_comics, url_prefix='/api/dc-comics')
app.register_blueprint(api_europe_teams, url_prefix='/api/europe-teams')

# Index template
@app.route("/")
def index():
    return render_template("index.html")

# catalog template
@app.route("/catalog")
def catalog():
    return render_template("catalog.html")

# General Docs template
@app.route("/docs")
def docs():
    return render_template("docs.html")

# APIs Docs template
@app.route("/apis-docs")
def api_docs():
    return render_template("apis-docs.html")

# Privacy policy template
@app.route("/privacy-policy")
def privacy_policy():
    return render_template("privacy-policy.html")

# Error 404 template
def page_not_found(error):
    return render_template("404.html"), 404

# Server starting
if __name__ == '__main__':
    app.config.from_object(server_config['development'])
    app.register_error_handler(404, page_not_found)
    app.run(port=app.config['PORT'])