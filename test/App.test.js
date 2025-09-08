import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders Near Me App link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Near Me App/i);
  expect(linkElement).toBeInTheDocument();
});