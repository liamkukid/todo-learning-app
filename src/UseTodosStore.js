import { useCallback, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TASK_DONE_TYPE = 'TASK_DONE';
const ADD_TODO_TYPE = 'ADD_TODO';
const TASK_REMOVE_TYPE = 'TASK_REMOVE';
const SET_UP_TYPE = 'SET_UP';
const REMOVE_COMPLETED_TYPE = 'REMOVE_COMPLETED';

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

const RemoveCompleted = todos => {
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

const reducer = (state, { type, payload }) => {
  switch (type) {
    case TASK_DONE_TYPE:
      return taskDone(state, payload.id, payload.done);
    case ADD_TODO_TYPE:
      return addTodo(state, payload.value);
    case TASK_REMOVE_TYPE:
      return taskRemove(state, payload.id);
    case REMOVE_COMPLETED_TYPE:
      return RemoveCompleted(state);
    case SET_UP_TYPE:
      return setUp();
    default:
      return state;
  }
};

const useTodosStore = () => {
  const [todos, dispatch] = useReducer(reducer);

  useEffect(() => {
    dispatch({ type: SET_UP_TYPE });
  }, []);

  const handleAddNewTodo = useCallback(value => {
    dispatch({ type: ADD_TODO_TYPE, payload: { value } });
  });

  const handleTaskDone = useCallback((id, done) => {
    dispatch({ type: TASK_DONE_TYPE, payload: { id, done } });
  });

  const handleTaskRemove = useCallback(id => {
    dispatch({ type: TASK_REMOVE_TYPE, payload: { id } });
  });

  const handleRemoveCompleted = useCallback(() => {
    dispatch({ type: REMOVE_COMPLETED_TYPE });
  });

  return [
    todos,
    handleAddNewTodo,
    handleTaskDone,
    handleTaskRemove,
    handleRemoveCompleted,
  ];
};

export default useTodosStore;
