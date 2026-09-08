import { readdirSync, statSync } from 'fs'
import { join, relative, basename } from 'path'

/**
 * 扫描 docs 目录，自动生成 VitePress 侧边栏配置
 * @param {string} docsDir - docs 目录的绝对路径
 * @param {string} rootPath - 相对根路径（默认 ''）
 * @returns {Array} sidebar 配置数组
 */
export function generateSidebar(docsDir, rootPath = '') {
  const entries = readdirSync(join(docsDir, rootPath))
    .filter(name => !name.startsWith('.') && name !== 'node_modules' && name !== 'dist')
    .sort()

  const items = []
  const dirs = []

  for (const entry of entries) {
    const fullPath = join(docsDir, rootPath, entry)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      dirs.push(entry)
    } else if (entry.endsWith('.md')) {
      const name = entry === 'index.md' ? null : entry.replace(/\.md$/, '')
      const link = '/' + join(rootPath, entry).replace(/\.md$/, '').replace(/\\/g, '/')
      if (name) {
        items.push({ text: name, link })
      }
    }
  }

  // 处理子目录（递归）
  for (const dir of dirs) {
    const subItems = generateSidebar(docsDir, join(rootPath, dir))
    if (subItems.length > 0) {
      // 检查是否有 index.md 作为目录标题
      const indexMd = join(docsDir, rootPath, dir, 'index.md')
      let text = dir
      try {
        statSync(indexMd)
        text = dir // 有 index.md 就用目录名，用户可自定义
      } catch {
        // 没有 index.md，用目录名
      }
      items.push({
        text,
        collapsible: true,
        collapsed: subItems.length > 5,
        items: subItems,
      })
    }
  }

  return items
}