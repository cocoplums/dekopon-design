import React from "react";
import RcCheckbox from "rc-checkbox";
interface TooltipProps {
  id?: string;
  content: string;
  children: React.ReactElement;
  position?:
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "rightTop"
    | "rightBottom"
    | "leftTop"
    | "leftBottom";
}

const Radio = ({ content, children, position = "top", id }: TooltipProps) => {
  return (
    <label>
      <RcCheckbox type="radio"></RcCheckbox>
      {children !== undefined ? <span>{children}</span> : null}
    </label>
  );
};

export default Radio;
