import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EmailSending from '../components/EmailSending';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('EmailSending', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <EmailSending />
      </Provider>
    );
  });

  it('dispatches SEND_EMAIL action when send button is clicked', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <EmailSending />
      </Provider>
    );

    fireEvent.click(getByTestId('emailSendButton'));

    const actions = store.getActions();
    expect(actions[0].type).toBe('SEND_EMAIL');
  });
});