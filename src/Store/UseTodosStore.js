// Not in use. I am only keeping this as an example of using a hook and an example of custom hook.

import { useCallback, useEffect, useReducer } from 'react';
import {
  TODO_DONE_TYPE,
  SET_UP_TYPE,
  ADD_TODO_TYPE,
  TODO_REMOVE_TYPE,
  REMOVE_COMPLETED_TYPE,
  reducer,
} from './reducer';

const useTodosStore = () => {
  const [todos, dispatch] = useReducer(reducer);

  useEffect(() => {
    dispatch({ type: SET_UP_TYPE });
  }, []);

  const addNewTodo = useCallback(value => {
    dispatch({ type: ADD_TODO_TYPE, payload: { value } });
  });

  const todoDone = useCallback((id, done) => {
    dispatch({ type: TODO_DONE_TYPE, payload: { id, done } });
  });

  const todoRemove = useCallback(id => {
    dispatch({ type: TODO_REMOVE_TYPE, payload: { id } });
  });

  const removeCompleted = useCallback(() => {
    dispatch({ type: REMOVE_COMPLETED_TYPE });
  });

  return [todos, addNewTodo, todoDone, todoRemove, removeCompleted];
};

export default useTodosStore;
