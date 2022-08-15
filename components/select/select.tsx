import React from "react";
import RcSelect, { Option } from "rc-select";

const Select = ({children}:{children:React.ReactNode}) => {
  return (
    <RcSelect prefixCls='dekopon'>
      <Option key={11}>11</Option>
      <Option key={22}>22</Option>
    </RcSelect>
  );
};
Select.Option = Option;
export default Select;
