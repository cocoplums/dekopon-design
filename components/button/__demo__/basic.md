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
import { Button,Space } from '@dekopon/design';

const App = () => {
  return <Space>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
    <Button type="outline">Outline</Button>
    <Button type="text">Text</Button>
  </Space>
}

export default App
```
