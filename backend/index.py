from flask import Flask
from flask_cors import CORS
import os

from routes.contact import contact_blueprint

app = Flask(__name__)

# CORS konfiguracija
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

@app.route('/')
def hello_world():
    return 'Hello World'

app.register_blueprint(contact_blueprint)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)
