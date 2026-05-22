# Think 思考

Think 组件用于展示 AI 的单步思考状态。

## 基础用法

```tsx
import { Bubble } from '@ant-design/x';

// Thinking 组件是 Bubble 的派生
<Bubble.Thinking content="正在思考..." />
```

## 使用场景

### 简短思考状态

```tsx
<Bubble.Thinking content="让我想想..." />
```

### 带加载动画

```tsx
<Bubble.Thinking 
  content="分析中..."
  loading
/>
```

## 与 ThoughtChain 的区别

| 特性 | Think | ThoughtChain |
|------|-------|--------------|
| 步骤数 | 单步 | 多步 |
| 复杂度 | 简单 | 复杂 |
| 使用场景 | 简单等待 | 复杂任务分解 |