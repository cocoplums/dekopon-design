import React from "react";
import RcSelect, { Option } from "rc-select";

const Select = (props: { children: React.ReactNode }) => {
  const { children, ...rest } = props;
  return (
    <RcSelect {...rest} prefixCls="dekopon">
      {children}
    </RcSelect>
  );
};
Select.Option = Option;
export default Select;
