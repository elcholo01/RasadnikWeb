from models.user import User
from bson.objectid import ObjectId
from db import db
import bcrypt
from flask import Blueprint, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

user_bp = Blueprint('user', __name__)

def create_user(user_data):
    try:
        print(f"Creating user with email: {user_data.get('email')}")
        
        # Check if user with same email already exists
        if not user_data.get("email") or not user_data.get("password"):
            print("Email and password are required")
            return False
        existing_user = db.users.find_one({"email": user_data.get("email")})

        if existing_user:
            print("User with this email already exists")
            return False

        pass_bytes = user_data.get("password").encode("utf-8")
        hash_pass = bcrypt.hashpw(pass_bytes, bcrypt.gensalt()) 

        new_user = User(
            name = user_data.get("name"),
            surname = user_data.get("surname"),
            address = user_data.get("address"),
            city = user_data.get("city"),
            country = user_data.get("country"),
            number = user_data.get("number"),
            email = user_data.get("email"),
            password = hash_pass
        )

        print(f"User object created: {new_user.__dict__}")
        
        result = db.users.insert_one(new_user.__dict__)
        print(f"Insert result: {result.inserted_id}")
        
        return result.inserted_id is not None

    except Exception as e:
        print(f"Error creating user: {e}")
        import traceback
        traceback.print_exc()
        return False

def check_user(email, password):
    try:
        user = db.users.find_one({'email': email})
        
        if not user:
            return False
            
        result = bcrypt.checkpw(password.encode(), user.get("password")) 
        return result
    except Exception as e:
        print(f"Error checking user: {e}")
        return False

def get_user(email):
    user = db.users.find_one({'email': email})
    return user

def edit_user(id, name, surname, address, city, country, number, email, password):
    try:
        user = db.users.find_one({'_id': ObjectId(id)})

        if not user:
            return False

        db.users.update_one(
            {'_id': ObjectId(id)}, 
            {'$set': {
                'name': name,
                'surname': surname,
                'address': address,
                'city': city,
                'country': country,
                'number': number,
                'email': email,
                'password': password
                }}
        )
        return True;

    except:
        return False
    

@user_bp.route('/api/contact', methods=['POST'])
def contact_form():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    message = data.get('message')

    # Podesi ove podatke za svoj email nalog
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587
    smtp_user = 'dvdcolak@gmail.com'  # OVDE STAVI SVOJ EMAIL
    smtp_password = 'david'    # OVDE STAVI SVOJU LOZINKU ILI APP PASSWORD
    to_email = 'zupskizmaj@gmail.com'   # Na koji email da stigne poruka

    subject = f'Nova poruka sa sajta od {name}'
    body = f"""
Ime i prezime: {name}
Email: {email}
Telefon: {phone}
Poruka:
{message}
"""
    try:
        msg = MIMEMultipart()
        msg['From'] = smtp_user
        msg['To'] = to_email
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain'))

        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, to_email, msg.as_string())
        server.quit()
        return jsonify({'success': True, 'message': 'Poruka je uspešno poslata!'}), 200
    except Exception as e:
        return jsonify({'success': False, 'message': 'Došlo je do greške pri slanju poruke.', 'error': str(e)}), 500
    
