import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EmailCampaignCreation from '../components/EmailCampaignCreation';

test('renders email campaign form', () => {
  const { getByTestId } = render(<EmailCampaignCreation />);
  const formElement = getByTestId('emailCampaignForm');
  expect(formElement).toBeInTheDocument();
});

test('form submission triggers createCampaign action', () => {
  const mockCreateCampaign = jest.fn();
  const { getByTestId } = render(<EmailCampaignCreation createCampaign={mockCreateCampaign} />);
  const formElement = getByTestId('emailCampaignForm');

  fireEvent.submit(formElement);

  expect(mockCreateCampaign).toHaveBeenCalled();
});