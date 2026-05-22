# ThoughtChain 思考链

ThoughtChain 组件用于展示 AI 的多步思考过程。

## 源码目录结构

```
components/thought-chain/
├── index.tsx               # 主组件
├── ThoughtChainItem.tsx    # 思考项
├── interface.ts            # 类型定义
├── style/                  # 样式
└── demo/                   # 演示示例
```

## 基础用法

```tsx
import { ThoughtChain } from '@ant-design/x';

<ThoughtChain
  items={[
    {
      title: '理解问题',
      description: '分析用户意图',
      status: 'finish',
    },
    {
      title: '检索知识',
      description: '查找相关信息',
      status: 'finish',
    },
    {
      title: '生成回答',
      description: '正在思考...',
      status: 'processing',
    },
  ]}
/>
```

## Props 详解

### ThoughtChain Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| items | `ThoughtChainItem[]` | - | 思考项列表 |
| prefixCls | `string` | - | 类名前缀 |
| className | `string` | - | 自定义类名 |
| style | `CSSProperties` | - | 自定义样式 |

### ThoughtChainItem

```ts
interface ThoughtChainItem {
  key?: string | number;     // 唯一标识
  title: ReactNode;          // 标题
  description?: ReactNode;   // 描述
  status?: 'wait' | 'process' | 'finish' | 'error';
  icon?: ReactNode;          // 自定义图标
  extra?: ReactNode;         // 额外内容
}
```

## 状态说明

| 状态 | 描述 | 图标 |
|------|------|------|
| wait | 等待中 | 空心圆 |
| process | 进行中 | 加载指示器 |
| finish | 已完成 | 对勾 |
| error | 出错 | 感叹号 |

## 使用场景

### 复杂任务分解

```tsx
<ThoughtChain
  items={[
    {
      title: '阅读文档',
      description: '正在分析用户需求...',
      status: 'finish',
    },
    {
      title: '方案设计',
      description: '构思解决方案...',
      status: 'finish',
    },
    {
      title: '代码实现',
      description: '编写代码中...',
      status: 'process',
    },
    {
      title: '测试验证',
      description: '等待执行...',
      status: 'wait',
    },
  ]}
/>
```

### 多步骤推理

```tsx
<ThoughtChain
  items={[
    {
      title: '步骤 1: 数据收集',
      description: '收集相关数据',
      status: 'finish',
    },
    {
      title: '步骤 2: 数据清洗',
      description: '处理异常值',
      status: 'finish',
    },
    {
      title: '步骤 3: 模型训练',
      status: 'error',
      extra: <Button size="small">重试</Button>,
    },
  ]}
/>
```

## 最佳实践

1. **清晰的分步描述** - 每步要有明确的标题和描述
2. **状态及时更新** - 反映真实处理进度
3. **错误可恢复** - 提供重试等恢复机制
4. **适度展开** - 步骤不宜过多 (建议 3-5 步)