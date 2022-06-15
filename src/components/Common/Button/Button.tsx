import React from 'react';
import classNames from 'classnames/bind';

import buttonStyle from './Button.module.scss';

export interface ButtonProps {
  title: string,
  onClick: () => any,
  disabled?: boolean,
  secondary?: boolean,
  isLoading?: boolean,
  type?: string,
}



const Button = ({ title, onClick, disabled = true, isLoading = false, type = 'default', }: ButtonProps) => {
  const style = classNames.bind(buttonStyle);

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="submit"
      className={style('button', { 'disabled': disabled, 'loading': isLoading }, type)}
    >
      {title}
    </button>
  );
}

export default Button;