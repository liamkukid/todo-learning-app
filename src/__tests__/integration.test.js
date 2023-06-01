import { screen, fireEvent } from '@testing-library/react';
import App from '../Components/App/App';
import renderWithProviders from './utils/test-utils';

const todoUuid = '14e520cd-63f2-485e-9b3b-072ce068554e';
jest.mock('uuid', () => ({ v4: () => todoUuid }));

test('Add new todo item, mark as done and remove it', () => {
  const { store } = renderWithProviders(<App />);
  const inputElement = screen.getByPlaceholderText('New todo...');
  const buttonSubmitElement = screen.getByText(/Save/i);
  const text = 'New todo item';

  fireEvent.change(inputElement, { target: { value: text } });
  fireEvent.click(buttonSubmitElement);

  const todoElement = screen.getByText(text);
  expect(todoElement).toBeInTheDocument();
  expect(store.getState().todos).toEqual([
    { title: text, done: false, id: todoUuid },
  ]);

  const doneCheckboxElement = screen.getByTestId('todo-checkbox');
  fireEvent.click(doneCheckboxElement);

  expect(store.getState().todos).toEqual([
    { title: text, done: true, id: todoUuid },
  ]);

  const removeButtonElement = screen.getByText('Remove Completed');
  fireEvent.click(removeButtonElement);

  expect(screen.queryByText(text)).not.toBeInTheDocument();
  expect(store.getState().todos).toEqual([]);
});
