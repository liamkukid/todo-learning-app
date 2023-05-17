import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Save/i);
  expect(linkElement).toBeInTheDocument();
});

test('render input', () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText('New todo...');
  expect(linkElement).toBeInTheDocument();
});

test('insert text', () => {
  render(<App />);
  const linkElementInput = screen.getByPlaceholderText('New todo...');
  fireEvent.change(linkElementInput, { target: { value: '23' } });
  expect(linkElementInput.value).toBe('23');
});

test('add todo', () => {
  render(<App />);
  const linkElementInput = screen.getByPlaceholderText('New todo...');
  const text = 'Entered Text';
  fireEvent.change(linkElementInput, { target: { value: text } });
  const linkElementButton = screen.getByText(/Save/i);
  fireEvent.click(linkElementButton);
  fireEvent.change(linkElementInput, { target: { value: '' } });
  const linkElementListItem = screen.getByText(text);
  expect(linkElementListItem).toBeInTheDocument();
});
