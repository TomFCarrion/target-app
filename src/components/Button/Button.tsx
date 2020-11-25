import React, { MouseEventHandler } from 'react';

import styles from './Button.module.scss';

export interface ButtonProps {
  title: string,
  onClick: MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean,
}

const Button = ({ title, onClick, disabled = false }: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={styles.button}
  >{title}</button>
);

export default Button;