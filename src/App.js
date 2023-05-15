import logo from './logo.svg';
import style from './App.module.scss';

function App() {
  return (
    <div className="App">
      <header className={style.App_header}>
        <img src={logo} className={style.App_logo} alt="logo" />
      </header>
    </div>
  );
}

export default App;
