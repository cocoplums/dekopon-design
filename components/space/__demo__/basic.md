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
import { Message,Button } from '@dekopon/design';

const App = () => {
  return <>
  <Button onClick={()=>Message.success("success")}>success</Button>
  <Button onClick={()=>Message.info("info")}>info</Button>
  </>
}

export default App
```
