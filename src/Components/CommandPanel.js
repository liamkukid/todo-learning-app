import PropTypes from 'prop-types';
import { FILTER_ACTIVE, FILTER_COMPLETED, SHOW_ALL } from '../Filters';

import Button from './Button';
import style from './commandPanel.module.scss';

export default function CommandPanel({
  todosLeftCount,
  onFilterChanged,
  onRemoveCompleted,
}) {
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
      <Button title="Remove Completed" onClick={onRemoveCompleted} />
    </div>
  );
}

CommandPanel.propTypes = {
  todosLeftCount: PropTypes.number.isRequired,
  onFilterChanged: PropTypes.func.isRequired,
  onRemoveCompleted: PropTypes.func.isRequired,
};
