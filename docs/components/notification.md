# Notification 通知

Notification 组件用于展示系统通知。

## 基础用法

```tsx
import { Notification } from '@ant-design/x';

<Notification
  type="info"
  message="提示"
  description="这是一条通知消息"
/>
```

## Props 详解

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| type | `'info' \| 'success' \| 'warning' \| 'error'` | - | 类型 |
| message | `ReactNode` | - | 标题 |
| description | `ReactNode` | - | 描述 |
| duration | `number` | - | 显示时长 |
| onClose | `() => void` | - | 关闭回调 |