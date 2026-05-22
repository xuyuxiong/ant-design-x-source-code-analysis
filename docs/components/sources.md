# Sources 来源

Sources 组件用于展示信息的来源引用。

## 基础用法

```tsx
import { Sources } from '@ant-design/x';

<Sources
  items={[
    {
      title: 'React 官方文档',
      url: 'https://react.dev',
      description: 'React 官方文档和教程',
    },
    {
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org',
    },
  ]}
/>
```

## Props 详解

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| items | `SourceItem[]` | - | 来源列表 |
| title | `string` | - | 标题 |

### SourceItem

```ts
interface SourceItem {
  key?: string;
  title: string;
  url?: string;
  description?: string;
  icon?: ReactNode;
}