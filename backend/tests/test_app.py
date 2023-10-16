```python
import pytest
from app import createCampaign

def test_createCampaign():
    # Mock data
    emailCampaignData = {
        "subject": "Test Subject",
        "content": "Test Content",
        "recipients": ["test1@example.com", "test2@example.com"]
    }

    # Call the function with the mock data
    result = createCampaign(emailCampaignData)

    # Assert that the function returns the expected result
    assert result == {
        "status": "success",
        "message": "Email campaign created successfully."
    }

def test_createCampaign_no_subject():
    # Mock data
    emailCampaignData = {
        "content": "Test Content",
        "recipients": ["test1@example.com", "test2@example.com"]
    }

    # Call the function with the mock data
    result = createCampaign(emailCampaignData)

    # Assert that the function returns the expected result
    assert result == {
        "status": "error",
        "message": "Subject is required."
    }

def test_createCampaign_no_content():
    # Mock data
    emailCampaignData = {
        "subject": "Test Subject",
        "recipients": ["test1@example.com", "test2@example.com"]
    }

    # Call the function with the mock data
    result = createCampaign(emailCampaignData)

    # Assert that the function returns the expected result
    assert result == {
        "status": "error",
        "message": "Content is required."
    }

def test_createCampaign_no_recipients():
    # Mock data
    emailCampaignData = {
        "subject": "Test Subject",
        "content": "Test Content"
    }

    # Call the function with the mock data
    result = createCampaign(emailCampaignData)

    # Assert that the function returns the expected result
    assert result == {
        "status": "error",
        "message": "At least one recipient is required."
    }
```