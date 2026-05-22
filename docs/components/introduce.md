# Introduce 介绍

Introduce 组件用于功能和产品介绍展示。

## 基础用法

```tsx
import { Introduce } from '@ant-design/x';

<Introduce
  items={[
    {
      icon: <MessageOutlined />,
      title: '智能对话',
      description: '7x24 小时在线，随时解答你的问题',
    },
    {
      icon: <RocketOutlined />,
      title: '快速响应',
      description: '毫秒级响应速度，无需等待',
    },
  ]}
/>
```