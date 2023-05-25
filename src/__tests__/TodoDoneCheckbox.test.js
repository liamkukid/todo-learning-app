import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import todosReducer from '../features/todosSlice';
import TodoDoneCheckbox from '../Components/TodosList/TodoDoneCheckbox';

describe('TodoDoneCheckbox', () => {
  let store;
  const todo = {
    title: 'todo 1',
    done: false,
    id: '14e520cd-63f2-485e-9b3b-072ce068554e',
  };

  beforeEach(() => {
    store = configureStore({
      reducer: {
        todos: todosReducer,
      },
      preloadedState: {
        todos: [todo],
      },
    });
  });

  afterEach(() => {
    store = null;
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <TodoDoneCheckbox todo={todo} />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });

  it('change the state of todo done=true', () => {
    render(
      <Provider store={store}>
        <TodoDoneCheckbox todo={todo} />
      </Provider>
    );
    const linkElementButton = screen.getByTestId('todo-checkbox');

    fireEvent.click(linkElementButton);

    const state = store.getState();
    expect(state.todos[0].done).toBeTruthy();
  });
});
