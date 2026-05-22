# 最佳实践

本章节总结 Ant Design X 开发的最佳实践。

## 组件选择

### 何时使用哪些组件

```
简单对话 → Bubble + Sender
多轮对话 → Conversations + Bubble + Sender
复杂任务 → ThoughtChain + Bubble
引导页面 → Welcome + Prompts
代码展示 → CodeHighlighter
文件处理 → Attachments + FileCard
```

## 性能优化

### 1. 虚拟滚动

```tsx
<Conversations virtual height={600} itemKey="id">
  {largeMessages.map(msg => (
    <Bubble key={msg.id} content={msg.content} />
  ))}
</Conversations>
```

### 2. Memo 优化

```tsx
const MessageItem = React.memo(({ message }) => {
  return <Bubble content={message.content} />;
});
```

### 3. Lazy Loading

```tsx
const LazyConversations = React.lazy(() => 
  import('@ant-design/x').then(m => m.Conversations)
);
```

## 错误处理

### 1. 网络错误

```tsx
const [error, setError] = useState(null);

try {
  await sendMessage(content);
} catch (e) {
  setError('发送失败，请重试');
}
```

### 2. 加载状态

```tsx
{loading ? (
  <Bubble loading content="发送中..." />
) : (
  <Bubble content={content} />
)}
```

## 可访问性

### 1. 键盘导航

```tsx
<Sender
  onSubmit={handleSend}
  actionOnArrowDown // ↓键触发发送
  autoFocus // 自动聚焦
/>
```

### 2. ARIA 属性

```tsx
<Bubble
  role="article"
  aria-label={role === 'ai' ? 'AI 回复' : '用户消息'}
/>
```

## 国际化

```tsx
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

<ConfigProvider locale={zhCN}>
  <XProvider>
    <App />
  </XProvider>
</ConfigProvider>
```

## 安全考量

### 1. XSS 防护

```tsx
// ❌ 危险
<div dangerouslySetInnerHTML={{ __html: content }} />

// ✅ 安全
<Bubble content={content} contentRender={(c) => safeRender(c)} />
```

### 2. 文件上传安全

```tsx
<Attachments
  accept=".pdf,.doc"
  maxCount={5}
  beforeUpload={(file) => {
    // 验证文件类型
    const isValid = file.type.startsWith('image/');
    if (!isValid) {
      message.error('文件类型不支持');
    }
    return isValid;
  }}
/>
```

## 测试

### 单元测试

```tsx
describe('Bubble', () => {
  it('应该正确渲染内容', () => {
    render(<Bubble content="Hello" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('应该支持打字机效果', async () => {
    render(<Bubble content="Hello" typing />);
    await waitFor(() => {
      expect(screen.getByText('Hello')).toBeInTheDocument();
    });
  });
});
```

### E2E 测试

```tsx
test('用户可以发送消息', async () => {
  await page.type('.sender-input', 'Hello');
  await page.click('.send-button');
  await expect(page).toMatch('用户消息');
});
```

## 代码规范

### 1. 命名约定

```tsx
// 组件名
const ChatMessage = () => {};

// Props 接口
interface ChatMessageProps {
  content: string;
  role: 'ai' | 'user';
}
```

### 2. 注释规范

```tsx
// ✅ 解释为什么
// 使用虚拟滚动优化大列表性能
<Conversations virtual />

// ✅ 说明复杂逻辑
// 流式响应处理：逐块接收并追加内容
```

## 问到即答清单

| 问题 | 解决方案 |
|------|----------|
| 如何流式显示？ | 使用 `streaming` 和 `typing` Props |
| 如何显示加载状态？ | 使用 `loading` Prop |
| 如何自定义样式？ | 使用 `classNames` 和 `styles` |
| 如何支持多语言？ | 使用 `ConfigProvider locale` |
| 如何优化大列表？ | 使用 `virtual` 虚拟滚动 |

## 资源链接

- [Ant Design 设计语言](https://ant-design.antgroup.com/docs/react/introduce-cn)
- [React 最佳实践](https://react.dev/learn)
- [无障碍指南](https://www.w3.org/WAI/WCAG21/quickref/)
- [性能优化指南](https://web.dev/performance/)