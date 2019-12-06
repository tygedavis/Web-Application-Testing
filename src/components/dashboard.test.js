import React from 'react';
import { render } from '@testing-library/react';
import Dashboard, { handleStrike } from './Dashboard';

test('renders dashboard in app', () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/strike/i);
  expect(linkElement).toBeInTheDocument();
});