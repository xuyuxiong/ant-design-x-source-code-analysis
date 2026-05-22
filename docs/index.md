---
layout: home

hero:
  name: Ant Design X 源码深度解析
  text: 面向 AI 应用的 UI 组件库源码学习指南
  tagline: 从设计原理到实现细节，全面掌握 Ant Design X 核心机制
  image:
    src: /ant-design-x-logo.svg
    alt: Ant Design X Logo
  actions:
    - theme: alt
      text: GitHub
      link: https://github.com/xuyuxiong/ant-design-x-source-code-analysis

features:
  - icon: 🎨
    title: Ant Design X 1.x
    details: 全面覆盖 Ant Design X 最新版本，包括对话组件、思考链、提示词等 AI 专用组件
  - icon: 📚
    title: 渐进式学习
    details: 从指南篇 → 架构篇 → 组件篇 → 进阶篇，自顶向下，符合认知规律
  - icon: 🔍
    title: 源码调试
    details: 手把手教你搭建调试环境，深入理解每一行代码
  - icon: 🎯
    title: 图解丰富
    details: 大量架构图、组件树图、状态流程图，让抽象概念可视化
  - icon: ⚙️
    title: 设计模式
    details: 深入解析组件设计模式、状态管理、主题系统等核心设计
  - icon: 🌙
    title: 暗色模式
    details: 支持亮色/暗色主题切换，舒适阅读体验

---

## 📖 为什么学习 Ant Design X 源码？

<div class="why-learn">

**很多同学有这样的困惑：**

- AI 应用界面如何设计与传统应用有什么不同？
- 对话组件如何管理复杂的状态和消息流？
- 如何自定义适合业务场景的 AI 交互组件？
- 主题系统如何实现与 Ant Design 5.x 无缝集成？

**学习源码能帮你：**

1. ✅ 理解 AI 应用组件的设计理念，构建更流畅的用户体验
2. ✅ 掌握对话组件的状态管理和渲染机制
3. ✅ 信心满满地自定义组件和扩展现有功能
4. ✅ 甚至成为 Ant Design X 贡献者

</div>

## 🗺️ 学习路线

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   指南篇    │ ──► │   架构篇    │ ──► │   组件篇    │
│  入门准备   │     │  设计思想   │     │  组件详解   │
└─────────────┘     └─────────────┘     └─────────────┘
                                              │
                                              ▼
                                    ┌─────────────┐
                                    │   进阶篇    │
                                    │  高级主题   │
                                    └─────────────┘
```

## 📋 内容概览

### 指南篇
学习前的准备工作，包括环境搭建、调试方法、源码结构等

### 架构篇
理解 Ant Design X 为什么这样设计，整体架构、主题系统、设计原则等

### 组件篇
逐个解析 Bubble、Conversations、Sender、Prompts、Suggestion 等核心组件

### 进阶篇
自定义组件、主题定制、最佳实践等高级主题

## 👥 谁适合学习？

- ✅ 有 1-2 年 React 或 Ant Design 使用经验
- ✅ 熟悉 TypeScript 基础
- ✅ 对 AI 应用开发有热情
- ✅ 愿意投入时间深入学习组件源码

## 📝 关于本项目

本项目系统性解析 Ant Design X 源码架构和组件实现。

相比其他资料，本项目的特点：
- 🆕 **内容完整**：覆盖所有官方组件和子包
- 📊 **图解更多**：大量可视化架构图和组件树图
- ⚙️ **深度解析**：详细解析状态管理、主题系统等核心设计
- 📱 **现代化体验**：响应式设计、暗色模式、代码高亮

<style>
.why-learn {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 24px;
  margin: 24px 0;
}
</style>