import { KEY_TODO } from '../globalConst';

const localStorageMiddleware = store => next => action => {
  const result = next(action);
  if (action.type.startsWith('todo')) {
    localStorage.setItem(KEY_TODO, JSON.stringify(store.getState().todos));
  }
  return result;
};

export default localStorageMiddleware;
