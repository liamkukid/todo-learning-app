import {
  selectTodosLeftCount,
  filteredTodos,
} from '../../features/selectTodos';
import { FILTER_COMPLETED, FILTER_ACTIVE, SHOW_ALL } from '../../globalConst';

describe('Selector', () => {
  it('selectTodosLeftCount must return correct amount', () => {
    const state = {
      todos: [{ done: false }, { done: true }],
    };
    expect(selectTodosLeftCount(state)).toEqual(1);
  });

  it('filteredTodos must return full list', () => {
    const state = {
      todos: [{ done: false }, { done: true }],
      filter: SHOW_ALL,
    };
    expect(filteredTodos(state)).toEqual(state.todos);
  });

  it('filteredTodos must return only completed todos', () => {
    const state = {
      todos: [{ done: false }, { done: true }],
      filter: FILTER_COMPLETED,
    };
    expect(filteredTodos(state)).toEqual([{ done: true }]);
  });

  it('filteredTodos must return only active todos', () => {
    const state = {
      todos: [{ done: false }, { done: true }],
      filter: FILTER_ACTIVE,
    };
    expect(filteredTodos(state)).toEqual([{ done: false }]);
  });
});
