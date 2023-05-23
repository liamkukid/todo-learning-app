import { KEY_TODO } from './localStorageMiddleware';

const todosInitialState = () =>
  JSON.parse(localStorage.getItem(KEY_TODO)) ?? [];

export default todosInitialState;
