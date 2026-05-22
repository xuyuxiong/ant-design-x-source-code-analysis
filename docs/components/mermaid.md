# mermaid 流程图

Mermaid 组件用于渲染 Mermaid 流程图。

## 基础用法

```tsx
import { Mermaid } from '@ant-design/x';

<Mermaid
  chart={`
    graph TD;
      A --> B;
      A --> C;
      B --> D;
      C --> D;
  `}
/>
```

## Props 详解

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| chart | `string` | - | Mermaid 图表代码 |
| theme | `string` | `default` | 主题 |
| height | `number` | - | 高度 |
| errorFallback | `ReactNode` | - | 错误回退 |

## 图表类型

```
graph TD     - 流程图
sequenceDiagram - 时序图
classDiagram - 类图
stateDiagram - 状态图
gantt        - 甘特图
pie          - 饼图
```