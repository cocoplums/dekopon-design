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
import { Modal, Button } from '@dekopon/design';

function App() {
  const [visible, setVisible] = React.useState(false);
  return (
          <div>
            <Button onClick={() => setVisible(true)} type="primary">
              Open Modal
            </Button>
            <Modal
                    title="Modal Title"
                    visible={visible}
                    onConfirm={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                    autoFocus={false}
                    focusLock={true}
            >
              <p>
                You can customize modal body text by the current situation. This modal will be closed
                immediately once you press the OK button.
              </p>
            </Modal>
          </div>
  );
}

export default App;
```
