# Attachments 附件

Attachments 组件用于文件上传和附件展示。

## 源码目录结构

```
components/attachments/
├── index.tsx               # 主组件
├── Attachment.tsx          # 附件项
├── AttachmentList.tsx      # 附件列表
├── interface.ts            # 类型定义
├── style/                  # 样式
└── demo/                   # 演示示例
```

## 基础用法

```tsx
import { Attachments } from '@ant-design/x';

<Attachments
  beforeUpload={(file) => {
    // 上传前处理
    return false; // 返回 false 阻止自动上传
  }}
  onChange={({ fileList }) => {
    console.log('文件列表变化:', fileList);
  }}
/>
```

## Props 详解

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| beforeUpload | `(file) => boolean\|Promise` | - | 上传前钩子 |
| onChange | `(info) => void` | - | 文件变化回调 |
| onRemove | `(file) => void` | - | 删除回调 |
| maxCount | `number` | - | 最大文件数 |
| accept | `string` | - | 接受的文件类型 |
| multiple | `boolean` | `false` | 支持多选 |

## 使用场景

### 限制文件类型

```tsx
<Attachments
  accept=".pdf,.doc,.docx,.txt"
  beforeUpload={(file) => {
    const isPDF = file.type === 'application/pdf';
    if (!isPDF) {
      message.error('只能上传 PDF 文件');
    }
    return isPDF;
  }}
/>
```

### 限制文件大小

```tsx
<Attachments
  beforeUpload={(file) => {
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error('文件大小不能超过 10MB');
    }
    return isLt10M;
  }}
/>
```