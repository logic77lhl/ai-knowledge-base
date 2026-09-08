import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { generateSidebar } from '../../scripts/generate-sidebar.mjs'
import mathjax3 from 'markdown-it-mathjax3'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsDir = resolve(__dirname, '..')
const sidebar = generateSidebar(docsDir)

export default defineConfig({
  title: 'AI 知识库',
  description: 'AI 基础知识与技术路线科普文档',

  lastUpdated: false,
  // GitHub Pages 部署在 https://logic77lhl.github.io/ai-knowledge-base/ 子路径下
  base: '/ai-knowledge-base/',
  // GitHub Pages 不支持无 .html 后缀的 URL，必须关闭
  cleanUrls: false,

  markdown: {
    config(md) {
      md.use(mathjax3)
    },
  },

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