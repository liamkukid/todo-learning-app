import PropTypes from 'prop-types';
import style from './list.module.scss';
import gabarge from '../icons/gabarge.svg';

export default function List({ todos, onDone, onRemove }) {
  const handleChange = e => {
    const { value, checked } = e.target;
    onDone(value, checked);
  };

  const handleRemoveClick = e => {
    onRemove(e.target.parentElement.value);
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

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      done: PropTypes.bool,
      id: PropTypes.string,
    })
  ),
  onDone: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

List.defaultProps = {
  todos: [],
};
