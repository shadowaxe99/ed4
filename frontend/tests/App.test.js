import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders email campaign form', () => {
  const { getByTestId } = render(<App />);
  const campaignForm = getByTestId('emailCampaignForm');
  expect(campaignForm).toBeInTheDocument();
});

test('renders email send button', () => {
  const { getByTestId } = render(<App />);
  const sendButton = getByTestId('emailSendButton');
  expect(sendButton).toBeInTheDocument();
});

test('renders response table', () => {
  const { getByTestId } = render(<App />);
  const responseTable = getByTestId('responseTable');
  expect(responseTable).toBeInTheDocument();
});

test('renders performance chart', () => {
  const { getByTestId } = render(<App />);
  const performanceChart = getByTestId('performanceChart');
  expect(performanceChart).toBeInTheDocument();
});

test('creates a new email campaign', () => {
  const { getByTestId } = render(<App />);
  const campaignForm = getByTestId('emailCampaignForm');
  
  fireEvent.change(campaignForm, { target: { value: 'Test Campaign' } });
  fireEvent.submit(campaignForm);
  
  expect(campaignForm.value).toBe('Test Campaign');
});

test('sends an email', () => {
  const { getByTestId } = render(<App />);
  const sendButton = getByTestId('emailSendButton');
  
  fireEvent.click(sendButton);
  
  expect(sendButton).toBeDisabled();
});