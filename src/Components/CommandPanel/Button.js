import PropTypes from 'prop-types';
import style from './button.module.scss';

export default function Button({ title, onClick }) {
  return (
    <button
      className={style.button}
      type="button"
      onClick={onClick}
      value={title}
    >
      {title}
    </button>
  );
}
Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
