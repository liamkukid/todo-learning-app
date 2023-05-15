import PropTypes from 'prop-types';
import style from './list.module.scss';

export default function List({ todos, onDone }) {
  const handleChange = e => {
    onDone(e.target.value, e.target.checked);
  };

  if (todos && todos.length > 0) {
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
          </div>
        ))}
      </div>
    );
  }
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
};

List.defaultProps = {
  todos: [],
};
