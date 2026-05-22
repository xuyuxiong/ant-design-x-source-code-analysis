# 自定义组件

本章节介绍如何基于 Ant Design X 创建自定义组件。

## 组件封装

### 1. 基础封装

```tsx
import { Bubble } from '@ant-design/x';
import { Avatar } from 'antd';

interface ChatBubbleProps {
  role: 'ai' | 'user';
  content: string;
  avatar?: string;
  timestamp?: number;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  role,
  content,
  avatar,
  timestamp,
}) => (
  <Bubble
    role={role}
    avatar={avatar && <Avatar src={avatar} />}
    content={content}
    footer={timestamp && <Text type="secondary">{formatTime(timestamp)}</Text>}
  />
);
```

### 2. 带样式的封装

```tsx
import { Bubble } from '@ant-design/x';

const CustomBubble: React.FC = () => (
  <Bubble
    classNames={{
      content: 'custom-bubble-content',
    }}
    styles={{
      content: {
        backgroundColor: '#e6f4ff',
        border: '1px solid #91caff',
      },
    }}
  />
);
```

## 组合组件

### 对话消息组件

```tsx
interface MessageItemProps {
  message: Message;
  onCopy: (content: string) => void;
  onLike: (id: string) => void;
}

const MessageItem: React.FC<MessageItemProps> = ({
  message,
  onCopy,
  onLike,
}) => (
  <Bubble
    role={message.role}
    avatar={<Avatar src={message.avatar} />}
    content={message.content}
    actions={
      message.role === 'ai' && (
        <>
          <Button
            icon={<CopyOutlined />}
            onClick={() => onCopy(message.content)}
          />
          <Button
            icon={<LikeOutlined />}
            onClick={() => onLike(message.id)}
          />
        </>
      )
    }
    footer={
      <Text type="secondary">
        {dayjs(message.timestamp).format('HH:mm')}
      </Text>
    }
  />
);
```

## 自定义 Hook

### 使用消息 Hook

```tsx
import { useState } from 'react';

function useMessages() {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message]);
  };

  const removeMessage = (id: string) => {
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  return { messages, addMessage, removeMessage };
}
```

### 使用流式 Hook

```tsx
function useStreaming(initialContent = '') {
  const [content, setContent] = useState(initialContent);
  const [streaming, setStreaming] = useState(false);

  const startStreaming = async (stream: ReadableStream) => {
    setStreaming(true);
    const reader = stream.getReader();
    
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        setStreaming(false);
        break;
      }
      setContent(prev => prev + new TextDecoder().decode(value));
    }
  };

  return { content, streaming, startStreaming };
}
```

## 高级定制

### 自定义 Bubble 渲染

```tsx
const MarkdownBubble: React.FC = ({ content }) => (
  <Bubble
    contentRender={(content) => (
      <Markdown
        content={content as string}
        codeStyle="github"
      />
    )}
  />
);
```

### 自定义加载状态

```tsx
const CustomLoadingBubble: React.FC = () => (
  <Bubble
    loading
    loadingRender={() => (
      <div className="custom-loading">
        <div className="loading-dots">
          <span />
          <span />
          <span />
        </div>
        <span>正在思考中...</span>
      </div>
    )}
  />
);
```

## 完整示例

### 智能对话界面

```tsx
import { useState } from 'react';
import { Conversations, Bubble, Sender, Prompts } from '@ant-design/x';

const SmartChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (content: string) => {
    // 添加用户消息
    setMessages(prev => [...prev, { role: 'user', content }]);
    setLoading(true);

    try {
      // 调用 API
      const response = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({ message: content }),
      });
      
      // 流式响应处理
      const reader = response.body.getReader();
      let aiContent = '';
      
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: '',
        streaming: true,
      }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        aiContent += new TextDecoder().decode(value);
        setMessages(prev => 
          prev.map((msg, i) => 
            i === prev.length - 1 ? { ...msg, content: aiContent } : msg
          )
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <Conversations>
        {messages.map((msg, i) => (
          <Bubble
            key={i}
            role={msg.role}
            content={msg.content}
            streaming={msg.streaming}
          />
        ))}
        {loading && (
          <Bubble loading content="正在思考..." />
        )}
      </Conversations>
      
      {!messages.length && (
        <Prompts
          options={[
            { label: '开始对话', value: 'start' },
            { label: '了解功能', value: 'intro' },
          ]}
          onOptionClick={({ value }) => handleSubmit(value)}
        />
      )}
      
      <Sender onSubmit={handleSubmit} loading={loading} />
    </div>
  );
};
```

## 最佳实践

1. **保持组件职责单一** - 每个组件只做一件事
2. **合理使用组合** - 通过组合实现复杂功能
3. **类型安全** - 提供完整的 TypeScript 类型
4. **性能优化** - 避免不必要的重新渲染
5. **可访问性** - 确保组件可访问