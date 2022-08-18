import React from "react";
import Trigger from "rc-trigger";
type PopoverProps = {
  content: React.ReactNode;
  children: JSX.Element;
  align: string;
  onPopupVisibleChange: (visible:boolean) => void;
};
const builtinPlacements = {
  left: {
    points: ["cr", "cl"],
  },
  right: {
    points: ["cl", "cr"],
  },
  top: {
    points: ["bc", "tc"],
  },
  bottom: {
    points: ["tc", "bc"],
  },
  topLeft: {
    points: ["bl", "tl"],
  },
  topRight: {
    points: ["br", "tr"],
  },
  bottomRight: {
    points: ["tr", "br"],
  },
  bottomLeft: {
    points: ["tl", "bl"],
  },
};
function getAlign(state: string) {
  if (Object.keys(builtinPlacements).includes(state)) {
    return Reflect.get(builtinPlacements, state);
  } else {
    return {};
  }
}
const Popover = ({
  content,
  children,
  align,
  onPopupVisibleChange,
}: PopoverProps) => {
  return (
    <Trigger
      onPopupVisibleChange={onPopupVisibleChange}
      action={["click"]}
      popup={content}
      popupAlign={getAlign(align)}
    >
      {children}
    </Trigger>
  );
};

export default Popover;
