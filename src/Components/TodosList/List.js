import { useSelector } from 'react-redux';

import TodoDoneCheckbox from './TodoDoneCheckbox';
import TodoRemoveButton from './TodoRemoveButton';
import style from './list.module.scss';
import { filteredTodos } from '../../features/selectTodos';

export default function List() {
  const todos = useSelector(filteredTodos);

  if (!todos || todos?.length <= 0) {
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
          <TodoDoneCheckbox todo={todo} />
          {todo.title}
          <TodoRemoveButton todoId={todo.id} />
        </div>
      ))}
    </div>
  );
}
