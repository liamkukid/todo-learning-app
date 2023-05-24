import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import style from './list.module.scss';
import gabarge from '../../icons/gabarge.svg';
import { todoRemove } from '../../features/todosSlice';

export default function TodoRemoveButton({ todoId }) {
  const dispatch = useDispatch();
  const handleRemoveClick = e => {
    dispatch(todoRemove(e.target.parentElement.value));
  };

  return (
    <button
      value={todoId}
      type="button"
      className={style.remove_todo_button}
      onClick={handleRemoveClick}
    >
      <img src={gabarge} className="gabarge-logo" alt="gabarge" />
    </button>
  );
}

TodoRemoveButton.propTypes = {
  todoId: PropTypes.string.isRequired,
};
