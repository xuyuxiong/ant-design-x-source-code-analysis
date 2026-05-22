# Bubble 气泡对话

> Ant Design X 的核心对话组件，用于展示单条 AI/用户消息

**源码位置**: `packages/x/components/bubble/`

**文件数**: 约 18 个文件（含测试和示例）

## 📁 源码目录结构

```
components/bubble/
├── Bubble.tsx              # 主组件实现
├── BubbleList.tsx          # 列表容器组件
├── Divider.tsx             # 分隔线组件
├── EditableContent.tsx     # 可编辑内容
├── TypingContent.tsx       # 打字机效果内容
├── System.tsx              # 系统消息组件
├── loading.tsx             # 加载状态
├── context.ts              # Context 定义
├── interface.ts            # 类型定义（核心）
├── index.tsx               # 导出入口
├── hooks/                  # 自定义 Hooks
│   ├── useTypingConfig.ts  # 打字机配置
│   └── useEditable.ts      # 可编辑逻辑
├── style/                  # 样式文件
│   ├── index.tsx           # 样式注册
│   ├── content.tsx         # 内容样式
│   └── ...
└── demo/                   # 演示示例
    ├── basic.tsx
    ├── typing.tsx
    ├── loading.tsx
    └── ...
```

## 🔑 核心接口

**源文件**: `components/bubble/interface.ts`

### BubbleProps

```typescript
interface BubbleProps<ContentType extends BubbleContentType = string>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  
  // ========== 基础属性 ==========
  
  /**
   * 类名前缀
   */
  prefixCls?: string;
  
  /**
   * 气泡内容（支持 ReactNode 或任意对象）
   */
  content: ContentType;  // ContentType = ReactNode | AnyObject
  
  /**
   * 对齐位置
   */
  placement?: 'start' | 'end';
  
  /**
   * 变体样式
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined' | 'shadow' | 'borderless';
  
  /**
   * 气泡形状
   * @default 'default'
   */
  shape?: 'default' | 'round' | 'corner';
  
  // ========== 状态属性 ==========
  
  /**
   * 加载状态
   * @default false
   */
  loading?: boolean;
  
  /**
   * 自定义加载渲染
   */
  loadingRender?: () => React.ReactNode;
  
  /**
   * 是否流式传输内容
   * @default false
   */
  streaming?: boolean;
  
  // ========== 动画属性 ==========
  
  /**
   * 打字机/动画配置（仅在 content 为 string 时生效）
   */
  typing?: boolean | BubbleAnimationOption | ((content, info) => ...);
  
  /**
   * 动画回调
   */
  onTyping?: (rendererContent: string, currentContent: string) => void;
  onTypingComplete?: (content: string) => void;
  
  // ========== 可编辑属性 ==========
  
  /**
   * 是否可编辑
   */
  editable?: boolean | EditableBubbleOption;
  
  /**
   * 编辑回调
   */
  onEditConfirm?: (content: string) => void;
  onEditCancel?: () => void;
  
  // ========== 插槽属性 ==========
  
  /**
   * 头部插槽
   */
  header?: BubbleSlot<ContentType>;
  
  /**
   * 底部插槽
   */
  footer?: BubbleSlot<ContentType>;
  
  /**
   * 头像插槽
   */
  avatar?: BubbleSlot<ContentType>;
  
  /**
   * 额外内容插槽
   */
  extra?: BubbleSlot<ContentType>;
  
  /**
   * 底部插槽渲染位置
   */
  footerPlacement?: 'outer-start' | 'outer-end' | 'inner-start' | 'inner-end';
  
  /**
   * 自定义内容渲染
   */
  contentRender?: (content: ContentType, info: Info) => React.ReactNode;
  
  // ========== 样式属性 ==========
  
  /**
   * 自定义样式映射
   */
  styles?: Partial<Record<SemanticType, React.CSSProperties>>;
  
  /**
   * 自定义类名映射
   */
  classNames?: Partial<Record<SemanticType, string>>;
  
  /**
   * 根元素类名
   */
  rootClassName?: string;
}
```

### BubbleAnimationOption

```typescript
interface BubbleAnimationOption {
  /**
   * 动画效果类型
   * @default 'fade-in'
   */
  effect?: 'typing' | 'fade-in';
  
  /**
   * 内容步进单位（数组格式为随机区间 [min, max]）
   * @default 6
   */
  step?: number | [number, number];
  
  /**
   * 动画触发间隔 (ms)
   * @default 100
   */
  interval?: number;
  
  /**
   * 重新开始动画时是否保留文本公共前缀
   * @default true
   */
  keepPrefix?: boolean;
}
```

### EditableBubbleOption

```typescript
interface EditableBubbleOption {
  /**
   * 是否处于编辑状态
   */
  editing?: boolean;
  
  /**
   * 确认按钮文本
   */
  okText?: React.ReactNode;
  
  /**
   * 取消按钮文本
   */
  cancelText?: React.ReactNode;
}
```

### 类型定义

```typescript
// 内容类型
type BubbleContentType = React.ReactNode | AnyObject;

// 插槽类型
type BubbleSlot<ContentType> =
  | React.ReactNode
  | ((content: ContentType, info: Info) => React.ReactNode);

// 语义化类型
type SemanticType =
  | 'root'
  | 'content'
  | 'body'
  | 'header'
  | 'footer'
  | 'avatar'
  | 'extra';

// 消息状态
enum MessageStatus {
  local = 'local',
  loading = 'loading',
  updating = 'updating',
  success = 'success',
  error = 'error',
  abort = 'abort',
}

// Info 接口
type Info = {
  status?: `${MessageStatus}`;
  key?: string | number;
  extraInfo?: AnyObject;
};
```

## 📝 使用示例

### 示例 1: 基础用法

```tsx
import { Bubble } from '@ant-design/x';

// 基础展示
<Bubble content="你好，有什么可以帮你的？" />

// 指定对齐位置
<Bubble placement="start" content="AI 消息（左侧）" />
<Bubble placement="end" content="用户消息（右侧）" />
```

> ⚠️ **注意**: Bubble 组件**没有** `role` 属性，通过 `placement` 区分 AI/用户消息。

### 示例 2: 打字机效果

```tsx
<Bubble
  content="这是打字机效果，文字会逐字显示..."
  typing={{
    effect: 'typing',      // 打字机效果
    step: 1,               // 每次显示 1 个字符
    interval: 50,          // 间隔 50ms
    keepPrefix: true,      // 保持公共前缀
  }}
  onTypingComplete={(content) => {
    console.log('打字完成:', content);
  }}
/>
```

### 示例 3: 流式输出

```tsx
import { Bubble } from '@ant-design/x';
import { useState, useEffect } from 'react';

function StreamingExample() {
  const [content, setContent] = useState('');
  const [streaming, setStreaming] = useState(true);
  
  // 模拟流式接收
  useEffect(() => {
    const fullContent = '这是一段很长的流式回答...';
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
      typing={streaming}  // 流式时启用打字机
      variant="filled"
    />
  );
}
```

### 示例 4: 加载状态

```tsx
// 基础加载
<Bubble loading content="思考中..." />

// 自定义加载渲染
<Bubble
  loading
  loadingRender={() => (
    <div className="custom-loading">
      <Spin />
      <span>AI 正在思考...</span>
    </div>
  )}
/>
```

### 示例 5: 可编辑内容

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
    setEditing(false);
  }}
  onEditCancel={() => {
    setEditing(false);
  }}
/>
```

### 示例 6: 完整插槽

```tsx
<Bubble
  placement="start"
  content="这是一条消息"
  variant="outlined"
  shape="round"
  header={<div>发送者名称</div>}
  avatar={<Avatar src="/avatar.png" />}
  footer={<div>消息时间戳</div>}
  extra={<Button>操作</Button>}
/>
```

### 示例 7: 样式定制

```tsx
<Bubble
  content="自定义样式"
  styles={{
    root: { maxWidth: 500 },
    content: { backgroundColor: '#e6f4ff' },
    avatar: { border: '2px solid #1677ff' },
  }}
  classNames={{
    body: 'custom-body-class',
  }}
/>
```

## ⚙️ Props 详解

### 基础属性

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| content | `ReactNode \| AnyObject` | - | 气泡内容 |
| placement | `'start' \| 'end'` | - | 对齐位置 |
| variant | `'filled' \| 'outlined' \| 'shadow' \| 'borderless'` | `'filled'` | 变体样式 |
| shape | `'default' \| 'round' \| 'corner'` | `'default'` | 气泡形状 |

### 状态属性

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| loading | `boolean` | `false` | 加载状态 |
| loadingRender | `() => ReactNode` | - | 自定义加载渲染 |
| streaming | `boolean` | `false` | 是否流式传输 |

### 动画属性

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| typing | `boolean \| BubbleAnimationOption \| function` | - | 打字机动画 |
| onTyping | `(renderer, current) => void` | - | 打字过程回调 |
| onTypingComplete | `(content) => void` | - | 打字完成回调 |

### 可编辑属性

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| editable | `boolean \| EditableBubbleOption` | `false` | 是否可编辑 |
| onEditConfirm | `(content) => void` | - | 编辑确认回调 |
| onEditCancel | `() => void` | - | 编辑取消回调 |

### 插槽属性

| 属性 | 类型 | 描述 |
|------|------|--------|
| header | `BubbleSlot` | 头部插槽 |
| footer | `BubbleSlot` | 底部插槽 |
| avatar | `BubbleSlot` | 头像插槽 |
| extra | `BubbleSlot` | 额外内容插槽 |
| footerPlacement | `'outer-start' \| 'outer-end' \| 'inner-start' \| 'inner-end'` | 底部插槽位置 |
| contentRender | `function` | 自定义内容渲染 |

### 样式属性

| 属性 | 类型 | 描述 |
|------|------|--------|
| prefixCls | `string` | 类名前缀 |
| rootClassName | `string` | 根元素类名 |
| styles | `Record<SemanticType, CSSProperties>` | 自定义样式映射 |
| classNames | `Record<SemanticType, string>` | 自定义类名映射 |

## 💡 最佳实践

### ✅ 推荐

```tsx
// 1. 使用 placement 区分 AI/用户消息
<Bubble placement="start" content="AI 消息" />
<Bubble placement="end" content="用户消息" />

// 2. 流式场景启用 typing
<Bubble content={streamingContent} typing={isStreaming} />

// 3. 使用 variant 区分视觉层次
<Bubble variant="filled" content="普通消息" />
<Bubble variant="outlined" content="强调消息" />
```

### ❌ 不推荐

```tsx
// 1. 不要使用不存在的 role 属性
<Bubble role="ai" /> // ❌ 错误

// 2. 避免过快的打字速度
<Bubble typing={{ interval: 5 }} /> // ❌ 太快，用户看不清

// 3. 避免 content 类型不一致
<Bubble content={null} /> // ❌ 可能报错
```

---

**源码参考**: `packages/x/components/bubble/`