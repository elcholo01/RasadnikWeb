from flask import Blueprint, json, jsonify, request
from flask_jwt_extended import create_access_token, jwt_required
import jsonschema
from datetime import timedelta
from controllers.user import create_user, check_user, get_user, edit_user
from jsonschema import validate

user_data_schema = {
    "type": "object",
    "properties": {
        "name": { "type": "string", "minLength": 3},
        "surname": { "type": "string", "minLength": 3},
        "address": { "type": "string", "minLength": 3},
        "city": { "type": "string", "minLength": 3},
        "country": { "type": "string", "minLength": 3},
        "number": { "type": "string", "minLength": 3},
        "email": { "type": "string", "minLength": 3},
        "password": { "type": "string", "minLength": 8},
    },
    "required": [
        "name",
        "surname",
        "address",
        "city",
        "country",
        "number",
        "email",
        "password"
    ]
}

login_data_schema = {
    "type": "object",
    "properties": {
        "email": { "type":"string", "minLength": 3},
        "password": { "type":"string", "minLength": 3},
    },
    "required": [
        "email",
        "password"
    ]
}

users_blueprint = Blueprint('users_blueprint', __name__)

@users_blueprint.route('/api/users/create', methods = ["POST"])
def create():
    user_data = request.get_json()

    try:
        validate(instance=user_data, schema=user_data_schema)
    except jsonschema.ValidationError as e:
        return jsonify({'data': e.message}), 400
        
    user_created = create_user(user_data)

    if not user_created:
        return jsonify({'data': "Korisnik nije uspesno kreiran."}), 501

    return jsonify({'data': "Uspesno kreiran korisnik."}), 201
    
@users_blueprint.route('/api/users/login', methods=["POST"])
def login():
    try:
        login_data = request.get_json()

        try:
            validate(instance=login_data, schema=login_data_schema)
        except jsonschema.ValidationError as e:
            return jsonify({'error': e.message}), 400

        if not check_user(login_data.get("email"), login_data.get("password")):
            return jsonify({'error': 'Neispravni email ili lozinka.'}), 401

        access_token = create_access_token(identity=login_data.get("email"), expires_delta=timedelta(days=3))

        response = jsonify({
            'message': 'Uspešno ste se prijavili.', 
            'access_token': access_token
        })

        return response, 200
        
    except Exception as e:
        print(f"Login error: {e}")
        return jsonify({'error': 'Greška pri prijavi.'}), 500



@users_blueprint.route('/api/testjwt', methods=["GET"])
@jwt_required()
def testjwt():
    return jsonify(msg="baz"), 200

@users_blueprint.route('/api/users/get', methods=["POST"])
@jwt_required()
def get():
    email = request.get_json().get("email")

    if not email:
        return jsonify({'error': 'Missing email'}), 400

    user = get_user(email)

    if not user:
        return jsonify({'error': 'The user does not exist.'}), 404

    return jsonify({'data': json.dumps(user)}), 200

@users_blueprint.route('/api/users/profile', methods=["GET"])
@jwt_required()
def profile():
    try:
        from flask_jwt_extended import get_jwt_identity
        email = get_jwt_identity()
        
        user = get_user(email)
        
        if not user:
            return jsonify({'error': 'Korisnik nije pronađen.'}), 404
            
        # Ukloni password iz odgovora
        user.pop('password', None)
        user['_id'] = str(user['_id'])
        
        return jsonify({'user': user}), 200
        
    except Exception as e:
        print(f"Profile error: {e}")
        return jsonify({'error': 'Greška pri dohvatanju profila.'}), 500

@users_blueprint.route('/api/users/edit', methods = ["POST"])
@jwt_required()
def edit():
    data = request.get_json()
    id = data.get('id')
    name = data.get('name')
    surname = data.get('surname')
    address = data.get('address')
    city = data.get('city')
    country = data.get('country')
    number = data.get('number')
    email = data.get('email')
    password = data.get('password')

    if not all([id, name, surname, address, city, country, number, email, password]):
        return jsonify({'data': 'Missing required fields'}), 400
    
    if edit_user(id, name, surname, address, city, country, number, email, password):
        return jsonify({'data': "Successfully changed user."}), 200
    else:
        return jsonify({'data': "Change failed."}), 500
