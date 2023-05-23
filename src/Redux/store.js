import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todosSlice';
import filterReducer from '../features/filterSlice';
import localStorageMiddleware from '../features/localStorageMiddleware';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
  },
  middleware: [localStorageMiddleware],
});

export default store;
