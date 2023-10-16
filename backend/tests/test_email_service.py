```python
import pytest
from email_service import sendEmail

def test_sendEmail():
    # Mocking the email campaign data
    emailCampaignData = {
        'subject': 'Test Subject',
        'content': 'Test Content',
        'recipients': ['test1@example.com', 'test2@example.com']
    }

    # Mocking the SendGrid API response
    class MockResponse:
        def __init__(self, status_code):
            self.status_code = status_code

    # Test case: Successful email sending
    sendEmail.email_service = lambda x: MockResponse(202)
    assert sendEmail(emailCampaignData) == True

    # Test case: Failed email sending
    sendEmail.email_service = lambda x: MockResponse(400)
    assert sendEmail(emailCampaignData) == False
```