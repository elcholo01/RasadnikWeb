from flask import Blueprint, request, jsonify
from openai import OpenAI
import os
import io
import base64
import json
import threading
import concurrent.futures
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
        return True
    try:
        r = http_requests.post(
            'https://www.google.com/recaptcha/api/siteverify',
            data={'secret': secret, 'response': token},
            timeout=5,
        )
        result = r.json()
        return result.get('success') and result.get('score', 0) >= 0.5
    except Exception:
        return True


DESIGN_PROMPT = (
    "You are a world-class landscape architect. "
    "Transform this yard into a stunning professionally landscaped garden. "
    "Rules: Keep ALL existing structures IDENTICAL (walls, gates, fences, buildings, "
    "vehicles, paving, poles, furniture, foreground objects). "
    "Keep EXACT same camera angle, perspective, and proportions. "
    "Keep EXACT same sky and background. "
    "Choose plants that naturally suit THIS specific yard's architecture, style, and space. "
    "Create layered, lush, professional planting that looks completely natural. "
    "Add warm evening LED garden lighting on plants. "
    "Result must look like a REAL photograph after professional landscaping "
    "— photorealistic, not a render."
)


def _generate_image(client, image_bytes):
    image_file = io.BytesIO(image_bytes)
    image_file.name = 'image.jpg'
    response = client.images.edit(
        model='gpt-image-1',
        image=image_file,
        prompt=DESIGN_PROMPT,
        size='1024x1024',
        quality='medium',
        n=1,
    )
    return response.data[0].b64_json


def _get_plants_used(client, image_bytes):
    b64 = base64.b64encode(image_bytes).decode('utf-8')
    try:
        response = client.chat.completions.create(
            model='gpt-4o-mini',
            max_tokens=150,
            temperature=0.3,
            messages=[{
                'role': 'user',
                'content': [
                    {
                        'type': 'image_url',
                        'image_url': {
                            'url': f'data:image/jpeg;base64,{b64}',
                            'detail': 'low'
                        }
                    },
                    {
                        'type': 'text',
                        'text': (
                            'For professional landscaping of this yard, list 5-7 plants '
                            'that best suit its style, architecture and space. '
                            'Return ONLY a JSON array with plant names in Serbian, '
                            'e.g. ["Tuja Smaragd", "Lovor Višnja", "Lavanda"]. No other text.'
                        )
                    }
                ]
            }]
        )
        plants = json.loads(response.choices[0].message.content)
        return plants if isinstance(plants, list) else []
    except Exception:
        return []


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

        with concurrent.futures.ThreadPoolExecutor() as executor:
            image_future = executor.submit(_generate_image, client, image_bytes)
            plants_future = executor.submit(_get_plants_used, client, image_bytes)
            image_b64 = image_future.result()
            plants_used = plants_future.result()

        data_url = f"data:image/png;base64,{image_b64}"
        return jsonify({'imageUrl': data_url, 'plantsUsed': plants_used})

    except Exception as e:
        error_msg = str(e)
        if 'insufficient_quota' in error_msg or 'billing' in error_msg.lower():
            return jsonify({'error': 'Nema kredita. Dodajte kredit na OpenAI nalog.'}), 402
        return jsonify({'error': f'Greška: {error_msg}'}), 500
