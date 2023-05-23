import { FILTER_COMPLETED, FILTER_ACTIVE } from '../globalConst';

export const selectTodosLeftCount = state => {
  const filteredTodos = state.todos.filter(todo => !todo.done).length;
  return filteredTodos;
};

export const filteredTodos = state => {
  const { filter, todos } = state;
  switch (filter) {
    case FILTER_ACTIVE:
      return todos.filter(todo => !todo.done);
    case FILTER_COMPLETED:
      return todos.filter(todo => todo.done);
    default:
      return todos;
  }
};
