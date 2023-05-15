import { useState } from 'react';
import Input from './Components/Input';
import List from './Components/List';
import style from './App.module.scss';

function App() {
  const [todos, setTodos] = useState(['task 1', 'task 2']);

  return (
    <div className={style.app}>
      <div className={style.head}>
        <Input />
      </div>
      <div className={style.body}>
        <List todos={todos} />
      </div>
    </div>
  );
}

export default App;
