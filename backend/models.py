```python
from sqlalchemy import Column, Integer, String, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class EmailCampaign(Base):
    __tablename__ = 'email_campaigns'

    id = Column(Integer, primary_key=True)
    influencer_id = Column(Integer, nullable=False)
    subject_line = Column(String, nullable=False)
    email_content = Column(String, nullable=False)
    recipient_list = Column(String, nullable=False)
    scheduled_time = Column(DateTime, nullable=False)

class EmailResponse(Base):
    __tablename__ = 'email_responses'

    id = Column(Integer, primary_key=True)
    email_campaign_id = Column(Integer, nullable=False)
    recipient_id = Column(Integer, nullable=False)
    opened = Column(Boolean, default=False)
    clicked = Column(Boolean, default=False)
    replied = Column(Boolean, default=False)
```