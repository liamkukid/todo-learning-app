import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from './Components/Input';
import List from './Components/List';
import style from './App.module.scss';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')));

  function addNewTodo(value) {
    const newTask = { title: value, done: false, id: uuidv4() };
    const newDotos = todos ? [...todos.slice(), newTask] : [newTask];
    setTodos(newDotos);
    localStorage.setItem('todos', JSON.stringify(newDotos));
  }

  function handleTaskDone(value, done) {
    const todo = todos.find(x => x.id === value);
    if (todo) {
      console.log(todo);
      todo.done = !done;
      const newTodos = [...todos.filter(x => x.id !== value), todo];
      setTodos(newTodos);
    }
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
        <List todos={todos} onDone={handleTaskDone} />
      </div>
    </div>
  );
}

export default App;
