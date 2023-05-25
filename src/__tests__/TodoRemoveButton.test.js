import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import todosReducer from '../features/todosSlice';
import TodoRemoveButton from '../Components/TodosList/TodoRemoveButton';

describe('TodoRemoveButton', () => {
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
        <TodoRemoveButton todoId={todo.id} />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });

  it('removes the todo', () => {
    render(
      <Provider store={store}>
        <TodoRemoveButton todoId={todo.id} />
      </Provider>
    );
    const linkElementButton = screen.getByTestId('todo-remove');

    fireEvent.click(linkElementButton);

    const state = store.getState();
    expect(state.todos).toEqual([]);
  });
});
