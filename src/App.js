import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SHOW_ALL } from './Filters';
import Input from './Components/Input';
import List from './Components/List';
import CommandPanel from './Components/CommandPanel';
import style from './App.module.scss';
import {
  addTodo,
  todoDone,
  todoRemove,
  removeCompleted,
  selectTodos,
} from './features/todos/todosSlice';

export default function App() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(SHOW_ALL);

  return (
    <div className={style.app}>
      <div
        style={{
          backgroundImage: `url(${`${process.env.PUBLIC_URL}/work_desk.jpg`})`,
        }}
        className={style.head}
      >
        <div className={style.input}>
          <Input onSubmit={title => dispatch(addTodo(title))} />
        </div>
        <div className={style.commandPanel}>
          <CommandPanel
            todos={todos}
            onFilterChanged={value => setFilter(value)}
            onRemoveCompleted={() => dispatch(removeCompleted())}
          />
        </div>
      </div>
      <div className={style.body}>
        <List
          todos={todos}
          filter={filter}
          onDone={(id, done) => dispatch(todoDone({ id, done }))}
          onRemove={id => dispatch(todoRemove(id))}
        />
      </div>
    </div>
  );
}
