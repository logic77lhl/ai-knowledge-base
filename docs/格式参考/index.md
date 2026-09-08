# Markdown 格式参考

## 文字格式

**粗体** *斜体* ~~删除线~~ `行内代码`

> 引用文本

## 列表

- 无序列表
  - 子项
1. 有序列表
2. 有序列表

## 表格

| 左对齐 | 居中 | 右对齐 |
|:--- |:---: |---:|
| 内容 | 内容 | 内容 |

## 自定义容器

::: tip 提示
提示信息
:::

::: warning 注意
注意信息
:::

::: danger 警告
警告信息
:::

::: details 点击展开
展开内容
:::

## 代码块

```python
def hello():
    print("Hello!")
```

## Mermaid 流程图

```mermaid
flowchart LR
    A[输入] --> B[处理] --> C[输出]
```

## 任务列表

- [x] 已完成
- [ ] 未完成

## 代码组

::: code-group

```bash [npm]
npm install
```

```bash [pip]
pip install
```

:::