from flask import Flask, request
import os

from routes.contact import contact_blueprint
from routes.ai_dizajn import ai_dizajn_blueprint

app = Flask(__name__)

ALLOWED_ORIGINS = [
    "https://rasadnik-web-t2vb.vercel.app",
    "https://rasadniktilija.rs",
    "https://www.rasadniktilija.rs",
    "http://localhost:3000"
]

@app.after_request
def add_cors(response):
    origin = request.headers.get('Origin', '')
    if origin in ALLOWED_ORIGINS:
        response.headers['Access-Control-Allow-Origin'] = origin
    else:
        response.headers['Access-Control-Allow-Origin'] = ALLOWED_ORIGINS[1]
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    response.headers['Access-Control-Max-Age'] = '3600'
    return response

@app.before_request
def handle_preflight():
    if request.method == 'OPTIONS':
        origin = request.headers.get('Origin', '')
        allowed = origin if origin in ALLOWED_ORIGINS else ALLOWED_ORIGINS[1]
        resp = app.make_response('')
        resp.status_code = 204
        resp.headers['Access-Control-Allow-Origin'] = allowed
        resp.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
        resp.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
        resp.headers['Access-Control-Max-Age'] = '3600'
        return resp

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
