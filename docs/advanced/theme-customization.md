# 主题定制

本章节介绍如何定制 Ant Design X 的主题。

## Design Token 定制

### 基础 Token

```tsx
import { ConfigProvider } from 'antd';

<ConfigProvider
  theme={{
    token: {
      colorPrimary: '#1677ff',
      borderRadius: 6,
      fontSize: 14,
      lineHeight: 1.6,
    },
  }}
>
  <XProvider>
    <App />
  </XProvider>
</ConfigProvider>
```

### 组件级 Token

```tsx
<ConfigProvider
  theme={{
    components: {
      Bubble: {
        colorBgContainer: '#f5f5f5',
        borderRadiusLG: 12,
        padding: 12,
        colorText: '#333',
      },
      Sender: {
        colorBgContainer: '#ffffff',
        colorBorder: '#d9d9d9',
        controlHeight: 48,
      },
    },
  }}
>
  <App />
</ConfigProvider>
```

## CSS 变量定制

```tsx
<ConfigProvider
  theme={{
    cssVar: {
      '--bubble-radius': '12px',
      '--sender-height': '48px',
    },
  }}
>
  <App />
</ConfigProvider>
```

## 暗黑模式

```tsx
import { theme } from 'antd';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Button onClick={() => setIsDark(!isDark)}>
        {isDark ? '🌞' : '🌙'}
      </Button>
      <XProvider>
        <App />
      </XProvider>
    </ConfigProvider>
  );
};
```

## 品牌主题

### 科技公司风格

```tsx
const techTheme = {
  token: {
    colorPrimary: '#006AFF',
    borderRadius: 4,
    fontSize: 14,
  },
  components: {
    Bubble: {
      colorBgContainer: '#f5f7fa',
      borderRadiusLG: 8,
    },
  },
};
```

### 圆角风格

```tsx
const roundedTheme = {
  token: {
    borderRadius: 12,
    borderRadiusLG: 16,
    borderRadiusXS: 4,
  },
};
```

### 紧凑风格

```tsx
const compactTheme = {
  token: {
    padding: 8,
    paddingSM: 6,
    paddingLG: 12,
    margin: 8,
  },
};
```

## 动态主题

```tsx
const useDynamicTheme = () => {
  const [themeType, setThemeType] = useState<'light' | 'dark'>('light');

  const theme = useMemo(() => ({
    algorithm: themeType === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: themeType === 'dark' ? '#177ddc' : '#1677ff',
    },
  }), [themeType]);

  return { theme, setThemeType };
};
```

## 响应式主题

```tsx
const useResponsiveTheme = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return {
    token: {
      fontSize: isMobile ? 14 : 16,
      padding: isMobile ? 8 : 16,
    },
  };
};
```