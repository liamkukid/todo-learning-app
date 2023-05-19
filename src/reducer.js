import { v4 as uuidv4 } from 'uuid';

export const TODO_DONE_TYPE = 'TASK_DONE';
export const ADD_TODO_TYPE = 'ADD_TODO';
export const TODO_REMOVE_TYPE = 'TASK_REMOVE';
export const RESET_TYPE = 'SET_UP';
export const REMOVE_COMPLETED_TYPE = 'REMOVE_COMPLETED';

const KEY_TODO = 'KEY_TODO';

const reset = () => JSON.parse(localStorage.getItem(KEY_TODO));

const todoDone = (todos, id, done) => {
  const newTodos = todos.map(obj => {
    if (obj.id === id) {
      return { ...obj, done: done };
    }
    return obj;
  });
  localStorage.setItem(KEY_TODO, JSON.stringify(newTodos));
  return newTodos;
};

const todoRemove = (todos, id) => {
  const newTodos = todos.filter(x => x.id !== id).slice();
  localStorage.setItem(KEY_TODO, JSON.stringify(newTodos));
  return newTodos;
};

const removeCompleted = todos => {
  const newTodos = todos.filter(todo => !todo.done);
  localStorage.setItem(KEY_TODO, JSON.stringify(newTodos));
  return newTodos;
};

const addTodo = (todos, value) => {
  const todo = { title: value, done: false, id: uuidv4() };
  const newDotos = todos ? [...todos.slice(), todo] : [todo];
  localStorage.setItem(KEY_TODO, JSON.stringify(newDotos));
  return newDotos;
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case TODO_DONE_TYPE:
      return todoDone(state, payload.id, payload.done);
    case ADD_TODO_TYPE:
      return addTodo(state, payload.value);
    case TODO_REMOVE_TYPE:
      return todoRemove(state, payload.id);
    case REMOVE_COMPLETED_TYPE:
      return removeCompleted(state);
    case RESET_TYPE:
      return reset();
    default:
      return state;
  }
};
