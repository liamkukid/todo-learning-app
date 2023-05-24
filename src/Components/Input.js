import { useDispatch } from 'react-redux';
import style from './input.module.scss';
import { addTodo } from '../features/todosSlice';

export default function Input() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const todoTitle = e.target.todo_input.value;
    if (todoTitle) {
      dispatch(addTodo(todoTitle));
    }
  };

  return (
    <form className={style.form_content} onSubmit={handleSubmit}>
      <input
        className={style.form_input}
        name="todo_input"
        type="text"
        id="todo_input"
        placeholder="New todo..."
      />
      <button className={style.form_submit} type="submit">
        Save
      </button>
    </form>
  );
}
