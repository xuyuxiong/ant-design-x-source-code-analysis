# Prompts 提示词

Prompts 组件用于展示快捷问题建议，帮助用户快速开始对话。

## 源码目录结构

```
components/prompts/
├── index.tsx               # 主组件
├── interface.ts            # 类型定义
├── style/                  # 样式
└── demo/                   # 演示示例
```

## 基础用法

```tsx
import { Prompts } from '@ant-design/x';

<Prompts
  options={[
    { label: '如何开始？', value: 'how-to-start' },
    { label: '功能介绍', value: 'intro' },
    { label: '技术支持', value: 'support' },
  ]}
  onOptionClick={(option) => {
    console.log('选择了:', option.value);
  }}
/>
```

## Props 详解

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| options | `PromptOption[]` | - | 提示词选项 |
| onOptionClick | `(option) => void` | - | 点击回调 |
| prefixCls | `string` | - | 类名前缀 |
| className | `string` | - | 自定义类名 |
| style | `CSSProperties` | - | 自定义样式 |

### PromptOption

```ts
interface PromptOption {
  label: React.ReactNode;  // 显示文本
  value: string | number;  // 选项值
  icon?: React.ReactNode;   // 图标
  description?: string;     // 描述
}
```

## 使用场景

### 欢迎页提示词

```tsx
<Prompts
  title="你可以问我："
  options={[
    { label: '📝 帮我写邮件', value: 'write-email' },
    { label: '💻 生成代码', value: 'generate-code' },
    { label: '📊 数据分析', value: 'data-analysis' },
  ]}
/>
```

### 带图标的提示词

```tsx
<Prompts
  options={[
    { label: '新手指南', value: 'guide', icon: <BookOutlined /> },
    { label: '功能介绍', value: 'intro', icon: <InfoCircleOutlined /> },
    { label: '常见问题', value: 'faq', icon: <QuestionCircleOutlined /> },
  ]}
/>
```

## 最佳实践

1. **数量适度** - 建议 3-5 个提示词
2. **清晰描述** - 提示词能表达明确的意图
3. **视觉层次** - 使用图标增强识别