import { v4 as uuidv4 } from 'uuid';

const setUp = () => JSON.parse(localStorage.getItem('todos'));

const taskDone = (todos, value, done) => {
  const newTodos = todos.map(obj => {
    if (obj.id === value) {
      return { ...obj, done: done };
    }
    return obj;
  });
  localStorage.setItem('todos', JSON.stringify(newTodos));
  return newTodos;
};

const taskRemove = (todos, id) => {
  const newTodos = todos.filter(x => x.id !== id).slice();
  localStorage.setItem('todos', JSON.stringify(newTodos));
  return newTodos;
};

const addNewTodo = (todos, value) => {
  const newTask = { title: value, done: false, id: uuidv4() };
  const newDotos = todos ? [...todos.slice(), newTask] : [newTask];
  localStorage.setItem('todos', JSON.stringify(newDotos));
  return newDotos;
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'taskDone':
      return taskDone(state, payload.id, payload.done);
    case 'addNewTodo':
      return addNewTodo(state, payload.value);
    case 'taskRemove':
      return taskRemove(state, payload.id);
    case 'setUp':
      return setUp();
    default:
      return state;
  }
};

export default reducer;
