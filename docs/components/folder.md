# Folder 文件夹

Folder 组件用于展示文件目录结构。

## 基础用法

```tsx
import { Folder } from '@ant-design/x';

<Folder
  name="项目文档"
  items={[
    { name: 'README.md', type: 'file' },
    { name: 'src', type: 'folder' },
    { name: 'package.json', type: 'file' },
  ]}
/>
```