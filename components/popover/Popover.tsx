import React from "react";
import RcTooltip from "rc-tooltip";
type PopoverProps = {
  content: React.ReactNode;
  children: JSX.Element;
  placement:
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight";
  onPopupVisibleChange: (visible: boolean) => void;
};

const Popover = ({
  content,
  children,
  placement = "bottom",
  onPopupVisibleChange,
}: PopoverProps) => {
  return (
    <RcTooltip
      prefixCls={"dekopon-popover"}
      onVisibleChange={onPopupVisibleChange}
      trigger={["click"]}
      placement={placement}
      overlay={content}
    >
      {children}
    </RcTooltip>
  );
};

export default Popover;
