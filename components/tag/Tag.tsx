import React from "react";
import classNames from "../_util/classNames";

type TagType = {
  children: React.ReactNode;
  size?: "small" | "default" | "medium" | "large";
  color?: string;
  className?: string;
  onClick?: () => void;
};
const Tag = ({ children, size = "default", onClick,className }: TagType) => {
  return (
    <span
      onClick={onClick}
      className={classNames("zzf-tag", `zzf-tag-size-${size}`,className)}
    >
      {children}
    </span>
  );
};

export default Tag;
