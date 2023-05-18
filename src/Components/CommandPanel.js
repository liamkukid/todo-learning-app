import { memo } from 'react';
import PropTypes from 'prop-types';

import style from './commandPanel.module.scss';

function CommandPanel({ todos }) {
  const test = e => {
    console.log(e.target.value);
  };

  return (
    <div className={style.panel}>
      {todos.filter(todo => !todo.done).length} items left
      <Button title="All" onClick={test} />
      <Button title="Active" onClick={test} />
      <Button title="Completed" onClick={test} />
      <Button title="Clear Completed" onClick={test} />
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
};

CommandPanel.defaultProps = {
  todos: [],
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
