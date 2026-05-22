# 主题系统

Ant Design X 的主题系统基于 Ant Design 5.0+ 的 Design Token 架构。

## Design Token 架构

Design Token 是设计系统中的最小单位，用于存储设计决策。

```
Design Token 层级
┌─────────────────────────────────────┐
│   Seed Token (种子令牌)             │
│   - colorPrimary                    │
│   - borderRadius                    │
│   - fontFamily                      │
└─────────────────┬───────────────────┘
                  │
                  ↓ Transform
┌─────────────────────────────────────┐
│   Map Token (映射令牌)              │
│   - colorPrimaryBg                  │
│   - colorPrimaryBorder              │
│   - colorPrimaryHover               │
└─────────────────┬───────────────────┘
                  │
                  ↓ Generate
┌─────────────────────────────────────┐
│   Product Token (产品令牌)          │
│   - 具体组件的最终样式值            │
└─────────────────────────────────────┘
```

## 主题配置

### 基础配置

```tsx
import { ConfigProvider, theme } from 'antd';
import { XProvider } from '@ant-design/x';

const App = () => (
  <ConfigProvider
    theme={{
      algorithm: theme.defaultAlgorithm, // 默认算法
      token: {
        colorPrimary: '#1677ff', // 主色
        borderRadius: 6,         // 圆角
        fontSize: 14,            // 字号
      },
    }}
  >
    <XProvider>
      {/* 应用内容 */}
    </XProvider>
  </ConfigProvider>
);
```

### 暗黑模式

```tsx
import { ConfigProvider } from 'antd';

const App = () => (
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm, // 暗黑算法
    }}
  >
    {/* 暗黑模式应用 */}
  </ConfigProvider>
);
```

## 核心 Token

### 颜色 Token

```
colorPrimary          - 主色
colorPrimaryBg        - 主色背景
colorPrimaryBorder    - 主色边框
colorPrimaryHover     - 主色悬浮
colorPrimaryActive    - 主色激活
colorSuccess          - 成功色
colorWarning          - 警告色
colorError            - 错误色
colorText             - 文本颜色
colorTextSecondary    - 次要文本
colorBgContainer      - 容器背景
colorBgElevated       - 悬浮背景
```

### 尺寸 Token

```
fontSize              - 字号
fontSizeSM            - 小字号
fontSizeLG            - 大字号
lineHeight            - 行高
lineHeightSM          - 小行高
lineHeightLG          - 大行高
```

### 圆角 Token

```
borderRadius          - 基础圆角
borderRadiusSM        - 小圆角
borderRadiusLG        - 大圆角
borderRadiusXS        - 超小圆角
borderRadiusXL        - 超大圆角
```

### 间距 Token

```
margin                - 外边距
marginSM              - 小外边距
marginLG              - 大外边距
marginXS              - 超小外边距
marginXXL             - 超大外边距
padding               - 内边距
paddingSM             - 小区内边距
paddingLG             - 大内边距
```

## 组件级定制

### Bubble 组件定制

```tsx
import { Bubble } from '@ant-design/x';
import { ConfigProvider } from 'antd';

const App = () => (
  <ConfigProvider
    theme={{
      components: {
        Bubble: {
          colorBgContainer: '#f5f5f5', // 气泡背景
          colorText: '#333',            // 文本颜色
          borderRadiusLG: 16,           // 气泡圆角
          padding: 16,                  // 内边距
        },
      },
    }}
  >
    <Bubble content="Hello AI!" />
  </ConfigProvider>
);
```

### Sender 组件定制

```tsx
import { Sender } from '@ant-design/x';
import { ConfigProvider } from 'antd';

const App = () => (
  <ConfigProvider
    theme={{
      components: {
        Sender: {
          colorBgContainer: '#ffffff',
          colorBorder: '#d9d9d9',
          borderRadius: 8,
          controlHeight: 48,
        },
      },
    }}
  >
    <Sender />
  </ConfigProvider>
);
```

## CSS-in-JS 方案

Ant Design X 使用 `@ant-design/cssinjs` 进行样式管理。

### 样式注册

```tsx
import { useStyleRegister } from '@ant-design/cssinjs';

const useStyle = (token) => {
  return useStyleRegister(
    { theme: token.theme, token: token.token, hashId: token.hashId },
    () => [
      {
        '.ant-bubble': {
          display: 'flex',
          flexDirection: 'column',
          padding: token.padding,
          borderRadius: token.borderRadiusLG,
          backgroundColor: token.colorBgContainer,
        },
        '.ant-bubble-content': {
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          color: token.colorText,
        },
      },
    ]
  );
};
```

### Hash 样式

通过 hash 避免样式冲突：

```tsx
const { hashId } = useStyle(token);

<div className={`ant-bubble ${hashId}`}>
  {/* 内容 */}
</div>
```

## 主题继承

### 继承 Ant Design 主题

XProvider 继承 ConfigProvider 的主题配置：

```tsx
import { ConfigProvider } from 'antd';
import { XProvider } from '@ant-design/x';

const App = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#1677ff',
      },
    }}
  >
    <XProvider>
      {/* XProvider 自动继承 ConfigProvider 的主题 */}
    </XProvider>
  </ConfigProvider>
);
```

### 扩展 Token

```tsx
// 可以扩展自定义 Token
const customToken = {
  ...theme.defaultToken,
  customBubbleColor: '#e6f4ff',
};
```

## 响应式主题

根据设备调整主题：

```tsx
import { theme } from 'antd';
import { useMediaQuery } from 'react-responsive';

const useResponsiveTheme = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  return {
    algorithm: theme.defaultAlgorithm,
    token: {
      fontSize: isMobile ? 14 : 16,
      padding: isMobile ? 8 : 16,
    },
  };
};
```

## 动态主题切换

```tsx
import { useState } from 'react';
import { ConfigProvider, theme, Switch } from 'antd';

const ThemeToggle = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Switch
        checked={isDark}
        onChange={setIsDark}
        checkedChildren="🌙"
        unCheckedChildren="☀️"
      />
      {children}
    </ConfigProvider>
  );
};
```

## 主题预设

### 公司品牌主题

```tsx
const brandTheme = {
  token: {
    colorPrimary: '#006AFF', // 品牌主色
    borderRadius: 4,          // 品牌圆角风格
    fontSize: 14,
  },
};
```

### 简约风格

```tsx
const minimalTheme = {
  token: {
    borderRadius: 0,          // 无圆角
    colorBgContainer: '#fafafa',
    colorBorder: '#e8e8e8',
  },
};
```

### 圆润风格

```tsx
const roundedTheme = {
  token: {
    borderRadius: 16,         // 大圆角
    borderRadiusLG: 24,
    colorBgContainer: '#f0f2f5',
  },
};
```

## 调试主题

### Use Token Hook

```tsx
import { useToken } from '@ant-design/cssinjs';

const DebugComponent = () => {
  const { theme, token, hashId } = useToken();
  
  return (
    <pre>
      {JSON.stringify(token, null, 2)}
    </pre>
  );
};
```

### 在线调试工具

访问 Ant Design 主题编辑器进行可视化配置：
https://ant-design.antgroup.com/docs/react/customize-theme-cn

## 性能优化

### 1. 减少 Token 变更

频繁修改 Token 会导致样式重新计算：

```tsx
// ❌ 不推荐 - 每次渲染都创建新对象
const App = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: Math.random() > 0.5 ? 'red' : 'blue',
      },
    }}
  >
    {/* ... */}
  </ConfigProvider>
);

// ✅ 推荐 - 使用 memo
const themeConfig = useMemo(() => ({
  token: { colorPrimary: 'blue' },
}), []);
```

### 2. 按需加载

只引入需要的组件和样式：

```tsx
// ✅ 按需引入
import Bubble from '@ant-design/x/lib/bubble';
import '@ant-design/x/lib/bubble/style';
```

## 最佳实践

1. **统一设计语言** - 在整个应用中使用一致的 Token
2. **避免硬编码** - 使用 Token 而不是硬编码样式值
3. **合理分层** - Seed Token → Map Token → 产品 Token
4. **命名规范** - 使用有意义的 Token 名称
5. **文档化** - 记录自定义 Token 的含义和用途

## 相关资源

- [Ant Design 主题定制](https://ant-design.antgroup.com/docs/react/customize-theme-cn)
- [Design Token 理念](https://ant-design.antgroup.com/docs/react/design-token-cn)
- [@ant-design/cssinjs](https://github.com/ant-design/cssinjs)