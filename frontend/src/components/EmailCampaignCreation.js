```javascript
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCampaign } from '../redux/actions';

const EmailCampaignCreation = () => {
  const dispatch = useDispatch();
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [recipients, setRecipients] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailCampaignData = {
      subject,
      content,
      recipients: recipients.split(',').map(email => email.trim()),
    };
    dispatch(createCampaign(emailCampaignData));
  };

  return (
    <form id="emailCampaignForm" onSubmit={handleSubmit}>
      <label>
        Subject:
        <input type="text" value={subject} onChange={e => setSubject(e.target.value)} required />
      </label>
      <label>
        Content:
        <textarea value={content} onChange={e => setContent(e.target.value)} required />
      </label>
      <label>
        Recipients (comma-separated):
        <input type="text" value={recipients} onChange={e => setRecipients(e.target.value)} required />
      </label>
      <button type="submit">Create Campaign</button>
    </form>
  );
};

export default EmailCampaignCreation;
```