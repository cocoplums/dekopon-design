import React from 'react';
import classNames from '../_util/classNames';
interface SidebarProps {
  className?: string;
  children: React.ReactNode;
}
const Aside: React.FC<SidebarProps> = ({ children, className }) => {
  return <aside className={classNames('zzf-layout-slider', className)}>{children}</aside>;
};

export default Aside;
