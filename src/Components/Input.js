import { useRef } from 'react';
import PropTypes from 'prop-types';
import style from './input.module.scss';

export default function Input({ onSubmit }) {
  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    if (inputRef.current.value) {
      onSubmit(inputRef.current.value);
    }
  };

  return (
    <form className={style.form_content} onSubmit={handleSubmit}>
      <input
        className={style.form_input}
        name="todo_input"
        type="text"
        id="todo_input"
        ref={inputRef}
        placeholder="New todo..."
      />
      <button className={style.form_submit} type="submit">
        Save
      </button>
    </form>
  );
}

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
