import { useState } from 'react';
import Input from './Components/Input';
import List from './Components/List';
import style from './App.module.scss';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')));

  function addNewTodo(value) {
    const newDotos = [...todos.slice(), { title: value }];
    setTodos(newDotos);
    localStorage.setItem('todos', JSON.stringify(newDotos));
  }

  return (
    <div className={style.app}>
      <div
        style={{ backgroundImage: 'url(/background_colorful.jpg)' }}
        className={style.head}
      >
        <Input onSubmit={addNewTodo} />
      </div>
      <div className={style.body}>
        <List todos={todos} />
      </div>
    </div>
  );
}

export default App;
