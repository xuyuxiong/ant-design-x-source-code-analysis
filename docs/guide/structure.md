# 源码结构

本章节详细解析 Ant Design X 的源码目录结构。

## 根目录结构

```
ant-design-x/
├── .github/              # GitHub 配置（Actions、Issues 模板等）
├── .husky/               # Git hooks 配置
├── packages/             # Monorepo 包目录
│   ├── x/               # 主包 - 核心组件库
│   ├── x-card/          # 卡片组件包
│   ├── x-markdown/      # Markdown 渲染组件包
│   ├── x-sdk/           # SDK 包
│   └── x-skill/         # 技能组件包
├── scripts/              # 构建脚本
├── biome.json            # Biome 代码规范配置
├── package.json          # 根包配置
├── tsconfig.json         # TypeScript 配置
└── tsconfig.base.json    # TypeScript 基础配置
```

## packages/x 核心包结构

```
packages/x/
├── .dumi/                # dumi 文档配置
│   ├── rehypeAntd.ts     # HTML 处理插件
│   ├── remarkAntd.ts     # Markdown 处理插件
│   └── pages/            # 自定义页面
├── .dumirc.ts            # dumi 配置文件
├── .fatherrc.ts          # Father 构建配置
├── components/           # 组件源码目录
│   ├── bubble/           # 气泡对话组件
│   ├── conversations/    # 对话列表组件
│   ├── sender/           # 输入框组件
│   ├── prompts/          # 提示词组件
│   ├── suggestion/       # 建议组件
│   ├── think/            # 思考组件
│   ├── thought-chain/    # 思考链组件
│   ├── welcome/          # 欢迎页组件
│   ├── x-provider/       # 全局配置组件
│   ├── attachments/      # 附件组件
│   ├── code-highlighter/ # 代码高亮组件
│   ├── file-card/        # 文件卡片组件
│   ├── folder/           # 文件夹组件
│   ├── notification/     # 通知组件
│   ├── sources/          # 来源组件
│   ├── actions/          # 操作组组件
│   ├── introduce/        # 介绍组件
│   ├── mermaid/          # 流程图组件
│   ├── locale/           # 国际化
│   ├── _util/            # 内部工具函数
│   └── index.ts          # 组件导出入口
├── docs/                 # 文档目录
├── tests/                # 测试文件
├── typings/              # 类型定义
├── scripts/              # 构建脚本
├── package.json          # 包配置
└── tsconfig.json         # TypeScript 配置
```

## 组件目录结构

每个组件遵循统一的目录结构：

```
components/bubble/
├── index.tsx             # 组件入口文件
├── index.en-US.md        # 英文文档
├── index.zh-CN.md        # 中文文档
├── demo/                 # 演示示例
│   ├── basic.tsx         # 基础示例
│   ├── advanced.tsx      # 高级示例
│   └── ...
├── style/                # 样式文件
│   └── index.tsx
└── __tests__/            # 测试文件 (如有)
```

## 核心模块说明

### 1. Bubble 气泡对话

位于 `components/bubble/`，是对话界面的核心组件。

**关键文件：**
- `index.tsx` - 组件主逻辑
- `ListItem.tsx` - 列表项渲染
- `useTypedEffect.ts` - 打字机效果
- `actions.tsx` - 气泡操作按钮

### 2. Conversations 对话列表

位于 `components/conversations/`，用于管理对话列表状态。

**关键文件：**
- `index.tsx` - 组件主逻辑
- `hooks/useListData.ts` - 列表数据管理

### 3. Sender 输入框

位于 `components/sender/`，提供用户输入功能。

**关键文件：**
- `index.tsx` - 组件主逻辑
- `TextArea.tsx` - 文本输入区域
- `ActionButton.tsx` - 操作按钮
- `SpeechButton.tsx` - 语音输入按钮

### 4. Prompts 提示词

位于 `components/prompts/`，提供快捷问题推荐。

### 5. ThoughtChain 思考链

位于 `components/thought-chain/`，展示 AI 思考过程。

### 6. XProvider 全局配置

位于 `components/x-provider/`，提供全局上下文配置。

## 构建配置

### .fatherrc.ts - Father 构建配置

```typescript
export default {
  cjs: { output: 'lib' },
  esm: { output: 'es' },
  umd: { output: 'dist' },
};
```

### tsconfig.json - TypeScript 配置

配置了路径别名、严格模式、目标环境等。

## 样式系统

Ant Design X 使用 CSS-in-JS 方案，与 Ant Design 5.0+ 保持一致：

- 基于 `@ant-design/cssinjs`
- 支持动态主题
- 支持按需加载
- 支持 Hash 样式避免冲突

## 国际化

位于 `components/locale/`，支持多语言配置：

- `zh_CN.ts` - 简体中文
- `en_US.ts` - 英文

## 下一步

- 阅读 [调试指南](/guide/debugging) 了解本地开发
- 查看 [架构总览](/architecture/overview) 了解整体设计