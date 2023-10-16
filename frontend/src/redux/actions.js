```javascript
export const CREATE_CAMPAIGN = 'CREATE_CAMPAIGN';
export const SEND_EMAIL = 'SEND_EMAIL';
export const TRACK_RESPONSE = 'TRACK_RESPONSE';
export const ANALYZE_PERFORMANCE = 'ANALYZE_PERFORMANCE';

export function createCampaign(emailCampaignData) {
  return {
    type: CREATE_CAMPAIGN,
    payload: emailCampaignData
  };
}

export function sendEmail() {
  return {
    type: SEND_EMAIL
  };
}

export function trackResponse(emailResponseData) {
  return {
    type: TRACK_RESPONSE,
    payload: emailResponseData
  };
}

export function analyzePerformance() {
  return {
    type: ANALYZE_PERFORMANCE
  };
}
```