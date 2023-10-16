```python
from models import EmailResponse
from sqlalchemy.orm import Session
from typing import List

def trackResponse(db: Session, email_id: int, event: str):
    response = db.query(EmailResponse).filter(EmailResponse.email_id == email_id).first()
    if not response:
        response = EmailResponse(email_id=email_id)
        db.add(response)
    if event == 'open':
        response.opens += 1
    elif event == 'click':
        response.clicks += 1
    elif event == 'reply':
        response.replies += 1
    db.commit()
    return response

def getResponses(db: Session, skip: int = 0, limit: int = 100) -> List[EmailResponse]:
    responses = db.query(EmailResponse).offset(skip).limit(limit).all()
    return responses
```