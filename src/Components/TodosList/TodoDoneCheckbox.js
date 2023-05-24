import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { todoDone } from '../../features/todosSlice';

export default function TodoDoneCheckbox({ todo }) {
  const dispatch = useDispatch();
  const handleChange = e => {
    const { value, checked } = e.target;
    const payload = { id: value, done: checked };
    dispatch(todoDone(payload));
  };

  return (
    <input
      type="checkbox"
      value={todo.id}
      checked={todo.done}
      onChange={handleChange}
    />
  );
}

TodoDoneCheckbox.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    done: PropTypes.bool,
    id: PropTypes.string,
  }).isRequired,
};
