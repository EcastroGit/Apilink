from src.app import app

if __name__ == '__main__':
    app.config.from_object('config.app_config.development')
    app.register_error_handler(404, app.page_not_found)
    app.run(port=app.config['PORT'])