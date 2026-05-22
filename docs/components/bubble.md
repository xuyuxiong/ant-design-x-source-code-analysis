# Bubble 气泡对话

Bubble 是 Ant Design X 的核心组件，用于展示单条对话消息。

## 源码目录结构

```
components/bubble/
├── Bubble.tsx              # 主组件逻辑
├── BubbleList.tsx          # 列表组件
├── TypingContent.tsx       # 打字机效果
├── EditableContent.tsx     # 可编辑内容
├── Loading.tsx             # 加载状态
├── Divider.tsx             # 分隔线
├── System.tsx              # 系统消息
├── context.ts              # Context 定义
├── interface.ts            # 类型定义
├── hooks/                  # 自定义 Hooks
│   ├── useTypingConfig.ts
│   └── useEditable.ts
├── style/                  # 样式文件
│   ├── index.tsx           # 样式注册
│   └── content.tsx         # 内容样式
├── demo/                   # 演示示例
│   ├── basic.tsx
│   ├── typing.tsx
│   ├── loading.tsx
│   └── ...
└── index.tsx               # 导出入口
```

## 核心功能

### 1. 基础展示

展示 AI 或用户的对话消息。

```tsx
import { Bubble } from '@ant-design/x';

// 基础用法
<Bubble content="你好，有什么可以帮你的？" />

// 指定角色
<Bubble role="ai" content="我是 AI 助手" />
<Bubble role="user" content="我想了解..." />
```

### 2. 打字机效果

支持流式打字机效果。

```tsx
<Bubble
  content="这是打字机效果..."
  typing={{
    step: 1,           // 每次显示的字符数
    interval: 50,      // 间隔时间 (ms)
  }}
  onTypingComplete={(content) => {
    console.log('打字完成:', content);
  }}
/>
```

### 3. 流式输出

支持服务端流式数据。

```tsx
<Bubble
  content={streamingContent}
  streaming={isStreaming}  // 是否流式传输中
  typing={isStreaming}     // 流式时启用打字机
/>
```

### 4. 加载状态

显示加载指示器。

```tsx
<Bubble
  loading
  content="思考中..."
/>

// 自定义加载渲染
<Bubble
  loading
  loadingRender={() => <CustomLoading />}
/>
```

### 5. 可编辑内容

支持消息内容编辑。

```tsx
<Bubble
  content={content}
  editable={{
    editing: isEditing,
    okText: '确定',
    cancelText: '取消',
  }}
  onEditConfirm={(newContent) => {
    setContent(newContent);
  }}
  onEditCancel={() => {
    setEditing(false);
  }}
/>
```

## Props 详解

### 基础属性

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| content | `ReactNode` | - | 气泡内容 |
| role | `'ai' \| 'user' \| 'system'` | - | 角色类型 |
| placement | `'start' \| 'end'` | `'start'` | 对齐位置 |
| variant | `'filled' \| 'borderless' \| 'outlined'` | `'filled'` | 变体样式 |
| shape | `'default' \| 'round'` | `'default'` | 气泡形状 |
| loading | `boolean` | `false` | 加载状态 |
| streaming | `boolean` | `false` | 是否流式传输 |

### 内容相关

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| typing | `boolean \| TypingConfig` | `false` | 打字机效果 |
| typingFast | `boolean` | `false` | 快速打字模式 |
| contentRender | `(content, info) => ReactNode` | - | 自定义内容渲染 |

#### TypingConfig

```ts
interface TypingConfig {
  step?: number;           // 每次步进字符数
  interval?: number;       // 步进间隔 (ms)
  suffix?: string;         // 后缀字符
}
```

### 可编辑

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| editable | `boolean \| EditableConfig` | `false` | 是否可编辑 |
| onEditConfirm | `(content) => void` | - | 编辑确认回调 |
| onEditCancel | `() => void` | - | 编辑取消回调 |

#### EditableConfig

```ts
interface EditableConfig {
  editing?: boolean;
  okText?: string;
  cancelText?: string;
}
```

### 加载相关

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| loading | `boolean` | `false` | 加载状态 |
| loadingRender | `() => ReactNode` | - | 自定义加载渲染 |

### 布局相关

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| placement | `'start' \| 'end'` | `'start'` | 内容对齐位置 |
| footerPlacement | `string` | - | 底部内容位置 |
| avatar | `ReactNode` | - | 头像 |
| header | `ReactNode` | - | 头部内容 |
| footer | `ReactNode` | - | 底部内容 |
| extra | `ReactNode` | - | 额外内容 |
| contentRender | `function` | - | 内容渲染器 |

### 回调函数

| 属性 | 类型 | 描述 |
|------|------|--------|
| onTyping | `(content: string) => void` | 打字过程中回调 |
| onTypingComplete | `(content: string) => void` | 打字完成回调 |
| onEditConfirm | `(content: string) => void` | 编辑确认回调 |
| onEditCancel | `() => void` | 编辑取消回调 |

### 样式相关

| 属性 | 类型 | 描述 |
|------|------|--------|
| prefixCls | `string` | 类名前缀 |
| className | `string` | 自定义类名 |
| style | `CSSProperties` | 自定义样式 |
| classNames | `Record<string, string>` | 自定义类名映射 |
| styles | `Record<string, CSSProperties>` | 自定义样式映射 |

#### Slot 类型

```ts
interface BubbleSlots {
  root?: string;
  avatar?: string;
  header?: string;
  body?: string;
  content?: string;
  footer?: string;
  extra?: string;
}
```

## 使用场景

### 1. 简单对话

```tsx
<Bubble
  role="ai"
  avatar={<Avatar src="/avatar.png" />}
  content="你好！有什么可以帮你的吗？"
/>
```

### 2. 流式回答

```tsx
const [content, setContent] = useState('');
const [streaming, setStreaming] = useState(true);

// 模拟流式接收
useEffect(() => {
  const fullContent = '这是一段很长的回答...';
  let index = 0;
  
  const timer = setInterval(() => {
    if (index < fullContent.length) {
      setContent(fullContent.slice(0, index + 1));
      index++;
    } else {
      setStreaming(false);
      clearInterval(timer);
    }
  }, 50);
  
  return () => clearInterval(timer);
}, []);

return (
  <Bubble
    content={content}
    streaming={streaming}
    typing={streaming}
  />
);
```

### 3. 思考中的 AI

```tsx
<Bubble
  loading
  loadingRender={() => (
    <div>
      <Spin />
      <span>正在思考...</span>
    </div>
  )}
/>
```

### 4. 带操作的对话

```tsx
<Bubble
  content={content}
  footer={
    <div>
      <Button icon={<CopyOutlined />} onClick={handleCopy} />
      <Button icon={<LikeOutlined />} onClick={handleLike} />
      <Button icon={<DislikeOutlined />} onClick={handleDislike} />
    </div>
  }
/>
```

### 5. 可编辑回复

```tsx
const [editing, setEditing] = useState(false);

<Bubble
  content={userContent}
  role="user"
  editable={{ editing }}
  onEditConfirm={(newContent) => {
    setUserContent(newContent);
    setEditing(false);
  }}
  onEditCancel={() => setEditing(false)}
  extra={
    <Button
      size="small"
      onClick={() => setEditing(true)}
    >
      编辑
    </Button>
  }
/>
```

### 6. 系统消息

```tsx
import { Bubble } from '@ant-design/x';

<Bubble.System content="系统消息：对话已开始" />
```

## 样式定制

### 使用 CSS-in-JS

```tsx
<Bubble
  content="Hello"
  classNames={{
    content: 'custom-content',
  }}
  styles={{
    content: {
      backgroundColor: '#e6f4ff',
      fontSize: 16,
    },
  }}
/>
```

### 使用主题配置

```tsx
<ConfigProvider
  theme={{
    components: {
      Bubble: {
        colorBgContainer: '#f5f5f5',
        borderRadiusLG: 12,
        padding: 12,
      },
    },
  }}
>
  <Bubble content="Custom themed bubble" />
</ConfigProvider>
```

## Hooks

### 源码中使用的 Hooks

```tsx
// useXComponentConfig - 组件配置 Hook
const contextConfig = useXComponentConfig('bubble');

// useBubbleStyle - 样式注册 Hook
const [hashId, cssVarCls] = useBubbleStyle(prefixCls);

// useXProviderContext - 全局配置上下文
const { direction, getPrefixCls } = useXProviderContext();
```

## 性能优化

### 1. 使用 useMemo 缓存内容

```tsx
const memoedContent = useMemo(
  () => contentRender ? contentRender(content) : content,
  [content, contentRender]
);
```

### 2. 避免不必要的重新渲染

```tsx
// ✅ 好的做法
const BubbleItem = React.memo(({ bubble }) => {
  return <Bubble {...bubble} />;
});

// ❌ 不好的做法
const BubbleItem = ({ bubble }) => {
  return <Bubble {...bubble} />;
};
```

### 3. 虚拟滚动（大列表）

```tsx
<Bubble.List
  items={messages}
  virtual
  height={600}
  itemKey="id"
/>
```

## Buble.List 复合组件

Bubble 组件提供 List 子组件用于对话列表。

```tsx
import { Bubble } from '@ant-design/x';

const messages = [
  { key: '1', role: 'ai', content: '你好' },
  { key: '2', role: 'user', content: '你好' },
];

<Bubble.List
  items={messages}
  autoScroll={false}
/>;
```

### List Props

| 属性 | 类型 | 描述 |
|------|------|--------|
| items | `BubbleItemType[]` | 气泡列表数据 |
| virtual | `boolean` | 是否虚拟滚动 |
| height | `number` | 容器高度 |
| itemKey | `string` | 数据项的键名 |
| autoScroll | `boolean` | 是否自动滚动 |
| renderProps | `function` | 自定义渲染属性 |

## 最佳实践

### 1. 合理使用加载状态

```tsx
// ✅ 思考中显示加载
{loading && <Bubble loading content="正在思考..." />}

// ❌ 不要用文字代替加载状态
{loading && <Bubble content="思考中..." />}
```

### 2. 流式传输优化

```tsx
// ✅ 流式时禁用 complex 渲染
<Bubble
  content={streamingContent}
  streaming={isStreaming}
  typing={isStreaming && typeof streamingContent === 'string'}
/>
```

### 3. 错误处理

```tsx
<Bubble
  type={error ? 'error' : undefined}
  content={error ? '出错了，请重试' : content}
/>
```

## 常见问题

### Q: 如何实现多行代码展示？

```tsx
<Bubble
  content={
    <pre>
      <code>{code}</code>
    </pre>
  }
/>
```

### Q: 如何自定义头像？

```tsx
<Bubble
  avatar={
    <Avatar
      src="/avatar.png"
      shape="circle"
      size={40}
    />
  }
/>
```

### Q: 如何显示时间戳？

```tsx
<Bubble
  content={message}
  footer={
    <Text type="secondary">
      {dayjs(timestamp).format('HH:mm')}
    </Text>
  }
/>
```

## 相关组件

- [Conversations](/components/conversations) - 对话列表容器
- [Sender](/components/sender) - 输入框组件
- [ThoughtChain](/components/thought-chain) - 思考链组件
- [XProvider](/components/x-provider) - 全局配置