from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_pymongo import PyMongo

import os
import configparser

from routes.user import users_blueprint
from routes.poll import polls_blueprint
from routes.contact import contact_blueprint, init_mail

config = configparser.ConfigParser()
config.read(os.path.abspath(os.path.join("config.ini")))

app = Flask(__name__)

app.config['DEBUG'] = True
app.config['MONGO_URI'] = config['PROD']['DB_URI']
app.config['JWT_SECRET_KEY'] = config['PROD']['JWT_SECRET']

# Email konfiguracija
app.config['EMAIL_USER'] = config['PROD']['EMAIL_USER']
app.config['EMAIL_PASSWORD'] = config['PROD']['EMAIL_PASSWORD']
app.config['ADMIN_EMAIL'] = config['PROD']['ADMIN_EMAIL']

# Initialize PyMongo
mongo = PyMongo()
mongo.init_app(app)
app.extensions['pymongo'] = mongo

jwt = JWTManager(app)

# Inicijalizacija email-a
init_mail(app)

@app.route('/')
def hello_world():
    return 'Hello World'

CORS(app, origins= "*",  methods=["POST", "GET", "PUT", "DELETE"])

app.register_blueprint(users_blueprint)
app.register_blueprint(polls_blueprint)
app.register_blueprint(contact_blueprint)

if __name__ == '__main__':
   app.run(host='0.0.0.0',debug=True,port=5000) # ovo je zbog docker-a
