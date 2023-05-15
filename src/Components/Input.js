import PropTypes from 'prop-types';
import style from './input.module.scss';

export default function Input({ onSubmit }) {
  function onFormSubmit(e) {
    const { value } = e.target.todo;
    onSubmit(value);
  }

  return (
    <form className={style.form_content} onSubmit={onFormSubmit}>
      <input className={style.form_input} name="todo" type="text" />
      <button className={style.form_submit} type="submit">
        Save
      </button>
    </form>
  );
}

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
