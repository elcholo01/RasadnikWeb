from datetime import datetime
from bson import ObjectId
from typing import Optional

class Poll:
    def __init__(self, name: str, question: str, end_date: datetime, emails: list[str], 
                 is_anonymous: bool = False, creator_id: Optional[str] = None, created_at: Optional[datetime] = None) -> None:
        self.name = name
        self.question = question
        self.end_date = end_date
        self.emails = emails
        self.is_anonymous = is_anonymous
        self.creator_id = creator_id
        self.created_at = created_at or datetime.now()
        self.is_finished = False
        self.results = {
            "da": 0,
            "ne": 0,
            "ne_mogu_da_odgovorim": 0
        }
        self.responses = []  # Lista odgovora sa email-ovima (ako nije anonimna)

    def to_dict(self):
        return {
            "name": self.name,
            "question": self.question,
            "end_date": self.end_date,
            "emails": self.emails,
            "is_anonymous": self.is_anonymous,
            "creator_id": self.creator_id,
            "created_at": self.created_at,
            "is_finished": self.is_finished,
            "results": self.results,
            "responses": self.responses
        }

    @classmethod
    def from_dict(cls, data):
        poll = cls(
            name=data.get("name"),
            question=data.get("question"),
            end_date=data.get("end_date"),
            emails=data.get("emails", []),
            is_anonymous=data.get("is_anonymous", False),
            creator_id=data.get("creator_id"),
            created_at=data.get("created_at")
        )
        poll.is_finished = data.get("is_finished", False)
        poll.results = data.get("results", {"da": 0, "ne": 0, "ne_mogu_da_odgovorim": 0})
        poll.responses = data.get("responses", [])
        return poll
