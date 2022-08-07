import React from 'react';
import RcTooltip from 'rc-tooltip'
interface TooltipProps {
  id?:string;
  content: string;
  children: React.ReactElement;
  position?:'left'|'right'|'top'|'bottom'| 'topLeft'| 'topRight'| 'bottomLeft'| 'bottomRight'| 'rightTop'| 'rightBottom'| 'leftTop'| 'leftBottom';
}

const Tooltip = ({ content,children,position='top',id}:TooltipProps) => {
  return (
    <RcTooltip id={id} prefixCls={'dekopon'} placement={position} trigger={['hover']} overlay={content}>
      {children}
    </RcTooltip>
  );
};

export default Tooltip;
