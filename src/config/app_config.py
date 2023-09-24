
import os

class DevelopmentConfig():
    DEBUG = True
    PORT = int(os.environ.get('PORT', 4000))

server_config = {
    'development': DevelopmentConfig
} 