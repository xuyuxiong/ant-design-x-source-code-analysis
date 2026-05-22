# CodeHighlighter 代码高亮

CodeHighlighter 组件用于代码语法高亮显示。

## 基础用法

```tsx
import { CodeHighlighter } from '@ant-design/x';

<CodeHighlighter
  language="typescript"
  code={`
    function hello() {
      console.log('Hello, World!');
    }
  `}
/>
```

## Props 详解

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| language | `string` | `text` | 语言类型 |
| code | `string` | - | 代码内容 |
| theme | `string` | `default` | 主题 |
| copyable | `boolean` | `true` | 可复制 |
| collapsed | `boolean` | `false` | 折叠状态 |

## 使用场景

### 多语言支持

```tsx
<CodeHighlighter language="javascript" code={jsCode} />
<CodeHighlighter language="python" code={pyCode} />
<CodeHighlighter language="java" code={javaCode} />
```

### 带复制功能

```tsx
<CodeHighlighter
  language="typescript"
  code={code}
  copyable={{
    text: code,
    onCopy: () => message.success('复制成功'),
  }}
/>
```