import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import style from './input.module.scss';
import { addTodo } from '../features/todosSlice';

export default function Input() {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    if (inputRef.current.value) {
      dispatch(addTodo(inputRef.current.value));
    }
  };

  return (
    <form className={style.form_content} onSubmit={handleSubmit}>
      <input
        className={style.form_input}
        name="todo_input"
        type="text"
        ref={inputRef}
        id="todo_input"
        placeholder="New todo..."
      />
      <button className={style.form_submit} type="submit">
        Save
      </button>
    </form>
  );
}
