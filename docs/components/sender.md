# Sender 输入框

Sender 是用户输入和发送消息的核心组件。

## 源码目录结构

```
components/sender/
├── Sender.tsx              # 主组件
├── SenderHeader.tsx        # 头部组件
├── SenderSwitch.tsx        # 切换组件
├── TextArea.tsx            # 文本域
├── ActionButton.tsx        # 操作按钮
├── SpeechButton.tsx        # 语音按钮
├── context.ts              # Context 定义
├── interface.ts            # 类型定义
├── hooks/                  # 自定义 Hooks
│   ├── useSpeaking.ts
│   └── useSend.ts
├── components/             # 子组件
├── style/                  # 样式
└── demo/                   # 演示示例
```

## 核心功能

### 1. 基础输入

```tsx
import { Sender } from '@ant-design/x';

<Sender
  onSubmit={(message) => {
    sendMessage(message);
  }}
/>
```

### 2. 语音输入

```tsx
<Sender
  speech
  onSpeechStart={() => {}}
  onSpeechEnd={(text) => {}}
  onSpeechError={(error) => {}}
/>
```

### 3. 按钮配置

```tsx
<Sender
  actions={[
    { icon: <SendOutlined />, type: 'send' },
    { icon: <AudioOutlined />, type: 'speech' },
  ]}
  actionOnArrowDown
/>
```

## Props 详解

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| value | `string` | - | 输入值 |
| placeholder | `string` | - | 占位符 |
| onSubmit | `(value: string) => void` | - | 提交回调 |
| onChange | `(value: string) => void` | - | 值变化回调 |
| loading | `boolean` | `false` | 加载状态 |
| readOnly | `boolean` | `false` | 只读模式 |
| disabled | `boolean` | `false` | 禁用状态 |
| resetOnSubmit | `boolean` | `true` | 提交后重置 |
| autoFocus | `boolean` | `false` | 自动聚焦 |
| actionOnArrowDown | `boolean` | `false` | ↓键触发提交 |
| actions | `ActionButtonProps[]` | - | 自定义按钮 |
| speech | `boolean \| SpeechConfig` | `false` | 语音输入配置 |

## 使用场景

### 基础对话输入

```tsx
const [messages, setMessages] = useState([]);

<Sender
  placeholder="输入消息..."
  onSubmit={(text) => {
    setMessages([...messages, { role: 'user', content: text }]);
  }}
/>
```

### 带语音输入

```tsx
<Sender
  speech={{
    speechRecognition: true,
    speechSynthesis: true,
  }}
  onSpeechEnd={(text) => {
    sendMessage(text);
  }}
/>
```

### 自定义按钮

```tsx
<Sender
  actions={[
    {
      key: 'file',
      icon: <PaperClipOutlined />,
      onClick: () => handleFileUpload(),
    },
    {
      key: 'send',
      icon: <SendOutlined />,
      type: 'send',
    },
  ]}
/>
```