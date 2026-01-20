#!/usr/bin/env python3
"""
Test script za proveru email konfiguracije
"""

import configparser
import os
from flask import Flask
from flask_mail import Mail, Message

# Učitavanje konfiguracije
config = configparser.ConfigParser()
config.read(os.path.abspath(os.path.join("backend", "config.ini")))

# Kreiranje Flask aplikacije
app = Flask(__name__)

# Email konfiguracija
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = config['PROD']['EMAIL_USER']
app.config['MAIL_PASSWORD'] = config['PROD']['EMAIL_PASSWORD']

# Inicijalizacija mail-a
mail = Mail(app)

def test_email():
    """Test funkcija za slanje email-a"""
    with app.app_context():
        try:
            print(f"Šaljem test email...")
            print(f"Sa: {config['PROD']['EMAIL_USER']}")
            print(f"Na: {config['PROD']['ADMIN_EMAIL']}")
            
            msg = Message(
                subject='Test Email - Rasadnik Web',
                body='Ovo je test email za proveru konfiguracije.',
                sender=config['PROD']['EMAIL_USER'],
                recipients=[config['PROD']['ADMIN_EMAIL']]
            )
            
            mail.send(msg)
            print("✅ Test email je uspešno poslat!")
            
        except Exception as e:
            print(f"❌ Greška pri slanju email-a: {str(e)}")
            print("\nMogući uzroci:")
            print("1. Proverite da li su email i lozinka ispravni")
            print("2. Proverite da li je uključena 2FA na Gmail nalogu")
            print("3. Proverite da li je kreiran App Password")
            print("4. Proverite da li je uključen 'Less secure app access'")

if __name__ == '__main__':
    test_email()
