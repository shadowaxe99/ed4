import React from 'react';
import { render, screen } from '@testing-library/react';
import PerformanceAnalysis from '../components/PerformanceAnalysis';

test('renders performance chart', () => {
  render(<PerformanceAnalysis />);
  const linkElement = screen.getByTestId('performanceChart');
  expect(linkElement).toBeInTheDocument();
});

test('displays correct open rate', () => {
  render(<PerformanceAnalysis />);
  const openRateElement = screen.getByText(/Open Rate:/i);
  expect(openRateElement).toBeInTheDocument();
});

test('displays correct click-through rate', () => {
  render(<PerformanceAnalysis />);
  const clickThroughRateElement = screen.getByText(/Click-Through Rate:/i);
  expect(clickThroughRateElement).toBeInTheDocument();
});

test('displays correct response rate', () => {
  render(<PerformanceAnalysis />);
  const responseRateElement = screen.getByText(/Response Rate:/i);
  expect(responseRateElement).toBeInTheDocument();
});