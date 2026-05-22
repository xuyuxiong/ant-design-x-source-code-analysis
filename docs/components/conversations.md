# Conversations 对话列表

Conversations 是对话列表容器组件，用于管理多条对话消息。

## 源码目录结构

```
components/conversations/
├── index.tsx               # 主组件
├── index.scss              # 样式文件
├── interface.ts            # 类型定义
├── hooks/                  # 自定义 Hooks
│   └── useListData.ts      # 列表数据管理
├── style/                  # 样式
└── demo/                   # 演示示例
```

## 核心功能

```tsx
import { Conversations, Bubble } from '@ant-design/x';

<Conversations>
  <Bubble role="ai" content="你好！" />
  <Bubble role="user" content="你好，有什么服务？" />
  <Bubble role="ai" content="我可以帮你解答问题。" />
</Conversations>
```

## Props 详解

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| prefixCls | `string` | - | 类名前缀 |
| virtual | `boolean` | `false` | 是否虚拟滚动 |
| height | `number` | - | 容器高度 (虚拟滚动时使用) |
| itemKey | `string` | `'key'` | 数据项的键名 |
| autoScroll | `boolean` | `true` | 是否自动滚动 |
| children | `ReactNode` | - | 子元素 |

## 使用场景

### 基础用法

```tsx
<Conversations>
  {messages.map((msg) => (
    <Bubble
      key={msg.id}
      role={msg.role}
      content={msg.content}
    />
  ))}
</Conversations>
```

### 虚拟滚动

```tsx
<Conversations
  virtual
  height={600}
  itemKey="id"
>
  {largeMessages.map((msg) => (
    <Bubble key={msg.id} content={msg.content} />
  ))}
</Conversations>
```

### 自动滚动

```tsx
<Conversations autoScroll>
  {/* 大量消息 */}
</Conversations>
```

## 最佳实践

1. **大数据量使用虚拟滚动**
2. **提供唯一的 key 值**
3. **控制自动滚动行为**