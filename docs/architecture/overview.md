# 整体架构

本章节介绍 Ant Design X 的整体架构设计。

## 架构概览

Ant Design X 采用现代化的前端架构设计，具有以下特点：

```
┌─────────────────────────────────────────────────────────────┐
│                     应用层 (Application)                      │
│                 基于 Ant Design X 构建的应用                  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    组件层 (Components)                        │
│  ┌─────────┐ ┌──────────┐ ┌────────┐ ┌──────────┐ ┌───────┐ │
│  │ Bubble  │ │Convers.  │ │ Sender │ │ Prompts  │ │ ...   │ │
│  └─────────┘ └──────────┘ └────────┘ └──────────┘ └───────┘ │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    基础层 (Foundation)                        │
│               Ant Design 5.0+ (CSS-in-JS)                    │
│                    React 18+                                │
│                    TypeScript                               │
└─────────────────────────────────────────────────────────────┘
```

## 技术栈

```
┌─────────────────────────────────────────────────────────┐
│                    Ant Design X                          │
├─────────────────────────────────────────────────────────┤
│  UI Components                                          │
│  ──────────────────────────────────────────────────     │
│  • Bubble, Conversations, Sender, Prompts, etc.         │
├─────────────────────────────────────────────────────────┤
│  Packages (Monorepo)                                    │
│  ──────────────────────────────────────────────────     │
│  • @ant-design/x        - 核心组件库                    │
│  • @ant-design/x-card   - 卡片组件                     │
│  • @ant-design/x-markdown - Markdown 渲染              │
│  • @ant-design/x-sdk    - SDK 工具包                   │
│  • @ant-design/x-skill  - 技能组件                     │
├─────────────────────────────────────────────────────────┤
│  Styling                                                │
│  ──────────────────────────────────────────────────     │
│  • @ant-design/cssinjs  - CSS-in-JS 方案               │
│  • design tokens        - 设计令牌系统                  │
├─────────────────────────────────────────────────────────┤
│  Core Dependencies                                      │
│  ──────────────────────────────────────────────────     │
│  • React 18+           - UI 框架                        │
│  • TypeScript          - 类型系统                      │
│  • Ant Design 5.0+     - 基础组件库                     │
└─────────────────────────────────────────────────────────┘
```

## 设计目标

### 1. AI 原生

- 专为 AI 场景设计的组件
- 支持流式输出、打字机效果
- 支持思考过程展示
- 支持多种内容类型（文本、代码、Markdown）

### 2. 可组合性

- 组件可以独立使用
- 组件之间可以灵活组合
- 提供高级组合组件（如 Conversations 容器）

### 3. 可定制性

- 支持主题定制
- 支持样式覆盖
- 支持行为配置
- 支持国际化

### 4. 高性能

- 按需加载
- 虚拟滚动支持（大列表场景）
- 优化的渲染性能

## 包结构

Ant Design X 采用 Monorepo 架构，包含以下包：

```
packages/
├── x/          # 主包 - 所有核心组件
│   └── components/
│       ├── bubble/           # 气泡对话
│       ├── conversations/    # 对话列表
│       ├── sender/           # 输入框
│       ├── prompts/          # 提示词
│       ├── suggestion/       # 建议
│       ├── think/            # 思考
│       ├── thought-chain/    # 思考链
│       ├── welcome/          # 欢迎页
│       ├── x-provider/       # 全局配置
│       ├── attachments/      # 附件
│       ├── code-highlighter/ # 代码高亮
│       ├── file-card/        # 文件卡片
│       ├── folder/           # 文件夹
│       ├── notification/     # 通知
│       ├── sources/          # 来源
│       ├── actions/          # 操作组
│       ├── introduce/        # 介绍
│       ├── mermaid/          # 流程图
│       └── locale/           # 国际化
│
├── x-card/     # 卡片组件包
├── x-markdown/ # Markdown 渲染包
├── x-sdk/      # SDK 工具包
└── x-skill/    # 技能组件包
```

## 构建系统

### 依赖关系

```
@ant-design/x
├── @ant-design/cssinjs
├── @ant-design/icons
├── antd
├── classnames
├── react
└── typescript (dev)
```

### 构建工具链

```
源代码 (TypeScript)
    ↓
Father (构建工具)
    ↓
┌────────────────────────────────────┐
│  es/    - ES Modules (现代打包器)  │
│  lib/   - CommonJS (Node/Bundler) │
│  dist/  - UMD (CDN 直接引用)      │
└────────────────────────────────────┘
```

### dumi 文档系统

```
.dumirc.ts (配置)
    ↓
┌────────────────────────────────────┐
│  dumi                              │
│  ├─ 路由生成                       │
│  ├─ 组件演示解析                   │
│  ├─ Markdown 处理                  │
│  ├─ 代码高亮                       │
│  └─ 静态站点生成                   │
└────────────────────────────────────┘
    ↓
_site/ (生产构建)
```

## 样式架构

Ant Design X 使用 CSS-in-JS 方案：

```tsx
// 使用 @ant-design/cssinjs
import { useStyleRegister } from '@ant-design/cssinjs';

// 样式定义
const useStyle = (token) => {
  return useStyleRegister({ theme, token, hashId }, () => [
    {
      '.ant-bubble': {
        display: 'flex',
        // ...
      },
    },
  ]);
};
```

### Design Token 系统

与 Ant Design 5.0+ 共享 Design Token：

```
Design Token
├── 颜色 (colorPrimary, colorText, ...)
├── 字体 (fontSize, lineHeight, ...)
├── 间距 (margin, padding, ...)
├── 圆角 (borderRadius)
└── 阴影 (boxShadow)
```

## 数据流

### 组件间通信

```
┌─────────────┐
│  XProvider  │ ← 全局配置上下文
└──────┬──────┘
       │
       ↓
┌─────────────┐
│ Conversations│ ← 对话列表容器
└──────┬──────┘
       │
       ↓
┌─────────────┐
│   Bubble    │ ← 气泡对话组件
└─────────────┘
```

### 状态管理

- 组件内部状态：使用 `React.useState` / `React.useReducer`
- 跨组件状态：使用 `React.useContext`（XProvider）
- 外部状态：可由应用层传入（受控模式）

## 目录约定

项目遵循以下目录约定：

```
components/
├── ComponentName/
│   ├── index.tsx      # 组件入口
│   ├── style/         # 样式目录
│   ├── demo/          # 演示示例
│   ├── __tests__/     # 测试文件
│   └── index.zh-CN.md # 文档
```

## 版本发布

```
源代码 ─→ 构建 ─→ 发布到 npm ─→ 语义化版本 (SemVer)
                              ├─ MAJOR (不兼容)
                              ├─ MINOR (向后兼容功能)
                              └─ PATCH (向后兼容修复)
```

## 测试策略

- **单元测试**: 使用 Jest 测试组件功能
- **快照测试**: 确保组件渲染一致性
- **E2E 测试**: 测试用户交互流程

## 下一步

- 阅读 [Monorepo 结构](/architecture/monorepo) 了解包管理
- 查看 [主题系统](/architecture/theme-system) 了解定制方法
- 学习 [设计原则](/architecture/design-principles) 了解设计理念