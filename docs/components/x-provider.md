# XProvider 全局配置

XProvider 是 Ant Design X 的全局配置提供者，提供组件上下文配置。

## 源码目录结构

```
components/x-provider/
├── index.tsx               # 主组件
├── context.ts              # Context 定义
├── interface.ts            # 类型定义
└── demo/                   # 演示示例
```

## 基础用法

```tsx
import { ConfigProvider } from 'antd';
import { XProvider } from '@ant-design/x';
import zhCN from 'antd/locale/zh_CN';

const App = ({ children }) => (
  <ConfigProvider locale={zhCN}>
    <XProvider>
      {children}
    </XProvider>
  </ConfigProvider>
);
```

## Props 详解

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| prefixCls | `string` | - | 统一类名前缀 |
| iconPrefixCls | `string` | - | 图标类名前缀 |
| direction | `'ltr' \| 'rtl'` | `'ltr'` | 文本方向 |
| getPopupContainer | `function` | - | 弹出层渲染容器 |
| csp | `CSPConfig` | - | 内容安全策略 |
| autoInsertSpaceInButton | `boolean` | `true` | 按钮内自动插入空格 |
| locale | `Locale` | - | 语言配置 |
| theme | `ThemeConfig` | - | 主题配置 |
| components | `Record<string, ComponentConfig>` | - | 组件级配置 |

## 使用场景

### 基础配置

```tsx
<XProvider>
  <App />
</XProvider>
```

### 组合使用

```tsx
<ConfigProvider
  locale={zhCN}
  theme={{
    token: {
      colorPrimary: '#1677ff',
    },
  }}
>
  <XProvider>
    <App />
  </XProvider>
</ConfigProvider>
```

### 自定义组件配置

```tsx
<XProvider
  components={{
    bubble: {
      variant: 'borderless',
      shape: 'round',
    },
    sender: {
      placeholder: '请输入消息...',
    },
  }}
>
  <App />
</XProvider>
```

## Context API

### useXProviderContext

```tsx
import { useXProviderContext } from '@ant-design/x';

const MyComponent = () => {
  const { direction, getPrefixCls, theme } = useXProviderContext();
  
  return <div>{/* 使用上下文 */}</div>;
};
```

## 最佳实践

1. **在应用顶层使用** - 确保所有组件都能获取配置
2. **与 ConfigProvider 配合** - 继承 Ant Design 主题
3. **按需配置** - 只配置需要自定义的部分