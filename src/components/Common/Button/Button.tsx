import React from 'react';
import classNames from 'classnames/bind';

import buttonStyle from './Button.module.scss';

export interface ButtonProps {
  title: string,
  onClick: () => any,
  disabled?: boolean,
  isLoading?: boolean,
  className?: string,
}

const Button = ({ title, onClick, disabled = true, isLoading = false, className }: ButtonProps) => {
  const style = classNames.bind(buttonStyle);

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="submit"
      className={style('button', { 'disabled': disabled, 'loading': isLoading }, className)}
    >
      {title}
    </button>
  );
}

export default Button;