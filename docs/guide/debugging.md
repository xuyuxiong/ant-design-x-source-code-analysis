# 调试指南

本章节介绍如何在本地开发调试 Ant Design X。

## 环境准备

### 系统要求

- **Node.js**: 18.x 或更高版本
- **pnpm**: 8.x 或更高版本
- **macOS/Linux**: 推荐开发环境（Mako 构建支持）

### 安装依赖

```bash
# 克隆仓库
git clone https://github.com/ant-design/x.git
cd x

# 安装依赖
pnpm install

# 启用 Husky
pnpm prepare
```

## 启动开发服务器

### 启动文档站点

在 `packages/x` 目录下启动 dumi 开发服务器：

```bash
cd packages/x
pnpm start
```

访问 http://localhost:8000 查看文档和组件演示。

### 启动其他包

每个包都支持独立的开发模式：

```bash
# x-markdown
cd packages/x-markdown
pnpm start

# x-card
cd packages/x-card
pnpm start
```

## 调试技巧

### 1. 组件热更新

dumi 支持 React 热更新（Fast Refresh），修改组件代码后会自动刷新页面。

### 2. 使用 React DevTools

安装 [React Developer Tools](https://react.dev/learn/react-developer-tools) 浏览器插件，可以：

- 查看组件树结构
- 检查组件 Props 和 State
- 调试 Hooks

### 3. 源码调试

在浏览器开发者工具中：

1. 打开 Sources 面板
2. 找到 webpack 源码目录
3. 在组件代码中设置断点
4. 触发动作进行调试

### 4. 样式调试

Ant Design X 使用 CSS-in-JS，样式动态注入：

- 在 Elements 面板查看计算的样式
- 使用 `@ant-design/cssinjs` 的 devtools 插件（如需要）
- 在 style 目录下修改样式文件

## 构建测试

### 运行单元测试

```bash
cd packages/x
pnpm test
```

### 运行特定测试

```bash
# 运行单个组件测试
pnpm test -- bubble

# 运行覆盖测试
pnpm test --coverage
```

### 构建生产版本

```bash
cd packages/x
pnpm build
```

构建产物将输出到：
- `es/` - ES Modules
- `lib/` - CommonJS
- `dist/` - UMD

## 常见问题

### 1. 端口被占用

如果 8000 端口被占用，dumi 会自动使用其他端口，或者可以指定：

```bash
PORT=8001 pnpm start
```

### 2. 依赖安装失败

```bash
# 清理缓存
pnpm store prune

# 重新安装
rm -rf node_modules
pnpm install
```

### 3. TypeScript 类型错误

```bash
# 运行类型检查
pnpm run type-check
```

### 4. 样式不更新

CSS-in-JS 可能有缓存，尝试：

```bash
# 清理 dumi 缓存
rm -rf node_modules/.dumi
rm -rf node_modules/.cache

# 重启开发服务器
```

## 开发新组件

### 1. 创建组件目录

```bash
mkdir components/new-component
```

### 2. 创建基础文件

```
components/new-component/
├── index.tsx         # 组件主文件
├── style/index.tsx   # 样式文件
├── demo/             # 演示目录
│   └── basic.tsx
├── index.zh-CN.md    # 中文文档
└── index.en-US.md    # 英文文档
```

### 3. 注册组件

在 `components/index.ts` 中导出新组件。

### 4. 编写文档

按照 dumi 规范编写组件文档和演示。

## 代码规范

### 使用 Biome 检查代码

```bash
pnpm run lint
```

### 自动格式化

```bash
pnpm run format
```

### Pre-commit 检查

Husky 会在提交前自动运行：

- 代码格式化
- ESLint 检查
- TypeScript 类型检查
- 单元测试

## 提交代码

### 1. 创建分支

```bash
git checkout -b feature/your-feature
```

### 2. 提交变更

```bash
git add .
git commit -m "feat: add new feature"
```

### 3. 推送并创建 PR

```bash
git push origin feature/your-feature
```

然后到 GitHub 创建 Pull Request。

### Commit 规范

遵循 Conventional Commits：

- `feat:` 新功能
- `fix:` Bug 修复
- `docs:` 文档更新
- `style:` 代码格式调整
- `refactor:` 重构
- `test:` 测试相关
- `chore:` 构建/工具相关

## 调试工具

### 推荐 VS Code 扩展

- **ESLint** - 代码检查
- **Prettier** - 代码格式化
- **TypeScript** - 类型支持
- **CSS Modules** - 样式支持
- **GitLens** - Git 增强

### VS Code 设置

推荐配置 `.vscode/settings.json`：

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## 性能优化

### 1. 关闭 Mako（如不需要）

Mako 是高性能构建工具，但在某些场景可能不需要：

```bash
# 在开发时禁用 Mako
MAKO=false pnpm start
```

### 2. 减少文档页面数量

过多的 demo 会影响开发服务器性能，可以：

- 按需加载 demo
- 使用 `exclude` 排除不必要的页面

### 3. 使用更快的机器

Mako 在 macOS/Linux 上性能更好，Windows 用户可考虑 WSL2。

## 资源链接

- [dumi 文档](https://d.umijs.org/)
- [Father 文档](https://github.com/umijs/father)
- [Biome 文档](https://biomejs.dev/)
- [React 调试指南](https://react.dev/learn/react-developer-tools)