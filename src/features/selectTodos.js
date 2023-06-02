import { createSelector } from '@reduxjs/toolkit';

import { FILTER_COMPLETED, FILTER_ACTIVE } from '../globalConst';

const selectTodos = state => state.todos;
const selectFilter = state => state.filter;

export const selectTodosLeftCount = createSelector(selectTodos, todos => {
  const amount = todos.filter(todo => !todo.done).length;
  return amount;
});

export const filteredTodos = createSelector(
  selectTodos,
  selectFilter,
  (todos, filter) => {
    switch (filter) {
      case FILTER_ACTIVE:
        return todos.filter(todo => !todo.done);
      case FILTER_COMPLETED:
        return todos.filter(todo => todo.done);
      default:
        return todos;
    }
  }
);
