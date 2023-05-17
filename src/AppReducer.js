import { v4 as uuidv4 } from 'uuid';

export const TASK_DONE_TYPE = 'TASK_DONE';
export const ADD_TODO_TYPE = 'ADD_TODO';
export const TASK_REMOVE_TYPE = 'TASK_REMOVE';
export const SET_UP_TYPE = 'SET_UP';

const KEY_TODO = 'KEY_TODO';

const setUp = () => JSON.parse(localStorage.getItem(KEY_TODO));

const taskDone = (todos, id, done) => {
  const newTodos = todos.map(obj => {
    if (obj.id === id) {
      return { ...obj, done: done };
    }
    return obj;
  });
  localStorage.setItem(KEY_TODO, JSON.stringify(newTodos));
  return newTodos;
};

const taskRemove = (todos, id) => {
  const newTodos = todos.filter(x => x.id !== id).slice();
  localStorage.setItem(KEY_TODO, JSON.stringify(newTodos));
  return newTodos;
};

const addTodo = (todos, value) => {
  const todo = { title: value, done: false, id: uuidv4() };
  const newDotos = todos ? [...todos.slice(), todo] : [todo];
  localStorage.setItem(KEY_TODO, JSON.stringify(newDotos));
  return newDotos;
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case TASK_DONE_TYPE:
      return taskDone(state, payload.id, payload.done);
    case ADD_TODO_TYPE:
      return addTodo(state, payload.value);
    case TASK_REMOVE_TYPE:
      return taskRemove(state, payload.id);
    case SET_UP_TYPE:
      return setUp();
    default:
      return state;
  }
};

export default reducer;
