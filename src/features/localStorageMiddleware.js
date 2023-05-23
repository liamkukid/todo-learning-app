import { KEY_TODO } from '../globalConst';

const localStorageMiddleware = store => next => action => {
  if (action.type.startsWith('todo')) {
    localStorage.setItem(KEY_TODO, JSON.stringify(store.getState().todos));
  }
  return next(action);
};

export default localStorageMiddleware;
