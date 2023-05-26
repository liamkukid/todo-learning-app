import localStorageMiddleware from '../../features/localStorageMiddleware';
import { KEY_TODO } from '../../globalConst';

const mockedLocalStorageSet = jest.spyOn(
  // eslint-disable-next-line no-proto
  window.localStorage.__proto__,
  'setItem'
);

const state = {
  todos: [{ title: 'todo', done: false, id: '1' }],
};

const create = () => {
  const store = {
    getState: jest.fn(() => state),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = action => localStorageMiddleware(store)(next)(action);

  return { store, next, invoke };
};

test('store todos into localstorage', () => {
  const { next, invoke } = create();
  const action = { type: 'todo' };
  invoke(action);
  expect(next).toHaveBeenCalledWith(action);
  expect(mockedLocalStorageSet).toHaveBeenCalledWith(
    KEY_TODO,
    JSON.stringify(state.todos)
  );
});

test('do not store todos into localstorage', () => {
  const { next, invoke } = create();
  const action = { type: 'not todo type' };
  invoke(action);
  expect(next).toHaveBeenCalledWith(action);
  expect(mockedLocalStorageSet).not.toHaveBeenCalled();
});
