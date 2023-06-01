import NewTodoForm from '../NewTodoForm/NewTodoForm';
import List from '../TodosList/List';
import CommandPanel from '../CommandPanel/CommandPanel';
import style from './App.module.scss';

export default function App() {
  return (
    <div className={style.app}>
      <div
        style={{
          backgroundImage: `url(${`${process.env.PUBLIC_URL}/work_desk.jpg`})`,
        }}
        className={style.head}
      >
        <div className={style.newTodoForm}>
          <NewTodoForm />
        </div>
        <div className={style.commandPanel}>
          <CommandPanel />
        </div>
      </div>
      <div className={style.body}>
        <List />
      </div>
    </div>
  );
}
