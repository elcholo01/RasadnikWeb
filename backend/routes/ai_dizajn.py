from flask import Blueprint, request, jsonify
from openai import OpenAI
import os
import io
import base64
import json
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


VISION_SYSTEM_PROMPT = """You are an expert landscape architect and photographer.

Analyze this yard photo and generate a detailed image generation prompt
that visualizes the same yard beautifully landscaped.

The prompt you generate must:
- Preserve ALL existing structures exactly as they are: walls, fences, gates,
  driveways, carports, buildings, vehicles, paving — exact same positions and appearance
- Add appropriate plants, trees, hedges, lawn, and flowers in all bare soil areas
- Match the existing architectural style of the property
- Include layered planting: tall privacy plants at back, medium shrubs in middle,
  low ground cover and flowers at edges
- Add warm LED ground spotlights illuminating plants from below
- Early evening atmosphere: sky still bright blue, warm lights just turning on
- Prefer these plants when they fit naturally: Thuja, Cherry Laurel, Photinia Red Robin,
  Leyland Cypress, Bamboo, Japanese Maple, Lavender, Ornamental Grasses, Boxwood, Roses
- Add a natural water feature if space allows
- Be photorealistic — result must look like a real photo of this yard after landscaping
- Keep the exact same camera angle, perspective, and proportions

Return ONLY valid JSON:
{
  "image_prompt": "your detailed prompt here"
}"""

FALLBACK_PROMPT = (
    "Create a professional landscape design for this yard photo. "
    "PRESERVE: Keep every existing element exactly as it is — all surfaces, structures, buildings, "
    "objects, and the sky. Do not remove or replace anything already in the photo. "
    "ADD: Fill all bare soil and unplanted areas with beautiful layered landscaping suited "
    "to the style, scale, and character of this specific yard: "
    "tall plants for privacy and structure, medium shrubs for volume and color, "
    "low ground cover and flowers at the edges, climbing plants where walls or structures allow. "
    "Add a natural water feature if the space allows. "
    "Add warm LED ground spotlights illuminating the plants from below. "
    "Preferred plants when they fit: Thuja, Cherry Laurel, Photinia Red Robin, "
    "Leyland Cypress, Bamboo, Japanese Maple, Lavender, Ornamental Grasses, Boxwood, Roses. "
    "Lighting: early evening, sky still bright blue, warm lights just switched on. "
    "The result must look like a real photograph of this exact yard after professional landscaping. "
    "Keep the original camera angle, perspective, and proportions. Photorealistic, vibrant, high quality."
)


def _generate_prompt_with_vision(client, image_bytes):
    b64 = base64.b64encode(image_bytes).decode('utf-8')
    try:
        response = client.chat.completions.create(
            model='gpt-4o',
            max_tokens=1000,
            temperature=0.4,
            response_format={'type': 'json_object'},
            messages=[
                {
                    'role': 'system',
                    'content': VISION_SYSTEM_PROMPT
                },
                {
                    'role': 'user',
                    'content': [
                        {
                            'type': 'image_url',
                            'image_url': {
                                'url': f'data:image/jpeg;base64,{b64}',
                                'detail': 'high'
                            }
                        },
                        {
                            'type': 'text',
                            'text': 'Analyze this yard and generate the image prompt.'
                        }
                    ]
                }
            ]
        )
        result = json.loads(response.choices[0].message.content)
        return result.get('image_prompt')
    except Exception:
        return None


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

        prompt = _generate_prompt_with_vision(client, image_bytes)
        if not prompt:
            prompt = FALLBACK_PROMPT

        image_file = io.BytesIO(image_bytes)
        image_file.name = 'image.jpg'

        response = client.images.edit(
            model='gpt-image-2',
            image=image_file,
            prompt=prompt,
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
        return jsonify({'error': f'Greška: {error_msg}'}), 500
