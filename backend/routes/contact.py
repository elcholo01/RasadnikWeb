from flask import Blueprint, request, jsonify, current_app
from flask_mail import Mail, Message
import os

contact_blueprint = Blueprint('contact', __name__)

# Konfiguracija za email
mail = Mail()

def init_mail(app):
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 587
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USERNAME'] = app.config.get('EMAIL_USER', 'your-email@gmail.com')
    app.config['MAIL_PASSWORD'] = app.config.get('EMAIL_PASSWORD', 'your-app-password')
    mail.init_app(app)

@contact_blueprint.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        
        # Validacija podataka
        required_fields = ['name', 'email', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'success': False, 'message': f'Polje {field} je obavezno'}), 400
        
        name = data['name']
        email = data['email']
        phone = data.get('phone', 'Nije uneto')
        message = data['message']
        
        # Kreiranje email poruke
        subject = f'Nova kontakt poruka od {name}'
        body = f"""
        Nova poruka sa kontakt forme:
        
        Ime i prezime: {name}
        Email: {email}
        Telefon: {phone}
        
        Poruka:
        {message}
        
        ---
        Ova poruka je automatski generisana sa sajta.
        """
        
        # Slanje email-a
        msg = Message(
            subject=subject,
            body=body,
            sender=current_app.config.get('EMAIL_USER', 'tilijarasadnik5@gmail.com'),
            recipients=[current_app.config.get('ADMIN_EMAIL', 'dvdcolak@gmail.com')]
        )
        
        mail.send(msg)
        
        return jsonify({
            'success': True, 
            'message': 'Poruka je uspešno poslata! Hvala na javljanju.'
        })
        
    except Exception as e:
        print(f"Greška pri slanju email-a: {str(e)}")
        return jsonify({
            'success': False, 
            'message': 'Došlo je do greške pri slanju poruke. Pokušajte ponovo.'
        }), 500
