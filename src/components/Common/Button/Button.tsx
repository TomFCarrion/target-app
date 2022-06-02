import React from 'react';
import classNames from 'classnames/bind';

import buttonStyle from './Button.module.scss';

export interface ButtonProps {
  title: string,
  onClick: () => any,
  disabled?: boolean,
  secondary?: boolean,
  isLoading?: boolean,
  className?: string,
}

const Button = ({ title, onClick, disabled = true, secondary = false, isLoading = false, className }: ButtonProps) => {
  const style = classNames.bind(buttonStyle);

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="submit"
      className={style('button', { 'secondary': secondary, 'disabled': disabled, 'loading': isLoading }, className)}
    >
      {title}
    </button>
  );
}

export default Button;