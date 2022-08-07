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
import { Tooltip } from '@dekopon/design';

const App = () => {
  return <Tooltip content="This is tooltip content"><span>Mouse over to display tooltip</span></Tooltip>
}

export default App
```
