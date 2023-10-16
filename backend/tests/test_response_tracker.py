```python
import pytest
from response_tracker import trackResponse

def test_trackResponse():
    # Mock email response data
    email_response_data = {
        "email_id": "123",
        "opened": True,
        "clicked": True,
        "replied": False
    }

    # Call the trackResponse function with the mock data
    result = trackResponse(email_response_data)

    # Assert that the function returns the expected result
    assert result == {
        "email_id": "123",
        "opened": True,
        "clicked": True,
        "replied": False,
        "tracked": True
    }
```