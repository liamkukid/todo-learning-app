import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import style from './NewTodoForm.module.scss';
import Input from '../Input/Input';
import { addTodo } from '../../features/todosSlice';

export default function NewTodoForm() {
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
      <Input ref={inputRef} />
      <button className={style.form_submit} type="submit">
        Save
      </button>
    </form>
  );
}
