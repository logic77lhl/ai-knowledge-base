import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { generateSidebar } from '../../scripts/generate-sidebar.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsDir = resolve(__dirname, '..')
const sidebar = generateSidebar(docsDir)

export default defineConfig({
  title: 'AI 知识库',
  description: 'AI 基础知识与技术路线科普文档',

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/logic77lhl/ai-knowledge-base' },
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'MIT License',
    },
  },
})