---
order: 0
title:
  zh-CN: 基础用法
  en-US: Basic
---

## zh-CN

一个基本的评论组件，带有作者、头像、时间和操作。

##  en-US

A basic comment component with author, avatar, time and actions.

```js
import React from 'react';
import { Comment } from '@dekopon/design';

const App = () => {
  const [like, setLike] = React.useState();
  const [star, setStar] = React.useState();
  return (
    <Comment
      author="Socrates"
      avatar={<img src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png"/>}
      content={<div>Comment body content.</div>}
      datetime="1 hour"
    />
  );
};

export default App;
```

```css
.custom-comment-action {
  padding: 0 4px;
  line-height: 24px;
  border-radius: 2px;
  background: transparent;
  transition: all 0.1s ease;
  color: var(--color-text-1);
  cursor: pointer;
  display: inline-block;
}

.custom-comment-action:hover {
  background: var(--color-fill-3);
}
```
