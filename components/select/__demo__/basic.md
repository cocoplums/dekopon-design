---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic
---

## zh-CN

警告提示，展现需要关注的信息，适用于简短的警告提示。

## en-US

Warning prompts. Suitable for displaying short warning prompts in a way that attracts attention.

```js
import { Select } from "@dekopon/design";
// import { useState } from "react";
const { Option } = Select;
const App = () => {
  const [value, setValue] = React.useState();
  return (
    <Select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={"please select"}
    >
      <Option key={111}>111</Option>
      <Option key={222}>222</Option>
    </Select>
  );
};

export default App;
```
