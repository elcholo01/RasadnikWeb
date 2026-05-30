from flask import Flask
from flask_cors import CORS
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

CORS(app, origins=ALLOWED_ORIGINS)

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
