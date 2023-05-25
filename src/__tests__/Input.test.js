import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todosSlice';

import Input from '../Components/Input';

describe('Input', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        todos: todosReducer,
      },
      preloadedState: {
        todos: [],
      },
    });
  });

  afterEach(() => {
    store = null;
  });

  it('renders correctly', () => {
    const view = renderer
      .create(
        <Provider store={store}>
          <Input />
        </Provider>
      )
      .toJSON();
    expect(view).toMatchSnapshot();
  });

  it('add new todo to the store', () => {
    render(
      <Provider store={store}>
        <Input />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText('New todo...');
    const linkElementButton = screen.getByText(/Save/i);
    const text = 'Entered Text';

    fireEvent.change(inputElement, { target: { value: text } });
    fireEvent.click(linkElementButton);

    const state = store.getState();
    expect(state.todos[0].title).toEqual(text);
    expect(state.todos[0].done).toBeFalsy();
  });

  it('add empty todo to the store', () => {
    render(
      <Provider store={store}>
        <Input />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText('New todo...');
    const linkElementButton = screen.getByText(/Save/i);

    fireEvent.change(inputElement, { target: { value: '' } });
    fireEvent.click(linkElementButton);

    const state = store.getState();
    expect(state.todos).toEqual([]);
  });
});
