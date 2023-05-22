import Input from './Components/Input';
import List from './Components/List';
import CommandPanel from './Components/CommandPanel';
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
        <div className={style.input}>
          <Input />
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
