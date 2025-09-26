import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

test('renders Crusader Tea app', () => {
  render(<App />);
  const headingElement = screen.getByRole('banner');
  expect(headingElement).toBeInTheDocument();
});
