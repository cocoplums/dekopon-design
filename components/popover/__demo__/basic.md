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
import { Popover, Button } from "@dekopon/design";

function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <Popover
            align='bottomRight'
      content={
        <span>
          <p>Here is the text content</p>
          <p>Here is the text content</p>
        </span>
      }
    >
      <Button type="primary">Hover</Button>
    </Popover>
  );
}

export default App;
```
