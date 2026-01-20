import requests
import json

BASE_URL = "http://localhost:5000"

def test_voting():
    """Test glasanja na anketu"""
    print("=== Testing Voting ===")
    
    # Prvo se uloguj
    login_data = {
        "email": "testuser@test.com",
        "password": "test123456"
    }
    
    response = requests.post(f"{BASE_URL}/api/users/login", json=login_data)
    if response.status_code != 200:
        print("Login failed")
        return
    
    token = response.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}
    
    # Kreiraj anketu
    poll_data = {
        "name": "Test anketa za glasanje",
        "question": "Da li vam se sviđa ovaj test?",
        "end_date": "2025-12-31T23:59:00",
        "emails": ["test@example.com"],
        "is_anonymous": False
    }
    
    response = requests.post(f"{BASE_URL}/api/polls/create", json=poll_data, headers=headers)
    if response.status_code != 201:
        print(f"Failed to create poll: {response.json()}")
        return
    
    poll_id = response.json()["poll_id"]
    print(f"Created poll with ID: {poll_id}")
    
    # Test glasanja
    vote_data = {
        "response": "da",
        "email": "test@example.com"
    }
    
    response = requests.post(f"{BASE_URL}/api/polls/{poll_id}/respond", json=vote_data)
    print(f"Vote response: {response.status_code}")
    print(f"Vote result: {response.json()}")
    
    # Proveri rezultate
    response = requests.get(f"{BASE_URL}/api/polls/{poll_id}")
    if response.status_code == 200:
        poll = response.json()["poll"]
        print(f"Poll results: {poll.get('results', {})}")

if __name__ == "__main__":
    test_voting() 