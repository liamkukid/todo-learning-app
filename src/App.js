import { useState } from 'react';

import { SHOW_ALL } from './Filters';
import Input from './Components/Input';
import List from './Components/List';
import CommandPanel from './Components/CommandPanel';
import style from './App.module.scss';
import useTodosStore from './Store/UseTodosStore';

export default function App() {
  const [filter, setFilter] = useState(SHOW_ALL);
  const [todos, addNewTodo, todoDone, todoRemove, removeCompleted] =
    useTodosStore();

  return (
    <div className={style.app}>
      <div
        style={{
          backgroundImage: `url(${`${process.env.PUBLIC_URL}/work_desk.jpg`})`,
        }}
        className={style.head}
      >
        <div className={style.input}>
          <Input onSubmit={addNewTodo} />
        </div>
        <div className={style.commandPanel}>
          <CommandPanel
            todos={todos}
            onFilterChanged={value => setFilter(value)}
            onRemoveCompleted={removeCompleted}
          />
        </div>
      </div>
      <div className={style.body}>
        <List
          todos={todos}
          filter={filter}
          onDone={todoDone}
          onRemove={todoRemove}
        />
      </div>
    </div>
  );
}
