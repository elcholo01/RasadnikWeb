from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_pymongo import PyMongo

import os

from routes.user import users_blueprint
from routes.poll import polls_blueprint
from routes.contact import contact_blueprint, init_mail

app = Flask(__name__)

app.config['DEBUG'] = os.environ.get('DEBUG', 'False') == 'True'
app.config['MONGO_URI'] = os.environ.get('DB_URI')
app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET')

# Email konfiguracija
app.config['EMAIL_USER'] = os.environ.get('EMAIL_USER')
app.config['EMAIL_PASSWORD'] = os.environ.get('EMAIL_PASSWORD')
app.config['ADMIN_EMAIL'] = os.environ.get('ADMIN_EMAIL')

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
