---
order: 0
title:
  zh-CN: 标题
  en-US: title
---

## zh-CN

一个基本的评论组件，带有作者、头像、时间和操作。

##  en-US

A basic comment component with author, avatar, time and actions.

```js
import React from 'react';
import { Card } from '@dekopon/design';

const App = () => {
  const [like, setLike] = React.useState();
  const [star, setStar] = React.useState();
  return (
          <Card title={'sadsa'}>123123</Card>
  );
};

export default App;
```
