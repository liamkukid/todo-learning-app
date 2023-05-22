import { useSelector, useDispatch } from 'react-redux';

import style from './list.module.scss';
import gabarge from '../icons/gabarge.svg';
import { filteredTodos } from '../features/filterSlice';
import { todoDone, todoRemove } from '../features/todosSlice';

export default function List() {
  const todos = useSelector(filteredTodos);
  const dispatch = useDispatch();
  const handleChange = e => {
    const { value, checked } = e.target;
    const payload = { id: value, done: checked };
    dispatch(todoDone(payload));
  };

  const handleRemoveClick = e => {
    dispatch(todoRemove(e.target.parentElement.value));
  };

  if (!todos || todos.lenght <= 0) {
    return <div />;
  }

  return (
    <div className={style.list}>
      {todos.map(todo => (
        <div
          key={todo.id}
          className={`${style.list_item} ${
            todo.done ? style.list_item_done : ''
          }`}
        >
          <input
            type="checkbox"
            value={todo.id}
            checked={todo.done}
            onChange={handleChange}
          />
          {todo.title}
          <button
            value={todo.id}
            type="button"
            className={style.remove_todo_button}
            onClick={handleRemoveClick}
          >
            <img src={gabarge} className="gabarge-logo" alt="gabarge" />
          </button>
        </div>
      ))}
    </div>
  );
}
