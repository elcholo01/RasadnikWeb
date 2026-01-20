import requests
import json

BASE_URL = "http://localhost:5000"

def test_register():
    """Test registracije"""
    print("=== Testing Registration ===")
    
    # Registruj novog korisnika
    user_data = {
        "name": "Test",
        "surname": "User", 
        "address": "Test Address",
        "city": "Belgrade",
        "country": "Serbia",
        "number": "0651234567",
        "email": "testuser@test.com",
        "password": "test123456"
    }
    
    response = requests.post(f"{BASE_URL}/api/users/create", json=user_data)
    print(f"Registration response status: {response.status_code}")
    print(f"Registration response: {response.json()}")
    
    if response.status_code == 201:
        print("Registration successful!")
        
        # Test login sa novim korisnikom
        login_data = {
            "email": "testuser@test.com",
            "password": "test123456"
        }
        
        response = requests.post(f"{BASE_URL}/api/users/login", json=login_data)
        print(f"Login response status: {response.status_code}")
        print(f"Login response: {response.json()}")
        
        if response.status_code == 200:
            print("Login successful!")
            return response.json()["access_token"]
    
    return None

if __name__ == "__main__":
    test_register() 