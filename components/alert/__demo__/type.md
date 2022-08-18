---
order: 1
title:
  zh-CN: 不同类型
  en-US: Different type
---

## zh-CN

警告提示的类型有 `info`, `success`, `warning`, `error` 四种。

## en-US

There are four types of warnings: `info`, `success`, `warning`, and `error`.

```js
import { Alert } from '@dekopon/design';

const App = () => {
  return (
    <div>
      <Alert type="info">Here is a info text</Alert>
      <Alert type="warning">Here is a warning text</Alert>
      <Alert type="success">Here is a success text</Alert>
      <Alert type="error">Here is a error text</Alert>
    </div>
  );
};

export default App;
```
