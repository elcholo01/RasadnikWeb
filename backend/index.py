from flask import Flask
from flask_cors import CORS
import os

from routes.contact import contact_blueprint, init_mail

app = Flask(__name__)

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

CORS(app, origins="*", methods=["POST", "GET", "PUT", "DELETE"])

app.register_blueprint(contact_blueprint)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)
