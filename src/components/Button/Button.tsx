import React from 'react';
import './Button.css';

type Props = {
  className: string;
  children: React.ReactNode;
  click?: React.MouseEventHandler;
  disabled?:  boolean;
}

const Button = ({ className, children, click, disabled}: Props) => {

  return (
    <button className={className}
      disabled={disabled}
      onClick={click}>
      {children}
    </button>
  );

};

export default Button;
