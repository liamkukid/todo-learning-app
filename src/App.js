import { useEffect, useReducer } from 'react';
import Input from './Components/Input';
import List from './Components/List';
import style from './App.module.scss';
import reducer from './appReducer';

export default function App() {
  const [todos, dispatch] = useReducer(reducer);

  useEffect(() => {
    dispatch({ type: 'setUp' });
  }, []);

  function handleAddNewTodo(value) {
    dispatch({ type: 'addNewTodo', payload: { value } });
  }

  function handleTaskDone(id, done) {
    dispatch({ type: 'taskDone', payload: { id, done } });
  }

  function handleTaskRemove(id) {
    dispatch({ type: 'taskRemove', payload: { id } });
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
