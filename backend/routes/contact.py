from flask import Blueprint, request, jsonify
import resend
import os

contact_blueprint = Blueprint('contact', __name__)

# Resend API key se učitava iz environment varijable
resend.api_key = os.environ.get('RESEND_API_KEY')

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
        admin_email = os.environ.get('ADMIN_EMAIL', 'dvdcolak@gmail.com')

        params = {
            "from": "Rasadnik Kontakt <onboarding@resend.dev>",
            "to": [admin_email],
            "subject": f"Nova kontakt poruka od {name}",
            "html": f"""
            <h2>Nova poruka sa kontakt forme</h2>
            <p><strong>Ime i prezime:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Telefon:</strong> {phone}</p>
            <p><strong>Poruka:</strong></p>
            <p>{message}</p>
            <hr>
            <p><em>Ova poruka je automatski generisana sa sajta.</em></p>
            """
        }

        # Slanje email-a preko Resend API
        resend.Emails.send(params)

        return jsonify({
            'success': True,
            'message': 'Poruka je uspešno poslata! Hvala na javljanju.'
        })

    except Exception as e:
        import traceback
        error_details = traceback.format_exc()
        print(f"Greška pri slanju email-a: {str(e)}")
        print(f"Detalji: {error_details}")
        return jsonify({
            'success': False,
            'message': f'Greška: {str(e)}'
        }), 500
