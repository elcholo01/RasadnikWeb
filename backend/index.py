from flask import Flask, jsonify
from flask_cors import CORS
import os

from routes.contact import contact_blueprint, init_mail

app = Flask(__name__)

# CORS konfiguracija
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

app.config['DEBUG'] = os.environ.get('DEBUG', 'False') == 'True'

# Email konfiguracija
app.config['EMAIL_USER'] = os.environ.get('EMAIL_USER')
app.config['EMAIL_PASSWORD'] = os.environ.get('EMAIL_PASSWORD')
app.config['ADMIN_EMAIL'] = os.environ.get('ADMIN_EMAIL')

# Inicijalizacija email-a
init_mail(app)

@app.route('/')
def hello_world():
    return 'Hello World'

app.register_blueprint(contact_blueprint)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)
