import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todosSlice';
import filterReducer from '../features/filterSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
  },
});

export default store;
