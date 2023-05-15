import { useState } from 'react';
import Input from './Components/Input';
import List from './Components/List';
import style from './App.module.scss';

function App() {
  const [todos, setTodos] = useState(['task 1', 'task 2']);

  function addNewTodo(value) {
    const newDotos = [...todos.slice(), value];
    setTodos(newDotos);
  }

  return (
    <div className={style.app}>
      <div className={style.head}>
        <Input onSubmit={addNewTodo} />
      </div>
      <div className={style.body}>
        <List todos={todos} />
      </div>
    </div>
  );
}

export default App;
