#!/usr/bin/env python3
"""
Test script za proveru email konfiguracije sa Outlook/Hotmail
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

# Outlook/Hotmail email konfiguracija (manje restriktivna)
app.config['MAIL_SERVER'] = 'smtp-mail.outlook.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'tilijarasadnik5@gmail.com'  # možete koristiti bilo koji email
app.config['MAIL_PASSWORD'] = 'tilija123.'  # vaša lozinka

# Inicijalizacija mail-a
mail = Mail(app)

def test_email():
    """Test funkcija za slanje email-a"""
    try:
        print(f"Šaljem test email preko Outlook SMTP...")
        print(f"Sa: {app.config['MAIL_USERNAME']}")
        print(f"Na: dvdcolak@gmail.com")
        
        msg = Message(
            subject='Test Email - Rasadnik Web (Outlook SMTP)',
            body='Ovo je test email za proveru Outlook SMTP konfiguracije.',
            sender=app.config['MAIL_USERNAME'],
            recipients=['dvdcolak@gmail.com']
        )
        
        mail.send(msg)
        print("✅ Test email je uspešno poslat preko Outlook SMTP!")
        
    except Exception as e:
        print(f"❌ Greška pri slanju email-a: {str(e)}")
        print("\nMogući uzroci:")
        print("1. Proverite da li su email i lozinka ispravni")
        print("2. Proverite da li je uključen 'Less secure app access'")
        print("3. Pokušajte sa Gmail App Password-om")

if __name__ == '__main__':
    test_email()
