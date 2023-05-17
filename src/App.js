import { useEffect, useReducer } from 'react';
import Input from './Components/Input';
import List from './Components/List';
import style from './App.module.scss';
import reducer, {
  TASK_DONE_TYPE,
  ADD_TODO_TYPE,
  TASK_REMOVE_TYPE,
  SET_UP_TYPE,
} from './AppReducer';

export default function App() {
  const [todos, dispatch] = useReducer(reducer);

  useEffect(() => {
    dispatch({ type: SET_UP_TYPE });
  }, []);

  function handleAddNewTodo(value) {
    dispatch({ type: ADD_TODO_TYPE, payload: { value } });
  }

  function handleTaskDone(id, done) {
    dispatch({ type: TASK_DONE_TYPE, payload: { id, done } });
  }

  function handleTaskRemove(id) {
    dispatch({ type: TASK_REMOVE_TYPE, payload: { id } });
  }

  return (
    <div className={style.app}>
      <div
        style={{
          backgroundImage: `url(${`${process.env.PUBLIC_URL}/work_desk.jpg`})`,
        }}
        className={style.head}
      >
        <Input onSubmit={handleAddNewTodo} />
      </div>
      <div className={style.body}>
        <List
          todos={todos}
          onDone={handleTaskDone}
          onRemove={handleTaskRemove}
        />
      </div>
    </div>
  );
}
