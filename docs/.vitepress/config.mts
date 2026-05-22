import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Ant Design X 源码深度解析',
  description: 'Ant Design X 源码深度解析 - 面向 AI 应用的 UI 组件库',
  base: '/ant-design-x-source-code-analysis/',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#1677ff' }],
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/overview' },
      { text: '架构', link: '/architecture/overview' },
      { text: '组件', link: '/components/overview' },
      { text: '进阶', link: '/advanced/custom-components' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南篇',
          items: [
            { text: '项目概览', link: '/guide/overview' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '源码结构', link: '/guide/structure' },
            { text: '调试指南', link: '/guide/debugging' },
          ],
        },
      ],
      '/architecture/': [
        {
          text: '架构篇',
          items: [
            { text: '整体架构', link: '/architecture/overview' },
            { text: 'Monorepo 结构', link: '/architecture/monorepo' },
            { text: '主题系统', link: '/architecture/theme-system' },
            { text: '设计原则', link: '/architecture/design-principles' },
          ],
        },
      ],
      '/components/': [
        {
          text: '组件篇',
          items: [
            { text: '组件总览', link: '/components/overview' },
            { text: 'Bubble 气泡对话', link: '/components/bubble' },
            { text: 'Conversations 对话列表', link: '/components/conversations' },
            { text: 'Sender 输入框', link: '/components/sender' },
            { text: 'Prompts 提示词', link: '/components/prompts' },
            { text: 'Suggestion 建议', link: '/components/suggestion' },
            { text: 'Think 思考过程', link: '/components/think' },
            { text: 'ThoughtChain 思考链', link: '/components/thought-chain' },
            { text: 'Welcome 欢迎页', link: '/components/welcome' },
            { text: 'XProvider 全局配置', link: '/components/x-provider' },
            { text: 'Attachments 附件', link: '/components/attachments' },
            { text: 'CodeHighlighter 代码高亮', link: '/components/code-highlighter' },
            { text: 'FileCard 文件卡片', link: '/components/file-card' },
            { text: 'Folder 文件夹', link: '/components/folder' },
            { text: 'Notification 通知', link: '/components/notification' },
            { text: 'Sources 来源', link: '/components/sources' },
            { text: 'Actions 操作组', link: '/components/actions' },
            { text: 'Introduce 介绍', link: '/components/introduce' },
            { text: 'Mermaid 流程图', link: '/components/mermaid' },
          ],
        },
      ],
      '/advanced/': [
        {
          text: '进阶篇',
          items: [
            { text: '自定义组件', link: '/advanced/custom-components' },
            { text: '主题定制', link: '/advanced/theme-customization' },
            { text: '最佳实践', link: '/advanced/best-practices' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xuyuxiong/ant-design-x-source-code-analysis' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present',
    },

    outline: {
      label: '本页目录',
      level: [2, 3],
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
      },
    },
  },
  
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
})