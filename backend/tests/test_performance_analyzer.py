```python
import pytest
from performance_analyzer import analyzePerformance

def test_analyzePerformance():
    # Mock email response data
    emailResponseData = [
        {"email": "test1@example.com", "opened": True, "clicked": True, "replied": False},
        {"email": "test2@example.com", "opened": False, "clicked": False, "replied": False},
        {"email": "test3@example.com", "opened": True, "clicked": False, "replied": True},
        {"email": "test4@example.com", "opened": True, "clicked": True, "replied": True},
    ]

    # Expected performance analysis
    expectedAnalysis = {
        "open_rate": 0.75,
        "click_through_rate": 0.5,
        "response_rate": 0.5,
    }

    # Call the function with the mock data
    analysis = analyzePerformance(emailResponseData)

    # Assert that the function returns the expected result
    assert analysis == expectedAnalysis
```