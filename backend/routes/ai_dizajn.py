from flask import Blueprint, request, jsonify
from openai import OpenAI
import os
import io

ai_dizajn_blueprint = Blueprint('ai_dizajn', __name__)

PROMPT = (
    "Transform this yard into a professional landscape design. "
    "Add decorative plants, flowers, trimmed hedges, stone pathways, "
    "ornamental trees and lush vegetation. Keep the same perspective and layout. "
    "Photorealistic, high quality photography."
)


@ai_dizajn_blueprint.route('/api/ai-dizajn', methods=['POST'])
def generate_design():
    api_key = os.getenv('OPENAI_API_KEY', '')
    if not api_key:
        return jsonify({'error': 'API key nije konfigurisan'}), 500

    if 'image' not in request.files:
        return jsonify({'error': 'Nema slike'}), 400

    file = request.files['image']
    if not file.filename:
        return jsonify({'error': 'Nema odabrane slike'}), 400

    try:
        client = OpenAI(api_key=api_key)

        image_bytes = file.read()
        image_file = io.BytesIO(image_bytes)
        image_file.name = 'image.jpg'

        response = client.images.edit(
            model='gpt-image-1',
            image=image_file,
            prompt=PROMPT,
            size='1024x1024',
            quality='medium',
            n=1,
        )

        image_base64 = response.data[0].b64_json
        data_url = f"data:image/png;base64,{image_base64}"

        return jsonify({'imageUrl': data_url})

    except Exception as e:
        error_msg = str(e)
        if 'insufficient_quota' in error_msg or 'billing' in error_msg.lower():
            return jsonify({'error': 'Nema kredita. Dodajte kredit na OpenAI nalog.'}), 402
        return jsonify({'error': 'Greška pri generisanju. Pokušajte ponovo.'}), 500
