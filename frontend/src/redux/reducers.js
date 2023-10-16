```javascript
import { CREATE_CAMPAIGN, SEND_EMAIL, TRACK_RESPONSE, ANALYZE_PERFORMANCE } from './actions';

const initialState = {
  emailCampaignData: [],
  emailResponseData: [],
  performanceData: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CAMPAIGN:
      return {
        ...state,
        emailCampaignData: [...state.emailCampaignData, action.payload]
      };
    case SEND_EMAIL:
      return {
        ...state,
        emailCampaignData: state.emailCampaignData.map(campaign => 
          campaign.id === action.payload.id ? {...campaign, status: 'sent'} : campaign
        )
      };
    case TRACK_RESPONSE:
      return {
        ...state,
        emailResponseData: [...state.emailResponseData, action.payload]
      };
    case ANALYZE_PERFORMANCE:
      return {
        ...state,
        performanceData: action.payload
      };
    default:
      return state;
  }
}

export default rootReducer;
```