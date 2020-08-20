import React from 'react';
import { render } from '@testing-library/react';
import MainApp from './App';

test('renders text list of messages', () => {
  const { getByText } = render(<MainApp />);
  const linkElement = getByText(/List of messages/i);
  expect(linkElement).toBeInTheDocument();
});

