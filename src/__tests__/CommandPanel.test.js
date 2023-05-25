import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import CommandPanel from '../Components/CommandPanel/CommandPanel';
import todosReducer from '../features/todosSlice';
import filterReducer from '../features/filterSlice';

it('renders correctly with no todos', () => {
  const store = configureStore({
    reducer: {
      todos: todosReducer,
    },
    preloadedState: {
      todos: [],
    },
  });
  const tree = renderer
    .create(
      <Provider store={store}>
        <CommandPanel />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with only one todo done', () => {
  const store = configureStore({
    reducer: {
      todos: todosReducer,
    },
    preloadedState: {
      todos: [
        {
          title: 'todo 1',
          done: true,
          id: 'todo_1_id',
        },
        {
          title: 'todo 2',
          done: false,
          id: 'todo_2_id',
        },
      ],
    },
  });
  const tree = renderer
    .create(
      <Provider store={store}>
        <CommandPanel />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('CommandPanel', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        todos: todosReducer,
        filter: filterReducer,
      },
      preloadedState: {
        todos: [
          {
            title: 'todo 1',
            done: true,
            id: 'todo_1_id',
          },
          {
            title: 'todo 2',
            done: false,
            id: 'todo_2_id',
          },
        ],
        filter: 'no_filter',
      },
    });
  });

  afterEach(() => {
    store = null;
  });

  it('set filter to showAll', () => {
    render(
      <Provider store={store}>
        <CommandPanel />
      </Provider>
    );
    const linkElementButton = screen.getByText('All');

    fireEvent.click(linkElementButton);

    const state = store.getState();
    expect(state.filter).toEqual('SHOW_ALL');
  });

  it('set filter to filterActive', () => {
    render(
      <Provider store={store}>
        <CommandPanel />
      </Provider>
    );
    const linkElementButton = screen.getByText('Active');

    fireEvent.click(linkElementButton);

    const state = store.getState();
    expect(state.filter).toEqual('FILTER_ACTIVE');
  });

  it('set filter to filterCompleted', () => {
    render(
      <Provider store={store}>
        <CommandPanel />
      </Provider>
    );
    const linkElementButton = screen.getByText('Completed');

    fireEvent.click(linkElementButton);

    const state = store.getState();
    expect(state.filter).toEqual('FILTER_COMPLETED');
  });

  it('remove completed todos', () => {
    render(
      <Provider store={store}>
        <CommandPanel />
      </Provider>
    );
    const linkElementButton = screen.getByText('Remove Completed');

    fireEvent.click(linkElementButton);

    const state = store.getState();
    expect(state.todos.length).toEqual(1);
    expect(state.todos[0].id).toEqual('todo_2_id');
  });
});
