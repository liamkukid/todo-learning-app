import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from './Components/Input';
import List from './Components/List';
import style from './App.module.scss';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')));

  function componentDidMount() {
    console.log('componentDidMount');
  }

  function addNewTodo(value) {
    const newTask = { title: value, done: false, id: uuidv4() };
    const newDotos = todos ? [...todos.slice(), newTask] : [newTask];
    setTodos(newDotos);
    localStorage.setItem('todos', JSON.stringify(newDotos));
  }

  function handleTaskDone(value, done) {
    const newTodos = todos.map(obj => {
      if (obj.id === value) {
        return { ...obj, done: done };
      }
      return obj;
    });
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  function handleTaskRemove(value) {
    const newTodos = todos.filter(x => x.id !== value);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  return (
    <div className={style.app}>
      <div
        style={{
          backgroundImage: `url(${`${process.env.PUBLIC_URL}/work_desk.jpg`})`,
        }}
        className={style.head}
      >
        <Input onSubmit={addNewTodo} />
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

export default App;
