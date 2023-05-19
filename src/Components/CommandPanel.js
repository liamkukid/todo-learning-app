import { memo } from 'react';
import PropTypes from 'prop-types';
import { FILTER_ACTIVE, FILTER_COMPLETED, SHOW_ALL } from '../Filters';

import style from './commandPanel.module.scss';

function CommandPanel({ todos, onFilterChanged, clearCompleted }) {
  return (
    <div className={style.panel}>
      <span className={style.span_items_left}>
        {todos !== null &&
          todos.length > 0 &&
          todos.filter(todo => !todo.done).length}{' '}
        items left
      </span>
      <Button title="All" onClick={() => onFilterChanged(SHOW_ALL)} />
      <Button title="Active" onClick={() => onFilterChanged(FILTER_ACTIVE)} />
      <Button
        title="Completed"
        onClick={() => onFilterChanged(FILTER_COMPLETED)}
      />
      <Button title="Clear Completed" onClick={clearCompleted} />
    </div>
  );
}

function Button({ title, onClick }) {
  return (
    <button
      className={style.button}
      type="button"
      onClick={onClick}
      value={title}
    >
      {title}
    </button>
  );
}

export default memo(CommandPanel);

CommandPanel.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      done: PropTypes.bool,
      id: PropTypes.string,
    })
  ),
  onFilterChanged: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};

CommandPanel.defaultProps = {
  todos: [],
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
