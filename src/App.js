import Input from './Components/Input';
import List from './Components/List';
import CommandPanel from './Components/CommandPanel';
import style from './App.module.scss';
import useTodosStore from './UseTodosStore';

export default function App() {
  const [
    todos,
    handleAddNewTodo,
    handleTaskDone,
    handleTaskRemove,
    handleRemoveCompleted,
  ] = useTodosStore();
  const test = e => {
    console.log(e.target.value);
  };

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
          <CommandPanel
            todos={todos}
            showAll={test}
            filterActive={test}
            filterCompleted={test}
            clearCompleted={handleRemoveCompleted}
          />
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
