import PropTypes from 'prop-types';

export default function Input({ onSubmit }) {
  function onFormSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const { value } = e.target.todo;
    onSubmit(value);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input name="todo" type="text" />
      <button type="submit">Save</button>
    </form>
  );
}

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
