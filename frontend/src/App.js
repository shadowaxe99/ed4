```javascript
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import EmailCampaignCreation from './components/EmailCampaignCreation';
import EmailSending from './components/EmailSending';
import ResponseTracking from './components/ResponseTracking';
import PerformanceAnalysis from './components/PerformanceAnalysis';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <EmailCampaignCreation />
        <EmailSending />
        <ResponseTracking />
        <PerformanceAnalysis />
      </div>
    </Provider>
  );
}

export default App;
```