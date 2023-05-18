import Input from './Components/Input';
import List from './Components/List';
import CommandPanel from './Components/CommandPanel';
import style from './App.module.scss';
import useTodosStore from './UseTodosStore';

export default function App() {
  const [todos, handleAddNewTodo, handleTaskDone, handleTaskRemove] =
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
          <Input onSubmit={handleAddNewTodo} />
        </div>
        <div className={style.commandPanel}>
          <CommandPanel todos={todos} />
        </div>
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
