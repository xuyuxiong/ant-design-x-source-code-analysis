# 设计原则

Ant Design X 遵循一系列设计原则，确保产品体验的一致性和高质量。

## 核心价值观

### 1. AI 原生 (AI Native)

Ant Design X 专为 AI 应用场景设计，而不是通用 UI 库的简单扩展。

```
传统 UI 库                          Ant Design X
┌─────────────────┐                ┌─────────────────┐
│ 通用组件        │                │ AI 专用组件     │
│ 需要自行组合    │                │ 开箱即用        │
│ 无 AI 语义      │                │ AI 语义明确     │
└─────────────────┘                └─────────────────┘
```

**体现：**
- Bubble 组件支持流式输出
- ThoughtChain 展示思考过程
- Prompts 提供智能推荐
- 支持打字机效果

### 2. 以人为本 (Human-Centered)

关注用户体验，让 AI 交互更自然、更人性化。

```
设计考量：
├── 自然对话流程
├── 清晰的反馈机制
├── 合理的等待状态
├── 友好的错误处理
└── 无障碍支持 (a11y)
```

### 3. 简洁优雅 (Simple & Elegant)

简洁的 API，优雅的设计。

```tsx
// 简单的 API
<Bubble content="Hello AI!" />

// 强大的能力
<Bubble
  content="..."
  loading
  streaming
  actions={[<Copy key="copy" />]}
/>
```

### 4. 灵活可扩展 (Flexible & Extensible)

基础功能开箱即用，高级需求灵活定制。

```tsx
// 基础用法
<Bubble content="Hello" />

// 深度定制
<Bubble
  content="Hello"
  classNames={{
    content: 'custom-content',
  }}
  styles={{
    content: { fontSize: 18 },
  }}
  avatar={{ src: '/avatar.png', shape: 'circle' }}
  messageRender={(content) => <Markdown content={content} />}
/>
```

## UI 设计原则

### 1. 清晰层次 (Clear Hierarchy)

```
对话界面层次：
┌─────────────────────────────┐
│  一级：对话内容 (Bubble)    │  ← 核心内容
│  ┌─────────────────────┐    │
│  │  二级：消息操作     │    │  ← 辅助操作
│  └─────────────────────┘    │
│  三级：元信息 (时间)        │  ← 补充信息
└─────────────────────────────┘
```

### 2. 一致性 (Consistency)

所有组件遵循统一的设计语言：

```
统一元素：
├── 圆角：borderRadiusLG (16px)
├── 间距：padding (16px)
├── 字体：ant-design 默认字体
├── 颜色：继承 Ant Design 主题色
└── 动画：统一的过渡效果
```

### 3. 反馈明确 (Clear Feedback)

用户每个操作都应有明确反馈：

```
加载状态：
├── 骨架屏 - 内容加载中
├── 打字机效果 - AI 正在输出
├── 加载指示器 - 处理中
└── 生成中状态 - 思考过程展示
```

### 4. 容错设计 (Forgiving)

```
错误处理：
├── 发送失败 - 可重试
├── 网络错误 - 友好提示
├── 内容错误 - 优雅降级
└── 操作失误 - 可撤销
```

## 交互设计原则

### 1. 直觉式交互 (Intuitive)

用户不需要学习即可使用。

```
直觉设计：
├── 输入框 - 在底部，符合聊天习惯
├── 发送按钮 - 在输入框右侧
├── 气泡 - AI 左，用户右
└── 操作按钮 - 悬浮时显示
```

### 2. 渐进式披露 (Progressive Disclosure)

逐步展示信息，避免信息过载。

```
对话流程：
1. 欢迎页 (入门引导)
2. 提示词建议 (第一次交互)
3. 正常对话 (后续流程)
4. 高级功能 (按需展示)
```

### 3. 流式体验 (Streaming Experience)

支持流式输出，减少等待感知。

```tsx
// AI 流式回复
<Bubble
  content={streamingContent}
  streaming
  typing={{ step: 1, interval: 50 }}
/>
```

### 4. 状态感知 (Stateful)

组件感知自身状态并适配。

```tsx
// 不同状态展示
{loading && <Bubble loading content="思考中..." />}
{error && <Bubble type="error" content="出错了..." />}
{done && <Bubble content={result} />}
```

## 代码设计原则

### 1. 单一职责 (Single Responsibility)

每个组件只做一件事。

```tsx
// ✅ 好的设计
<Bubble />            // 只负责展示单条消息
<Conversations />     // 只负责列表容器
<Sender />            // 只负责输入发送

// ❌ 不好的设计
<Chat />              // 包含所有逻辑，过度耦合
```

### 2. 组合优于继承 (Composition over Inheritance)

通过组合实现功能复用。

```tsx
// ✅ 组合方式
<Bubble
  avatar={<Avatar src="..." />}
  actions={[<Copy />, <Like />]}
  header={<Header />}
>
  <Markdown>{content}</Markdown>
</Bubble>

// ❌ 继承方式
<BubbleWithAvatar />
<BubbleWithActions />
```

### 3. 受控与非受控 (Controlled & Uncontrolled)

支持两种使用模式。

```tsx
// ✅ 非受控 - 内部状态
<Bubble content="初始内容" />

// ✅ 受控 - 外部状态
<Bubble 
  content={message.content}
  onContentChange={handleContentChange}
/>
```

### 4. Type-Safe (类型安全)

完整的 TypeScript 类型定义。

```tsx
// ✅ 类型安全
interface BubbleProps {
  content?: React.ReactNode;
  role?: 'ai' | 'user' | 'system';
  loading?: boolean;
  avatar?: AvatarProps;
  // ...
}

// 类型错误会被捕获
<Bubble role="invalid" />  // ❌ TS 报错
```

### 5. 性能优先 (Performance First)

关注渲染性能。

```tsx
// ✅ 使用 useMemo 缓存
const memoizedContent = useMemo(() => {
  return <Markdown content={rawContent} />;
}, [rawContent]);

// ✅ 使用 React.memo 避免重复渲染
const BubbleItem = React.memo(({ bubble }) => {
  return <Bubble {...bubble} />;
});

// ✅ 虚拟滚动 (大列表场景)
<Conversations virtual fieldNames={{ key: 'id' }} />
```

## 无障碍原则 (a11y)

### 1. 键盘可访问

所有功能应支持键盘操作。

```
键盘导航：
├── Tab - 切换焦点
├── Enter - 确认操作
├── Escape - 取消
└── ArrowKeys - 方向导航
```

### 2. 屏幕阅读器支持

提供合适的 ARIA 属性。

```tsx
<Bubble
  role="article"
  aria-label={role === 'ai' ? 'AI 消息' : '用户消息'}
>
```

### 3. 焦点管理

正确的焦点管理确保键盘导航顺畅。

```tsx
// 发送后焦点回到输入框
const handleSubmit = () => {
  sendMessage();
  inputRef.current?.focus();
};
```

### 4. 对比度要求

文本对比度符合 WCAG 标准。

```
对比度要求：
├── 普通文本 - 至少 4.5:1
├── 大号文本 - 至少 3:1
└── 图标 - 至少 3:1
```

## 国际化原则

### 1. 多语言支持

支持多种语言。

```tsx
import { useLocale } from '@ant-design/x';

const locale = useLocale();
<div>{locale.sender.placeholder}</div>
```

### 2. RTL 支持

支持从右到左的语言。

```tsx
<ConfigProvider direction="rtl">
  <XProvider>
    {/* RTL 布局 */}
  </XProvider>
</ConfigProvider>
```

### 3. 文化适配

考虑不同地区的文化差异。

```
适配考量：
├── 日期格式
├── 时间显示
├── 内容审核
└── 敏感词过滤
```

## 应用原则

### 1. 以场景为导向

根据具体场景选择组件。

```
场景 → 组件选择：
├── 简单问答 → Bubble + Sender
├── 多轮对话 → Conversations + Bubble + Sender
├── 复杂任务 → ThoughtChain + Bubble
└── 知识查询 → Sources + Bubble
```

### 2. 渐进增强

基础功能优先，逐步增强。

```
实现顺序：
1. 基础对话 (Bubble + Sender)
2. 加载状态
3. 打字机效果
4. 操作按钮
5. 主题定制
```

### 3. 性能优化

按需加载，减少首屏体积。

```tsx
// ✅ 按需引入
import Bubble from '@ant-design/x/lib/bubble';

// ❌ 全部引入
import { Bubble, Sender, Conversations, ... } from '@ant-design/x';
```

## 最佳实践清单

- [ ] 使用语义化的组件
- [ ] 提供合适的加载状态
- [ ] 支持键盘操作
- [ ] 错误处理完整
- [ ] 响应式布局
- [ ] 支持国际化
- [ ] 类型定义完整
- [ ] 性能优化考虑

## 结语

设计原则是我们做出决策的指导方针。在开发过程中，当面临选择时，回归这些原则可以帮助我们做出正确的决定。

> 好的设计是尽可能少的设计。— Dieter Rams