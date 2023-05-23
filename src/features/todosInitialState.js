import { KEY_TODO } from '../globalConst';

const todosInitialState = () => {
  const initState = JSON.parse(localStorage.getItem(KEY_TODO)) ?? [];
  return initState;
};

export default todosInitialState;
