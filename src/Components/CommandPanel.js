import { memo } from 'react';
import PropTypes from 'prop-types';

import style from './commandPanel.module.scss';

function CommandPanel({
  todos,
  showAll,
  filterActive,
  filterCompleted,
  clearCompleted,
}) {
  return (
    <div className={style.panel}>
      <span className={style.span_items_left}>
        {todos.filter(todo => !todo.done).length} items left
      </span>
      <Button title="All" onClick={showAll} />
      <Button title="Active" onClick={filterActive} />
      <Button title="Completed" onClick={filterCompleted} />
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
  showAll: PropTypes.func.isRequired,
  filterActive: PropTypes.func.isRequired,
  filterCompleted: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};

CommandPanel.defaultProps = {
  todos: [],
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
