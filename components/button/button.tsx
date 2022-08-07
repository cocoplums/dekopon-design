import React from 'react';
import classNames from '../_util/classNames';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?:  'primary' | 'text' | 'secondary';
  size?: 'default' | 'primary' | 'mini'|'small';
  onClick?: (event: React.MouseEvent) => void;
}

const Button = ({
  children,
  type = 'secondary',
  size = 'default',
  className,
  onClick,
}: ButtonProps,ref: React.LegacyRef<HTMLButtonElement> | undefined) => {
  return (
    <button
        ref={ref}
      onClick={onClick}
      className={classNames('zzf-btn', `zzf-btn-type-${type}`, `zzf-btn-size-${size}`, className)}
    >
      {children}
    </button>
  );
};

export default React.forwardRef(Button);
