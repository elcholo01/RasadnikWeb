from flask import Flask, request as flask_request
from flask_cors import CORS
import os

from routes.contact import contact_blueprint
from routes.ai_dizajn import ai_dizajn_blueprint

app = Flask(__name__)

# CORS konfiguracija - samo dozvoljeni domeni
ALLOWED_ORIGINS = [
    "https://rasadnik-web-t2vb.vercel.app",
    "https://rasadniktilija.rs",
    "https://www.rasadniktilija.rs",
    "http://localhost:3000"  # za lokalni razvoj
]

CORS(app, resources={r"/*": {"origins": ALLOWED_ORIGINS}}, supports_credentials=True)

@app.after_request
def after_request(response):
    origin = flask_request.headers.get('Origin')
    if origin in ALLOWED_ORIGINS:
        response.headers['Access-Control-Allow-Origin'] = origin
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

@app.route('/')
def hello_world():
    return 'Hello World'

@app.route('/health')
def health():
    return 'OK'

app.register_blueprint(contact_blueprint)
app.register_blueprint(ai_dizajn_blueprint)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)
