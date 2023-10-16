```python
from models import EmailCampaign, EmailResponse
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine('postgresql://user:password@localhost/dbname')
Session = sessionmaker(bind=engine)

def analyzePerformance(campaign_id):
    session = Session()
    campaign = session.query(EmailCampaign).filter_by(id=campaign_id).first()
    responses = session.query(EmailResponse).filter_by(campaign_id=campaign_id).all()

    total_emails = len(campaign.recipient_list.split(','))
    total_responses = len(responses)
    open_rate = sum([1 for response in responses if response.opened]) / total_emails
    click_rate = sum([1 for response in responses if response.clicked]) / total_emails
    response_rate = total_responses / total_emails

    print(f'Performance for campaign {campaign_id}:')
    print(f'Open rate: {open_rate * 100}%')
    print(f'Click rate: {click_rate * 100}%')
    print(f'Response rate: {response_rate * 100}%')

    session.close()
```