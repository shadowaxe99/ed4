import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendEmail } from '../redux/actions';

const EmailSending = () => {
  const dispatch = useDispatch();
  const [emailCampaignData, setEmailCampaignData] = useState(null);

  const handleSendEmail = () => {
    if (emailCampaignData) {
      dispatch(sendEmail(emailCampaignData));
    }
  };

  return (
    <div>
      <button id="emailSendButton" onClick={handleSendEmail}>
        Send Email
      </button>
    </div>
  );
};

export default EmailSending;