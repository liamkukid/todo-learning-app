import { v4 as uuidv4 } from 'uuid';

import { createSlice } from '@reduxjs/toolkit';

const KEY_TODO = 'KEY_TODO';

const todoDoneReducer = (state, value) => {
  const { id, done } = value.payload;
  const newTodos = state.map(obj => {
    if (obj.id === id) {
      return { ...obj, done: done };
    }
    return obj;
  });
  localStorage.setItem(KEY_TODO, JSON.stringify(newTodos));
  return newTodos;
};

const todoRemoveReducer = (state, value) => {
  const { payload } = value;
  const newTodos = state.filter(x => x.id !== payload);
  localStorage.setItem(KEY_TODO, JSON.stringify(newTodos));
  return newTodos;
};

const removeCompletedReducer = state => {
  const newTodos = state.filter(todo => !todo.done);
  localStorage.setItem(KEY_TODO, JSON.stringify(newTodos));
  return newTodos;
};

const addTodoReducer = (state, value) => {
  const { payload } = value;
  const todo = { title: payload, done: false, id: uuidv4() };
  const newDotos = [...state, todo];
  localStorage.setItem(KEY_TODO, JSON.stringify(newDotos));
  return newDotos;
};

const todosSlice = createSlice({
  name: 'todo',
  initialState: JSON.parse(localStorage.getItem(KEY_TODO)) ?? [],
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
