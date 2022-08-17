import React from "react";
import classNames from "../_util/classNames";

type TagType = {
  children: React.ReactNode;
  size?: "small" | "default" | "medium" | "large";
  color?: string;
};
const Tag = ({ children, size = "default" }: TagType) => {
  return (
    <span className={classNames("zzf-tag", `zzf-tag-size-${size}`)}>
      {children}
    </span>
  );
};

export default Tag;
