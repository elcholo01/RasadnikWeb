from bson.objectid import ObjectId 
from db import db
from models.poll import Poll
import smtplib
from email.mime.text import MIMEText
import configparser
import os
from datetime import datetime
from typing import List, Dict, Any, Optional

def create_poll(poll_data: Dict[str, Any]) -> Dict[str, Any]:
    """Kreira novu anketu"""
    try:
        # Validacija - maksimalno 50 email-ova
        if len(poll_data["emails"]) > 50:
            return {"success": False, "error": "Maksimalno 50 email adresa je dozvoljeno"}
        
        # Konvertovanje end_date string u datetime
        end_date = datetime.fromisoformat(poll_data["end_date"].replace('Z', '+00:00'))
        
        new_poll = Poll(
            name=poll_data["name"],
            question=poll_data["question"],
            end_date=end_date,
            emails=poll_data["emails"],
            is_anonymous=poll_data.get("is_anonymous", False),
            creator_id=poll_data["creator_id"]
        )

        result = db.polls.insert_one(new_poll.to_dict())
        
        if result.inserted_id:
            # Slanje email-ova u pozadini
            send_poll_emails(str(result.inserted_id))
            return {"success": True, "poll_id": str(result.inserted_id)}
        else:
            return {"success": False, "error": "Greška pri kreiranju ankete"}

    except Exception as e:
        print(f"Error creating poll: {e}")
        return {"success": False, "error": str(e)}

def send_poll_emails(poll_id: str) -> bool:
    """Šalje email-ove za anketu"""
    try:
        poll = db.polls.find_one({"_id": ObjectId(poll_id)})
        if not poll:
            return False

        # Učitaj SMTP konfiguraciju iz config.ini
        config = configparser.ConfigParser()
        config.read(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'config.ini')))
        smtp_host = config['PROD'].get('SMTP_HOST')
        smtp_port = config['PROD'].getint('SMTP_PORT', fallback=587)
        smtp_user = config['PROD'].get('SMTP_USER')
        smtp_pass = config['PROD'].get('SMTP_PASS')
        sender_email = config['PROD'].get('SENDER_EMAIL', smtp_user)

        if not smtp_host or not smtp_user or not smtp_pass:
            print("SMTP konfiguracija nije postavljena u config.ini!")
            return False

        subject = f"Poziv za anketu: {poll['name']}"
        poll_link = f"http://localhost:3000/poll/{poll_id}"
        body = f"Pozvani ste da učestvujete u anketi: {poll['name']}\n\nPitanje: {poll['question']}\n\nLink za anketu: {poll_link}\n\nHvala!"

        for email in poll['emails']:
            try:
                msg = MIMEText(body)
                msg['Subject'] = subject
                msg['From'] = sender_email
                msg['To'] = email

                with smtplib.SMTP(smtp_host, smtp_port) as server:
                    server.starttls()
                    server.login(smtp_user, smtp_pass)
                    server.sendmail(sender_email, [email], msg.as_string())
                print(f"Poslat email na: {email}")
            except Exception as e:
                print(f"Greška pri slanju emaila na {email}: {e}")
        return True
    except Exception as e:
        print(f"Error sending poll emails: {e}")
        return False

def get_poll(poll_id: str) -> Dict[str, Any]:
    """Dohvata anketu po ID-u"""
    try:
        poll = db.polls.find_one({"_id": ObjectId(poll_id)})
        if poll:
            poll["_id"] = str(poll["_id"])
            # Konvertuj datetime objekte u ISO string format
            if "end_date" in poll and poll["end_date"]:
                poll["end_date"] = poll["end_date"].isoformat()
            if "created_at" in poll and poll["created_at"]:
                poll["created_at"] = poll["created_at"].isoformat()
            return {"success": True, "poll": poll}
        else:
            return {"success": False, "error": "Anketa nije pronađena"}
    except Exception as e:
        print(f"Error getting poll: {e}")
        return {"success": False, "error": str(e)}

def get_user_polls(user_id: str) -> Dict[str, Any]:
    """Dohvata sve ankete korisnika"""
    try:
        polls = list(db.polls.find({"creator_id": user_id}))
        for poll in polls:
            poll["_id"] = str(poll["_id"])
            # Konvertuj datetime objekte u ISO string format
            if "end_date" in poll and poll["end_date"]:
                poll["end_date"] = poll["end_date"].isoformat()
            if "created_at" in poll and poll["created_at"]:
                poll["created_at"] = poll["created_at"].isoformat()
        return {"success": True, "polls": polls}
    except Exception as e:
        print(f"Error getting user polls: {e}")
        return {"success": False, "error": str(e)}

def delete_poll(poll_id: str, user_id: str) -> Dict[str, Any]:
    """Briše anketu (samo vlasnik može)"""
    try:
        poll = db.polls.find_one({"_id": ObjectId(poll_id)})
        if not poll:
            return {"success": False, "error": "Anketa nije pronađena"}
            
        if poll["creator_id"] != user_id:
            return {"success": False, "error": "Nemate dozvolu da obrišete ovu anketu"}
            
        result = db.polls.delete_one({"_id": ObjectId(poll_id)})
        if result.deleted_count > 0:
            return {"success": True}
        else:
            return {"success": False, "error": "Greška pri brisanju ankete"}
            
    except Exception as e:
        print(f"Error deleting poll: {e}")
        return {"success": False, "error": str(e)}

def finish_poll(poll_id: str, user_id: str) -> Dict[str, Any]:
    """Završava anketu"""
    try:
        poll = db.polls.find_one({"_id": ObjectId(poll_id)})
        if not poll:
            return {"success": False, "error": "Anketa nije pronađena"}
            
        if poll["creator_id"] != user_id:
            return {"success": False, "error": "Nemate dozvolu da završite ovu anketu"}
            
        result = db.polls.update_one(
            {"_id": ObjectId(poll_id)},
            {"$set": {"is_finished": True}}
        )
        
        if result.modified_count > 0:
            return {"success": True}
        else:
            return {"success": False, "error": "Greška pri završavanju ankete"}
            
    except Exception as e:
        print(f"Error finishing poll: {e}")
        return {"success": False, "error": str(e)}

def submit_poll_response(poll_id: str, response: str, email: Optional[str] = None) -> Dict[str, Any]:
    """Podnosi odgovor na anketu"""
    try:
        poll = db.polls.find_one({"_id": ObjectId(poll_id)})
        if not poll:
            return {"success": False, "error": "Anketa nije pronađena"}
            
        if poll.get("is_finished", False):
            return {"success": False, "error": "Anketa je završena"}
            
        if response not in ["da", "ne", "ne_mogu_da_odgovorim"]:
            return {"success": False, "error": "Nevažeći odgovor"}
            
        # Inicijalizuj results ako ne postoji
        if "results" not in poll:
            poll["results"] = {"da": 0, "ne": 0, "ne_mogu_da_odgovorim": 0}
            
        # Proveri da li je korisnik već glasao
        if email and not poll.get("is_anonymous", False):
            for resp in poll.get("responses", []):
                if resp.get("email") == email:
                    return {"success": False, "error": "Već ste glasali na ovu anketu"}
        
        # Ažuriraj rezultate
        update_data = {
            f"results.{response}": poll["results"].get(response, 0) + 1
        }
        
        # Dodaj odgovor u listu (ako nije anonimna)
        if email and not poll.get("is_anonymous", False):
            update_data["responses"] = poll.get("responses", []) + [{
                "email": email,
                "response": response,
                "timestamp": datetime.now()
            }]
        
        result = db.polls.update_one(
            {"_id": ObjectId(poll_id)},
            {"$set": update_data}
        )
        
        if result.modified_count > 0:
            return {"success": True}
        else:
            return {"success": False, "error": "Greška pri podnošenju odgovora"}
            
    except Exception as e:
        print(f"Error submitting poll response: {e}")
        return {"success": False, "error": str(e)}

def search_polls(user_id: str, search_term: str) -> Dict[str, Any]:
    """Pretražuje ankete korisnika"""
    try:
        # Case-insensitive pretraga po nazivu ankete
        polls = list(db.polls.find({
            "creator_id": user_id,
            "name": {"$regex": search_term, "$options": "i"}
        }))
        
        for poll in polls:
            poll["_id"] = str(poll["_id"])
            # Konvertuj datetime objekte u ISO string format
            if "end_date" in poll and poll["end_date"]:
                poll["end_date"] = poll["end_date"].isoformat()
            if "created_at" in poll and poll["created_at"]:
                poll["created_at"] = poll["created_at"].isoformat()
            
        return {"success": True, "polls": polls}
        
    except Exception as e:
        print(f"Error searching polls: {e}")
        return {"success": False, "error": str(e)}
