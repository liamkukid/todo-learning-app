import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { FILTER_ACTIVE, FILTER_COMPLETED, SHOW_ALL } from '../Filters';
import Button from './Button';
import style from './commandPanel.module.scss';
import {
  removeCompleted,
  selectTodosLeftCount,
} from '../features/todos/todosSlice';

export default function CommandPanel({ onFilterChanged }) {
  const todosLeftCount = useSelector(selectTodosLeftCount);
  const dispatch = useDispatch();

  return (
    <div className={style.panel}>
      <span className={style.span_items_left}>
        {todosLeftCount > 0 ? todosLeftCount : 'no'} items left
      </span>
      <Button title="All" onClick={() => onFilterChanged(SHOW_ALL)} />
      <Button title="Active" onClick={() => onFilterChanged(FILTER_ACTIVE)} />
      <Button
        title="Completed"
        onClick={() => onFilterChanged(FILTER_COMPLETED)}
      />
      <Button
        title="Remove Completed"
        onClick={() => dispatch(removeCompleted())}
      />
    </div>
  );
}

CommandPanel.propTypes = {
  onFilterChanged: PropTypes.func.isRequired,
};
