import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResponseTracking from '../components/ResponseTracking';

test('renders response table', () => {
  const { getByTestId } = render(<ResponseTracking />);
  const responseTable = getByTestId('responseTable');
  expect(responseTable).toBeInTheDocument();
});

test('updates response table on TRACK_RESPONSE action', () => {
  const { getByTestId } = render(<ResponseTracking />);
  const responseTable = getByTestId('responseTable');

  // Simulate TRACK_RESPONSE action
  fireEvent.change(responseTable, { target: { value: 'Test Response' } });
  expect(responseTable.value).toBe('Test Response');
});