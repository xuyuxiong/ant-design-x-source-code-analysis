# 快速开始

本指南将帮助你快速上手 Ant Design X。

## 安装

### 使用 npm

```bash
npm install antd @ant-design/x
```

### 使用 yarn

```bash
yarn add antd @ant-design/x
```

### 使用 pnpm

```bash
pnpm add antd @ant-design/x
```

## 基础使用

### 最小化示例

```tsx
import React from 'react';
import { Bubble } from '@ant-design/x';

const App: React.FC = () => (
  <Bubble content="Hello, AI World!" />
);

export default App;
```

### 完整对话示例

```tsx
import React from 'react';
import { Bubble, Sender, Conversations } from '@ant-design/x';

const App: React.FC = () => {
  const [messages, setMessages] = React.useState([
    {
      id: '1',
      content: '你好，有什么可以帮助你的？',
      role: 'ai',
    },
  ]);

  const handleSend = (content: string) => {
    setMessages([...messages, { id: Date.now().toString(), content, role: 'user' }]);
  };

  return (
    <div>
      <Conversations>
        {messages.map(msg => (
          <Bubble key={msg.id} content={msg.content} role={msg.role} />
        ))}
      </Conversations>
      <Sender onSubmit={handleSend} />
    </div>
  );
};

export default App;
```

## 配置 XProvider

XProvider 是全局配置提供者，可以配置主题、语言等全局设置。

```tsx
import React from 'react';
import { ConfigProvider } from 'antd';
import { XProvider } from '@ant-design/x';
import zhCN from 'antd/locale/zh_CN';

const App: React.FC = ({ children }) => (
  <ConfigProvider locale={zhCN}>
    <XProvider>
      {children}
    </XProvider>
  </ConfigProvider>
);

export default App;
```

## 核心组件一览

| 组件 | 描述 | 使用场景 |
|------|------|---------|
| Bubble | 气泡对话组件 | 展示单条对话消息 |
| Conversations | 对话列表容器 | 包裹多条对话 |
| Sender | 输入框组件 | 用户输入区域 |
| Prompts | 提示词组件 | 快捷问题建议 |
| Suggestion | 建议组件 | 智能推荐内容 |
| ThoughtChain | 思考链组件 | 展示 AI 思考过程 |
| Welcome | 欢迎页组件 | 初始引导页面 |

## 下一步

- 阅读 [源码结构](/guide/structure) 了解项目组织
- 查看 [组件总览](/components/overview) 了解所有组件
- 学习 [最佳实践](/advanced/best-practices) 提升开发效率