from flask import Blueprint, request, jsonify
from openai import OpenAI
import os
import io
import threading
import requests as http_requests
from datetime import date

ai_dizajn_blueprint = Blueprint('ai_dizajn', __name__)

DAILY_LIMIT = 2
_store = {}
_lock = threading.Lock()

def _check_limit(ip):
    bypass = set(os.getenv('BYPASS_IPS', '').split(','))
    if ip in bypass:
        return True
    today = str(date.today())
    with _lock:
        counts = _store.get(ip, {})
        counts = {k: v for k, v in counts.items() if k == today}
        if counts.get(today, 0) >= DAILY_LIMIT:
            return False
        counts[today] = counts.get(today, 0) + 1
        _store[ip] = counts
    return True

def _verify_recaptcha(token):
    secret = os.getenv('RECAPTCHA_SECRET_KEY', '')
    if not secret or not token:
        return True  # ako nije konfigurisano, propusti
    try:
        r = http_requests.post(
            'https://www.google.com/recaptcha/api/siteverify',
            data={'secret': secret, 'response': token},
            timeout=5,
        )
        result = r.json()
        return result.get('success') and result.get('score', 0) >= 0.5
    except Exception:
        return True  # ako Google nije dostupan, propusti


PROMPT = (
    "This is a real yard photo. Do NOT change: the brick paving, pergola frame, car, buildings, "
    "red tile roof, white balustrade wall, iron gate, fences, or any existing structure. "
    "The sky must remain bright blue as in the original — do not darken it. "
    "Only add plants in the empty soil areas: tall thuja trees along the back wall, "
    "lavender and low round shrubs along the garden edge, a small natural rock waterfall pond in one corner, "
    "a Japanese maple as a focal point with warm spotlight. "
    "Add warm yellow LED ground spotlights shining upward onto the plants. "
    "Time of day: early evening blue hour — sky is still bright blue with clouds, "
    "natural daylight is present, warm LED lights are just turning on. "
    "The result must look like a real photo of the same yard with plants professionally added. "
    "Same camera angle and perspective. Photorealistic, vibrant natural colors."
)


@ai_dizajn_blueprint.route('/api/ai-dizajn', methods=['POST'])
def generate_design():
    api_key = os.getenv('OPENAI_API_KEY', '')
    if not api_key:
        return jsonify({'error': 'API key nije konfigurisan'}), 500

    recaptcha_token = request.form.get('recaptcha_token', '')
    if not _verify_recaptcha(recaptcha_token):
        return jsonify({'error': 'Verifikacija nije uspela. Osvežite stranicu i pokušajte ponovo.'}), 403

    ip = request.headers.get('X-Forwarded-For', request.remote_addr).split(',')[0].strip()
    if not _check_limit(ip):
        return jsonify({'error': 'Dnevni limit dostignut. Pokušajte sutra.'}), 429

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
