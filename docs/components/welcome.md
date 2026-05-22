# Welcome 欢迎页

Welcome 组件用于展示对话初始引导页面。

## 源码目录结构

```
components/welcome/
├── index.tsx               # 主组件
├── interface.ts            # 类型定义
├── style/                  # 样式
└── demo/                   # 演示示例
```

## 基础用法

```tsx
import { Welcome } from '@ant-design/x';

<Welcome
  icon="👋"
  title="你好！"
  description="我是你的 AI 助手，有什么可以帮你的？"
/>
```

## Props 详解

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| icon | `ReactNode` | - | 图标 |
| title | `ReactNode` | - | 标题 |
| description | `ReactNode` | - | 描述 |
| variant | `'filled' \| 'borderless'` | `'filled'` | 变体样式 |
| prefixCls | `string` | - | 类名前缀 |
| className | `string` | - | 自定义类名 |
| style | `CSSProperties` | - | 自定义样式 |

## 使用场景

### 完整欢迎页

```tsx
<Welcome
  icon="🤖"
  title="欢迎使用 AI 助手"
  description="我可以帮你回答问题、编写代码、分析数据等"
/>
```

### 组合提示词

```tsx
<Welcome
  icon="👋"
  description="你好！今天想聊聊什么？"
>
  <Prompts
    options={[
      { label: '闲聊', value: 'chat' },
      { label: '编程', value: 'coding' },
      { label: '写作', value: 'writing' },
    ]}
  />
</Welcome>
```

### 自定义样式

```tsx
<Welcome
  variant="borderless"
  icon={<Avatar src="/logo.png" size={64} />}
  title={<h1>AI Assistant</h1>}
  description={<p>你的智能助手，随时待命</p>}
/>
```

## 最佳实践

1. **友好开场** - 使用友好的语言和表情
2. **清晰说明** - 告知用户可以做什么
3. **快捷引导** - 配合 Prompts 提供快捷入口
4. **精简设计** - 避免信息过载