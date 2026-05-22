# Ant Design X 源码深度解析

> 面向 AI 应用的 UI 组件库源码学习指南

[![Status](https://img.shields.io/badge/status-complete-brightgreen)](https://github.com/xuyuxiong/ant-design-x-source-code-analysis)
[![Ant Design X](https://img.shields.io/badge/Ant%20Design%20X-1.x-1677ff)](https://x.ant.design)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Chapters](https://img.shields.io/badge/chapters-31-orange)](https://xuyuxiong.github.io/ant-design-x-source-code-analysis/)

---

## 📖 项目简介

本项目是一本完整的 Ant Design X 源码学习指南，共 **31 章**，深入解析对话组件、思考链、提示词、主题系统等核心机制。

相比其他教程，本项目的特点：
- 🔍 **源码级深度** — 逐行分析核心源码，不仅讲"是什么"，更讲"为什么"
- 📊 **架构图丰富** — 每章配备组件树图、状态流程图、模块关系图
- 🎨 **Ant Design X 1.x** — 覆盖 Bubble、Conversations、Sender、Prompts 等 AI 专用组件
- 🧪 **示例完整** — 每章包含可运行示例、最佳实践、常见问题
- 📱 **暗色模式** — VitePress 驱动，支持亮色/暗色切换

👉 **在线阅读**：[https://xuyuxiong.github.io/ant-design-x-source-code-analysis/](https://xuyuxiong.github.io/ant-design-x-source-code-analysis/)

---

## ✅ 完成情况

| 部分 | 章节数 | 状态 |
|------|--------|------|
| 📘 指南篇 | 4/4 | ✅ 已完成 |
| 📗 架构篇 | 4/4 | ✅ 已完成 |
| 🧩 组件篇 | 20/20 | ✅ 已完成 |
| 💎 进阶篇 | 3/3 | ✅ 已完成 |
| **总计** | **31/31** | **✅ 全部完成** |

---

## 📚 内容目录

### 📘 指南篇 — 入门准备
| # | 章节 | 关键词 |
|---|------|--------|
| 1 | 项目概览 | 技术栈、核心特性 |
| 2 | 快速开始 | 安装、基础使用 |
| 3 | 源码结构 | Monorepo 布局、包组织 |
| 4 | 调试指南 | 环境搭建、调试技巧 |

### 📗 架构篇 — 整体架构
| # | 章节 | 关键词 |
|---|------|--------|
| 5 | 整体架构 | 分层设计、核心理念 |
| 6 | Monorepo 结构 | packages/、子包依赖 |
| 7 | 主题系统 | Design Token、主题定制 |
| 8 | 设计原则 | AI 优先、可组合性 |

### 🧩 组件篇 — 核心组件

**基础组件（8 章）**

| # | 章节 | 关键词 |
|---|------|--------|
| 9 | 组件总览 | 19 个组件总览 |
| 10 | XProvider 全局配置 | 上下文、Provider |
| 11 | Bubble 气泡对话 | 消息渲染、Markdown |
| 12 | Conversations 对话列表 | 会话管理、状态 |
| 13 | Sender 输入框 | 输入、发送、附件 |
| 14 | Prompts 提示词 | 模板、快速输入 |
| 15 | Suggestion 建议 | 自动补全、推荐 |
| 16 | Actions 操作组 | 按钮组、快捷操作 |

**AI 专用组件（6 章）**

| # | 章节 | 关键词 |
|---|------|--------|
| 17 | Think 思考过程 | 思考状态、动画 |
| 18 | ThoughtChain 思考链 | 多步思考、链式 |
| 19 | Welcome 欢迎页 | 欢迎界面、引导 |
| 20 | Introduce 介绍 | 功能介绍 |
| 21 | Notification 通知 | AI 通知、提示 |
| 22 | CodeHighlighter 代码高亮 | 语法高亮 |

**工具组件（6 章）**

| # | 章节 | 关键词 |
|---|------|--------|
| 23 | Attachments 附件 | 文件上传、预览 |
| 24 | FileCard 文件卡片 | 文件展示 |
| 25 | Folder 文件夹 | 目录管理 |
| 26 | Sources 来源 | 引用来源 |
| 27 | Mermaid 流程图 | 图表渲染 |

### 💎 进阶篇 — 高级主题
| # | 章节 | 关键词 |
|---|------|--------|
| 28 | 自定义组件 | 扩展、继承 |
| 29 | 主题定制 | Design Token、样式覆盖 |
| 30 | 最佳实践 | 性能优化、模式 |

---

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/xuyuxiong/ant-design-x-source-code-analysis.git
cd ant-design-x-source-code-analysis

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev
```

访问 http://localhost:5173/ant-design-x-source-code-analysis/

```bash
# 构建静态文件
npm run docs:build

# 预览构建结果
npm run docs:preview
```

---

## 🛠️ 技术栈

| 项目 | 技术 |
|------|------|
| 文档框架 | [VitePress](https://vitepress.dev) |
| 构建工具 | Vite |
| 代码高亮 | Shiki |
| 图表 | ASCII 文本图 + Mermaid |
| 部署 | GitHub Actions + GitHub Pages |

---

## 📁 项目结构

```
ant-design-x-source-code-analysis/
├── docs/
│   ├── .vitepress/          # VitePress 配置
│   │   └── config.mts       # 侧边栏、导航栏配置
│   ├── guide/               # 📘 指南篇 (4 章)
│   ├── architecture/        # 📗 架构篇 (4 章)
│   ├── components/          # 🧩 组件篇 (20 章)
│   ├── advanced/            # 💎 进阶篇 (3 章)
│   ├── index.md             # 首页
│   └── README.md
├── .github/
│   └── workflows/
│       └── deploy-gh-pages.yml  # GitHub Actions 自动部署
├── package.json
└── README.md
```

---

## 🗺️ 学习路线

```
指南篇 (入门准备) → 架构篇 (设计思想) → 组件篇 (组件详解)
    → 进阶篇 (高级主题)
```

建议按顺序阅读，每章包含：
- 📊 **架构图** — 组件树和模块关系
- 🔧 **源码解析** — 逐行分析核心实现
- 💡 **关键细节** — 容易忽略的实现要点
- 📖 **实战示例** — 可运行的代码示例
- 🐛 **常见问题** — FAQ 解答
- ✅ **最佳实践** — 推荐用法和陷阱

---

## 🎯 适合人群

- ✅ 有 1-2 年 React 或 Ant Design 使用经验
- ✅ 熟悉 TypeScript 基础
- ✅ 对 AI 应用开发有热情
- ✅ 准备面试或技术分享，需要源码级理解

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

## 📄 许可证

[MIT License](LICENSE)

---

## 👋 关于作者

本项目由 [xuyuxiong](https://github.com/xuyuxiong) 创作并维护。

如果你从中受益，欢迎给项目一个 ⭐ Star！