import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

import todosInitialState from './todosInitialState';

const todoDoneReducer = (state, value) => {
  const { id, done } = value.payload;
  const newTodos = state.map(obj => {
    if (obj.id === id) {
      return { ...obj, done: done };
    }
    return obj;
  });
  return newTodos;
};

const todoRemoveReducer = (state, value) => {
  const { payload } = value;
  const newTodos = state.filter(x => x.id !== payload);
  return newTodos;
};

const removeCompletedReducer = state => {
  const newTodos = state.filter(todo => !todo.done);
  return newTodos;
};

const addTodoReducer = (state, value) => {
  const { payload } = value;
  const todo = { title: payload, done: false, id: uuidv4() };
  const newDotos = [...state, todo];
  return newDotos;
};

const todosSlice = createSlice({
  name: 'todo',
  initialState: todosInitialState,
  reducers: {
    addTodo: addTodoReducer,
    todoDone: todoDoneReducer,
    todoRemove: todoRemoveReducer,
    removeCompleted: removeCompletedReducer,
  },
});

export const { addTodo, todoDone, todoRemove, removeCompleted } =
  todosSlice.actions;

export const selectTodos = state => state.todos;
export const selectTodosLeftCount = state =>
  state.todos.filter(todo => !todo.done).length;

export default todosSlice.reducer;
