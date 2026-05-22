# Monorepo 结构

Ant Design X 采用 Monorepo 架构进行包管理。

## 什么是 Monorepo

Monorepo 是一种将多个包（packages）存放在同一个代码仓库中的项目管理策略。

```
ant-design-x/           # 单一仓库
├── packages/
│   ├── x/             # 主包
│   ├── x-card/        # 卡片包
│   ├── x-markdown/    # Markdown 包
│   ├── x-sdk/         # SDK 包
│   └── x-skill/       # 技能包
├── package.json        # 根配置
├── pnpm-workspace.yaml # 工作区配置
└── ...
```

## Monorepo 优势

### 1. 代码共享

- 共享工具函数
- 共享类型定义
- 共享配置（ESLint、TypeScript、等）

### 2. 依赖管理

- 统一的依赖版本
- 减少重复安装
- 更容易管理内部依赖

### 3. 协同开发

- 跨包修改自动识别
- 统一版本号管理
- 单一 PR 包含多包变更

### 4. 原子化提交

- 跨包修改可原子提交
- 版本更新保持一致性

## 目录结构详解

```
ant-design-x/
├── package.json              # 根配置
├── pnpm-workspace.yaml       # 工作区定义
├── tsconfig.base.json        # 基础 TS 配置
│
├── packages/
│   ├── x/
│   │   ├── package.json      # 包配置
│   │   ├── src/              # 源码
│   │   └── dist/             # 构建产物
│   │
│   ├── x-card/
│   │   ├── package.json      # @ant-design/x-card
│   │   └── ...
│   │
│   ├── x-markdown/
│   │   ├── package.json      # @ant-design/x-markdown
│   │   └── ...
│   │
│   ├── x-sdk/
│   │   ├── package.json      # @ant-design/x-sdk
│   │   └── ...
│   │
│   └── x-skill/
│       ├── package.json      # @ant-design/x-skill
│       └── ...
│
└── scripts/                   # 构建脚本
```

## 包依赖关系

```
┌─────────────────┐
│   x-card        │
│   (CSS 组件)    │
└────────┬────────┘
         │
         │ depends on
         ↓
┌─────────────────┐     ┌─────────────────┐
│   x-markdown    │────▶│   x (主包)      │
│   (Markdown 渲染)│     │ (核心组件)      │
└────────┬────────┘     └────────┬────────┘
         │                      │
         │                      │
         └──────────┬───────────┘
                    │
                    │ depends on
                    ↓
           ┌─────────────────┐
           │   x-sdk         │
           │ (工具函数)      │
           └─────────────────┘
```

### 内部依赖声明

```json
// packages/x-card/package.json
{
  "name": "@ant-design/x-card",
  "dependencies": {
    "@ant-design/x": "^1.0.0",
    "@ant-design/cssinjs": "^1.x",
    "antd": "^5.x"
  }
}
```

## pnpm Workspace

使用 pnpm 管理多包工作区：

```yaml
# pnpm-workspace.yaml
packages:
  - 'packages/*'
```

### 安装依赖

```bash
# 安装所有包的依赖
pnpm install
```

### 运行脚本

```bash
# 运行所有包的脚本
pnpm -r run build

# 仅运行指定包的脚本
pnpm --filter @ant-design/x run build
```

## 版本管理

### 同步版本

所有包版本保持一致：

```json
// packages/x/package.json
{
  "name": "@ant-design/x",
  "version": "1.0.0"
}

// packages/x-card/package.json
{
  "name": "@ant-design/x-card",
  "version": "1.0.0"
}
```

### 变更日志

每个包维护自己的变更日志：

```
CHANGELOG.en-US.md
CHANGELOG.zh-CN.md
```

## 构建流程

### 1. 并行构建

```bash
# 并行构建所有包
pnpm -r run build
```

### 2. 构建顺序

如果存在依赖关系，需要顺序构建：

```bash
# 先构建基础包
pnpm --filter @ant-design/x-sdk run build
pnpm --filter @ant-design/x run build
pnpm --filter @ant-design/x-card run build
```

## 发布流程

### 1. 发布到 npm

```bash
# 进入包目录
cd packages/x

# 发布
npm publish
```

### 2. 批量发布

```bash
# 使用 changesets（推荐）
pnpm changeset version
pnpm changeset publish
```

## 代码规范统一

### 根配置

```json
// biome.json (根目录)
{
  "formatter": {
    "indentWidth": 2,
    "lineWidth": 100
  },
  "linter": {
    "enabled": true
  }
}
```

### 子包继承

子包自动继承根配置，保持代码风格一致。

## 测试策略

### 独立测试

每个包都有自己的测试套件：

```bash
# 测试单个包
pnpm --filter @ant-design/x test

# 测试所有包
pnpm -r test
```

### 联合测试

对于跨包功能，在根目录运行集成测试。

## 开发建议

### 1. 添加新包

```bash
mkdir packages/new-package
cd packages/new-package

# 创建 package.json
cat > package.json << EOF
{
  "name": "@ant-design/new-package",
  "version": "1.0.0",
  "main": "dist/index.js",
  "module": "es/index.js",
  "types": "es/index.d.ts"
}
EOF
```

### 2. 内部依赖

```json
{
  "dependencies": {
    "@ant-design/x": "workspace:*"
  }
}
```

### 3. 共享脚本

将通用脚本放在根目录 `scripts/`：

```
scripts/
├── build.js
├── test.js
└── release.js
```

## 优缺点总结

### 优点

- ✅ 代码共享方便
- ✅ 依赖管理统一
- ✅ 版本发布协调
- ✅ 跨包重构容易

### 缺点

- ⚠️ 仓库体积大
- ⚠️ CI 构建时间可能增加
- ⚠️ 工具链复杂度提高

## 最佳实践

1. **保持包边界清晰** - 每个包职责单一
2. **避免循环依赖** - 包之间不可形成依赖环
3. **使用 workspace 协议** - `workspace:*` 管理内部依赖
4. **统一版本号** - 所有包版本保持同步
5. **独立发布测试** - 每个包可独立发布和测试

## 相关资源

- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Changesets](https://github.com/changesets/changesets)
- [Turborepo](https://turbo.build/repo)