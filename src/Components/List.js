import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FILTER_ACTIVE, FILTER_COMPLETED } from '../Filters';
import style from './list.module.scss';
import gabarge from '../icons/gabarge.svg';
import {
  todoDone,
  todoRemove,
  selectTodos,
} from '../features/todos/todosSlice';

export default function List({ filter }) {
  const todos = useSelector(selectTodos);
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

  const filteredTodos = () => {
    switch (filter) {
      case FILTER_ACTIVE:
        return todos.filter(todo => !todo.done);
      case FILTER_COMPLETED:
        return todos.filter(todo => todo.done);
      default:
        return todos;
    }
  };

  return (
    <div className={style.list}>
      {filteredTodos().map(todo => (
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

List.propTypes = {
  filter: PropTypes.string.isRequired,
};
