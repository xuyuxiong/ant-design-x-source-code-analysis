# Suggestion 建议

Suggestion 组件用于展示智能建议，帮助用户进行后续操作。

## 源码目录结构

```
components/suggestion/
├── index.tsx               # 主组件
├── interface.ts            # 类型定义
├── style/                  # 样式
└── demo/                   # 演示示例
```

## 基础用法

```tsx
import { Suggestion } from '@ant-design/x';

<Suggestion
  options={[
    { label: '深入解释', value: 'explain' },
    { label: '举例子', value: 'example' },
    { label: '对比分析', value: 'compare' },
  ]}
  onSelect={(option) => {
    handleSuggestion(option.value);
  }}
/>
```

## Props 详解

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| options | `SuggestionOption[]` | - | 建议选项 |
| onSelect | `(option) => void` | - | 选择回调 |
| prefixCls | `string` | - | 类名前缀 |
| className | `string` | - | 自定义类名 |
| style | `CSSProperties` | - | 自定义样式 |

## 使用场景

### 对话后建议

```tsx
<Suggestion
  options={[
    { label: '继续深入', value: 'continue' },
    { label: '换个话题', value: 'change-topic' },
    { label: '总结要点', value: 'summarize' },
  ]}
  onSelect={(option) => handleNextStep(option.value)}
/>
```

## 与 Prompts 的区别

| 特性 | Prompts | Suggestion |
|------|---------|------------|
| 使用时机 | 对话开始前 | 对话进行中/后 |
| 目的 | 引导用户提问 | 建议后续操作 |
| 数量 | 较少 (3-5 个) | 较多 (可 5+ 个) |