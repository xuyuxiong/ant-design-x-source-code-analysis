# 组件总览

Ant Design X 提供了一系列专为 AI 对话场景设计的组件。

## 组件分类

### 核心对话组件

| 组件 | 描述 | 使用场景 |
|------|------|---------|
| [Bubble](/components/bubble) | 气泡对话组件 | 展示单条 AI/用户消息 |
| [Conversations](/components/conversations) | 对话列表容器 | 包裹和管理多条对话 |
| [Sender](/components/sender) | 输入框组件 | 用户输入和发送消息 |
| [XProvider](/components/x-provider) | 全局配置提供者 | 提供全局上下文配置 |

### 智能交互组件

| 组件 | 描述 | 使用场景 |
|------|------|---------|
| [Prompts](/components/prompts) | 提示词组件 | 提供快捷问题建议 |
| [Suggestion](/components/suggestion) | 建议组件 | 智能推荐后续操作 |
| [ThoughtChain](/components/thought-chain) | 思考链组件 | 展示 AI 多步思考过程 |
| [Think](/components/think) | 思考组件 | 展示单步思考状态 |

### 页面与引导组件

| 组件 | 描述 | 使用场景 |
|------|------|---------|
| [Welcome](/components/welcome) | 欢迎页组件 | 对话初始引导页 |
| [Introduce](/components/introduce) | 介绍组件 | 功能介绍展示 |

### 内容与展示组件

| 组件 | 描述 | 使用场景 |
|------|------|---------|
| [Attachments](/components/attachments) | 附件组件 | 文件上传和展示 |
| [CodeHighlighter](/components/code-highlighter) | 代码高亮组件 | 代码块语法高亮 |
| [FileCard](/components/file-card) | 文件卡片组件 | 文件信息展示 |
| [Folder](/components/folder) | 文件夹组件 | 文件目录展示 |
| [Sources](/components/sources) | 来源组件 | 展示信息来源 |
| [Mermaid](/components/mermaid) | 流程图组件 | 渲染 Mermaid 流程图 |

### 辅助组件

| 组件 | 描述 | 使用场景 |
|------|------|---------|
| [Notification](/components/notification) | 通知组件 | 系统通知提示 |
| [Actions](/components/actions) | 操作组组件 | 消息操作按钮组 |

## 组件关系图

```
┌──────────────────────────────────────────────────────────────┐
│                         XProvider                            │
│                    (全局配置上下文)                           │
└──────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              │               │               │
              ↓               ↓               ↓
    ┌─────────────────┐      │     ┌─────────────────┐
    │   Conversations │      │     │     Welcome     │
    │  (对话列表容器)  │      │     │   (欢迎页组件)  │
    └────────┬────────┘      │     └─────────────────┘
             │               │
    ┌────────┴────────┐      │
    │   ┌─────┐       │      │
    │   │Bubble│      │◄─────┘
    │   └──┬──┘       │
    │      │          │
    │   ┌──┴──┐       │
    │   │Actions     │
    │   └─────┘      │
    └───────┬─────────┘
            │
            │      ┌──────────────┐
            │      │    Sender    │
            │      │   (输入框)   │
            │      └──────┬───────┘
            │             │
            └─────────────┼──────────────┐
                          │              │
                ┌─────────┴──────┐    ┌──┴──────────┐
                │    Prompts     │    │ Suggestion  │
                │   (提示词)     │    │  (建议)     │
                └────────────────┘    └─────────────┘
```

## 快速选择指南

### 基础对话场景

```tsx
import { Bubble, Sender, Conversations } from '@ant-design/x';

const Chat = () => (
  <>
    <Conversations>
      <Bubble role="ai" content="你好！有什么可以帮你的？" />
      <Bubble role="user" content="我想了解..." />
    </Conversations>
    <Sender onSubmit={(msg) => send(msg)} />
  </>
);
```

### 带引导的场景

```tsx
import { Welcome, Prompts } from '@ant-design/x';

const EmptyState = () => (
  <Welcome
    variant="borderless"
    icon="👋"
    description="你好，我是你的 AI 助手"
  >
    <Prompts
      options={[
        { label: '如何开始？', value: 'how-to-start' },
        { label: '功能介绍', value: 'intro' },
      ]}
    />
  </Welcome>
);
```

### 复杂任务展示

```tsx
import { ThoughtChain, Bubble } from '@ant-design/x';

const ComplexTask = () => (
  <>
    <ThoughtChain
      items={[
        { title: '分析问题', status: 'finish', description: '理解用户需求' },
        { title: '检索知识', status: 'finish', description: '查找相关知识' },
        { title: '生成回答', status: 'processing', description: '正在回答...' },
      ]}
    />
    <Bubble content="根据分析，建议..." />
  </>
);
```

### 文件上传场景

```tsx
import { Attachments, Sender } from '@ant-design/x';

const FileChat = () => (
  <>
    <Attachments
      beforeUpload={(file) => {
        // 文件处理逻辑
      }}
    />
    <Sender placeholder="发送消息或上传文件..." />
  </>
);
```

## 组件组合模式

### 标准对话界面

```
┌─────────────────────────────┐
│   Header (可选)            │
├─────────────────────────────┤
│                             │
│   Conversations             │
│   ├─ Bubble (AI)           │
│   ├─ Bubble (User)         │
│   ├─ Bubble (AI)           │
│   └─ ...                   │
│                             │
├─────────────────────────────┤
│   Prompts/Suggestion        │
├─────────────────────────────┤
│   Attachments (可选)        │
├─────────────────────────────┤
│   Sender                    │
└─────────────────────────────┘
```

### 带思考过程

```
┌─────────────────────────────┐
│   ThoughtChain              │
│   ├─ Step 1 (完成)         │
│   ├─ Step 2 (完成)         │
│   └─ Step 3 (进行中)       │
├─────────────────────────────┤
│   Bubble (结果)             │
└─────────────────────────────┘
```

### 欢迎引导

```
┌─────────────────────────────┐
│                             │
│      Welcome                │
│      Icon + Title           │
│      Description            │
│                             │
│   Prompts (快捷问题)        │
│                             │
└─────────────────────────────┘
```

## 通用 Props

大多数组件支持以下通用属性：

```tsx
interface CommonProps {
  // 样式相关
  className?: string;
  style?: React.CSSProperties;
  
  // 自定义类名 (CSS-in-JS)
  classNames?: Record<string, string>;
  
  // 自定义样式 (CSS-in-JS)
  styles?: Record<string, React.CSSProperties>;
  
  // 子元素
  children?: React.ReactNode;
}
```

## 主题定制

所有组件支持主题定制：

```tsx
import { ConfigProvider } from 'antd';

<ConfigProvider
  theme={{
    components: {
      Bubble: { /* Bubble 定制 */ },
      Sender: { /* Sender 定制 */ },
    },
  }}
>
  {/* 应用内容 */}
</ConfigProvider>
```

## 快速上手

```bash
# 安装
pnpm add antd @ant-design/x

# 使用
import { Bubble, Sender } from '@ant-design/x';

function App() {
  return (
    <Bubble content="Hello AI!" />
  );
}
```

## 下一步

- [Bubble 气泡对话](/components/bubble) - 基础对话组件
- [Sender 输入框](/components/sender) - 用户输入组件
- [Conversations 对话列表](/components/conversations) - 对话容器
- [Prompts 提示词](/components/prompts) - 快捷问题
- [ThoughtChain 思考链](/components/thought-chain) - 思考过程展示