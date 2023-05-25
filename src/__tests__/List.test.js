import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import todosReducer from '../features/todosSlice';
import List from '../Components/TodosList/List';

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
        <List />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with todos', () => {
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
        <List />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
