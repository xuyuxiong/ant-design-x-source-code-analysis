# FileCard 文件卡片

FileCard 组件用于展示文件信息卡片。

## 基础用法

```tsx
import { FileCard } from '@ant-design/x';

<FileCard
  name="example.pdf"
  size={1024 * 1024}
  onPreview={() => handlePreview()}
  onRemove={() => handleRemove()}
/>
```

## Props 详解

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| name | `string` | - | 文件名 |
| size | `number` | - | 文件大小 (字节) |
| icon | `ReactNode` | - | 自定义图标 |
| status | `'uploading' \| 'done' \| 'error'` | - | 状态 |
| progress | `number` | - | 上传进度 |
| onPreview | `() => void` | - | 预览回调 |
| onRemove | `() => void` | - | 删除回调 |