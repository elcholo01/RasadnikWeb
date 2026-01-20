import requests
import json

BASE_URL = "http://localhost:5000"

def test_user_registration():
    """Test user registration"""
    print("=== Testing User Registration ===")
    
    user_data = {
        "name": "Test",
        "surname": "User", 
        "address": "Test Address",
        "city": "Belgrade",
        "country": "Serbia",
        "number": "0651234567",
        "email": "test@test.com",
        "password": "test123456"  # Changed to 10 characters
    }
    
    response = requests.post(f"{BASE_URL}/api/users/create", json=user_data)
    print(f"Registration Status: {response.status_code}")
    print(f"Response: {response.json()}")
    return response.json()

def test_user_login():
    """Test user login"""
    print("\n=== Testing User Login ===")
    
    login_data = {
        "email": "test@test.com",
        "password": "test123456"  # Changed to match registration
    }
    
    response = requests.post(f"{BASE_URL}/api/users/login", json=login_data)
    print(f"Login Status: {response.status_code}")
    print(f"Response: {response.json()}")
    
    if response.status_code == 200:
        return response.json().get("access_token")
    return None

def test_create_poll(token):
    """Test poll creation"""
    print("\n=== Testing Poll Creation ===")
    
    poll_data = {
        "name": "Test Anketa",
        "question": "Da li vam se sviđa ovaj sistem?",
        "end_date": "2025-12-31T23:59:59Z",
        "emails": ["test@test.com", "user@example.com"],
        "is_anonymous": False
    }
    
    headers = {"Authorization": f"Bearer {token}"}
    response = requests.post(f"{BASE_URL}/api/polls/create", json=poll_data, headers=headers)
    print(f"Create Poll Status: {response.status_code}")
    print(f"Response: {response.json()}")
    
    if response.status_code == 201:
        return response.json().get("poll_id")
    return None

def test_get_user_polls(token):
    """Test getting user polls"""
    print("\n=== Testing Get User Polls ===")
    
    headers = {"Authorization": f"Bearer {token}"}
    response = requests.get(f"{BASE_URL}/api/polls", headers=headers)
    print(f"Get Polls Status: {response.status_code}")
    print(f"Response: {response.json()}")

def test_get_poll(poll_id):
    """Test getting specific poll"""
    print(f"\n=== Testing Get Poll {poll_id} ===")
    
    response = requests.get(f"{BASE_URL}/api/polls/{poll_id}")
    print(f"Get Poll Status: {response.status_code}")
    print(f"Response: {response.json()}")

def test_submit_response(poll_id):
    """Test submitting poll response"""
    print(f"\n=== Testing Submit Response for Poll {poll_id} ===")
    
    response_data = {
        "poll_id": poll_id,
        "response": "da",
        "email": "voter@example.com"
    }
    
    response = requests.post(f"{BASE_URL}/api/polls/{poll_id}/respond", json=response_data)
    print(f"Submit Response Status: {response.status_code}")
    print(f"Response: {response.json()}")

def test_get_poll_results(poll_id):
    """Test getting poll results"""
    print(f"\n=== Testing Get Poll Results for Poll {poll_id} ===")
    
    response = requests.get(f"{BASE_URL}/api/polls/{poll_id}/results")
    print(f"Get Results Status: {response.status_code}")
    print(f"Response: {response.json()}")

def main():
    """Run all tests"""
    print("Starting API Tests...")
    
    # Test registration
    registration_result = test_user_registration()
    
    # Test login
    token = test_user_login()
    
    if token:
        # Test poll creation
        poll_id = test_create_poll(token)
        
        if poll_id:
            # Test getting user polls
            test_get_user_polls(token)
            
            # Test getting specific poll
            test_get_poll(poll_id)
            
            # Test submitting response
            test_submit_response(poll_id)
            
            # Test getting results
            test_get_poll_results(poll_id)
    
    print("\n=== All Tests Completed ===")

if __name__ == "__main__":
    main() 