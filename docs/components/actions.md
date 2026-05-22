# Actions 操作组

Actions 组件用于展示消息操作按钮组。

## 基础用法

```tsx
import { Bubble } from '@ant-design/x';

<Bubble
  content="这是一条消息"
  actions={[
    { icon: <CopyOutlined />, key: 'copy', tooltip: '复制' },
    { icon: <LikeOutlined />, key: 'like', tooltip: '点赞' },
    { icon: <DislikeOutlined />, key: 'dislike', tooltip: '反对' },
  ]}
/>
```

## Props 详解

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| icon | `ReactNode` | - | 图标 |
| key | `string` | - | 唯一标识 |
| tooltip | `string` | - | 悬浮提示 |
| onClick | `() => void` | - | 点击回调 |