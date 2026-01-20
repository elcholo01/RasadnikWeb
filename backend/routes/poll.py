from flask import Blueprint, jsonify, request
from bson import json_util
from flask_jwt_extended import jwt_required, get_jwt_identity
from jsonschema import validate
import jsonschema
from datetime import datetime

from controllers.poll import (
    create_poll, get_poll, get_user_polls, delete_poll, 
    finish_poll, submit_poll_response, search_polls
)

poll_data_schema = {
    "type": "object",
    "properties": {
        "name": { "type": "string", "minLength": 3 },
        "question": { "type": "string", "minLength": 3 },
        "end_date": { "type": "string" },
        "emails": { 
            "type": "array", 
            "items": { "type": "string"},
            "maxItems": 50
        },
        "is_anonymous": { "type": "boolean" }
    },
    "required": ["name", "question", "end_date", "emails"]
}

polls_blueprint = Blueprint("polls_blueprint", __name__)

@polls_blueprint.route("/api/polls/create", methods=["POST"])
@jwt_required()
def create():
    """Kreira novu anketu"""
    poll_data = request.get_json()
    try:
        validate(instance=poll_data, schema=poll_data_schema)
    except jsonschema.ValidationError as e:
        return jsonify({'error': e.message}), 400

    # Dodaj creator_id iz JWT tokena
    user_id = get_jwt_identity()
    poll_data["creator_id"] = user_id

    result = create_poll(poll_data)

    if result["success"]:
        return jsonify({'message': 'Anketa je uspešno kreirana', 'poll_id': result["poll_id"]}), 201
    else:
        return jsonify({'error': result["error"]}), 400

@polls_blueprint.route("/api/polls", methods=["GET"])
@jwt_required()
def get_user_polls_route():
    """Dohvata sve ankete trenutnog korisnika"""
    user_id = get_jwt_identity()
    result = get_user_polls(user_id)

    if result["success"]:
        return jsonify({'polls': result["polls"]}), 200
    else:
        return jsonify({'error': result["error"]}), 400

@polls_blueprint.route("/api/polls/<poll_id>", methods=["GET"])
def get_by_id(poll_id):
    """Dohvata anketu po ID-u (javno dostupno)"""
    result = get_poll(poll_id)

    if result["success"]:
        return jsonify({'poll': result["poll"]}), 200
    else:
        return jsonify({'error': result["error"]}), 404

@polls_blueprint.route("/api/polls/<poll_id>/delete", methods=["DELETE"])
@jwt_required()
def delete_poll_route(poll_id):
    """Briše anketu (samo vlasnik)"""
    user_id = get_jwt_identity()
    result = delete_poll(poll_id, user_id)

    if result["success"]:
        return jsonify({'message': 'Anketa je uspešno obrisana'}), 200
    else:
        return jsonify({'error': result["error"]}), 400

@polls_blueprint.route("/api/polls/<poll_id>/finish", methods=["PUT"])
@jwt_required()
def finish_poll_route(poll_id):
    """Završava anketu (samo vlasnik)"""
    user_id = get_jwt_identity()
    result = finish_poll(poll_id, user_id)

    if result["success"]:
        return jsonify({'message': 'Anketa je uspešno završena'}), 200
    else:
        return jsonify({'error': result["error"]}), 400

@polls_blueprint.route("/api/polls/<poll_id>/respond", methods=["POST"])
def submit_response(poll_id):
    """Podnosi odgovor na anketu (javno dostupno)"""
    data = request.get_json()
    response = data.get("response")
    email = data.get("email")  # Opciono, za anonimne ankete

    if not response:
        return jsonify({'error': 'Response je obavezan'}), 400

    result = submit_poll_response(poll_id, response, email)

    if result["success"]:
        return jsonify({'message': 'Odgovor je uspešno podnet'}), 200
    else:
        return jsonify({'error': result["error"]}), 400

@polls_blueprint.route("/api/polls/search", methods=["GET"])
@jwt_required()
def search_polls_route():
    """Pretražuje ankete korisnika"""
    user_id = get_jwt_identity()
    search_term = request.args.get("q", "")
    
    if not search_term:
        return jsonify({'error': 'Search term je obavezan'}), 400

    result = search_polls(user_id, search_term)

    if result["success"]:
        return jsonify({'polls': result["polls"]}), 200
    else:
        return jsonify({'error': result["error"]}), 400

@polls_blueprint.route("/api/polls/<poll_id>/results", methods=["GET"])
def get_poll_results(poll_id):
    """Dohvata rezultate ankete (javno dostupno)"""
    result = get_poll(poll_id)

    if not result["success"]:
        return jsonify({'error': result["error"]}), 404

    poll = result["poll"]
    
    # Ako je anonimna, ne prikazuj email-ove
    if poll["is_anonymous"]:
        poll["responses"] = []
    
    return jsonify({
        'poll': poll,
        'results': poll["results"],
        'total_votes': sum(poll["results"].values())
    }), 200


