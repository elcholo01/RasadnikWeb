import requests
import json

BASE_URL = "http://localhost:5000"

def test_login():
    """Test login-a"""
    print("=== Testing Login ===")
    
    # Test login
    login_data = {
        "email": "dvdcolak@gmail.com",
        "password": "test123456"
    }
    
    response = requests.post(f"{BASE_URL}/api/users/login", json=login_data)
    print(f"Login response status: {response.status_code}")
    print(f"Login response: {response.json()}")
    
    if response.status_code == 200:
        print("Login successful!")
        return response.json()["access_token"]
    else:
        print("Login failed!")
        return None

if __name__ == "__main__":
    test_login() 