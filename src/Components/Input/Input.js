/* eslint-disable prefer-arrow-callback */
import { forwardRef } from 'react';
import style from './input.module.scss';

const Input = forwardRef(function Input(prop, ref) {
  return (
    <input
      className={style.input}
      type="text"
      placeholder="New todo..."
      ref={ref}
    />
  );
});

export default Input;
