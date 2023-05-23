import { useSelector, useDispatch } from 'react-redux';

import Button from './Button';
import style from './commandPanel.module.scss';
import {
  filterActive,
  showAll,
  filterCompleted,
} from '../features/filterSlice';
import { removeCompleted } from '../features/todosSlice';
import { selectTodosLeftCount } from '../features/selectTodos';

export default function CommandPanel() {
  const todosLeftCount = useSelector(selectTodosLeftCount);
  const dispatch = useDispatch();

  return (
    <div className={style.panel}>
      <span className={style.span_items_left}>
        {todosLeftCount > 0 ? todosLeftCount : 'no'} items left
      </span>
      <Button title="All" onClick={() => dispatch(showAll())} />
      <Button title="Active" onClick={() => dispatch(filterActive())} />
      <Button title="Completed" onClick={() => dispatch(filterCompleted())} />
      <Button
        title="Remove Completed"
        onClick={() => dispatch(removeCompleted())}
      />
    </div>
  );
}
