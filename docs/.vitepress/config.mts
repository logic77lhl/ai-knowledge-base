import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI 知识库',
  description: 'AI 基础知识与技术路线科普文档',

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
    ],

    sidebar: [
      {
        text: '入门',
        items: [
          { text: '快速开始', link: '/guide/' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/logic77lhl/ai-knowledge-base' },
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'MIT License',
    },
  },
})