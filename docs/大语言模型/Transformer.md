# Transformer 架构

Transformer 是 Google 在 2017 年论文《Attention Is All You Need》中提出的经典架构，完全基于注意力机制，抛弃了传统的循环和卷积结构。

## 整体架构

Transformer 采用编码器-解码器（Encoder-Decoder）结构：

- **编码器**：输入源序列，输出上下文编码表示
- **解码器**：根据编码器输出和已生成的目标序列，自回归生成下一个 token

---

## 2.1 编码器

编码器由 $N$ 个相同层堆叠而成，每一层包含两个子层：

1. **多头自注意力层**：每个 token 都能注意到序列中所有其他 token，计算上下文表示
2. **前馈神经网络层**：对每个 token 做独立的非线性变换

每个子层都使用残差连接 + 层归一化：

$$
\operatorname{LayerNorm}(x + \operatorname{Sublayer}(x))
$$

---

## 2.2 解码器

解码器同样由 $N$ 个相同层堆叠，有三个子层：

1. **掩码多头自注意力**：防止每个位置看到未来的信息（自回归生成）
2. **编码器-解码器注意力**：关注编码器的输出，建立源序列和目标序列的关联
3. **前馈神经网络**：同编码器

---

## 2.3 自注意力机制

自注意力计算分为三步：

1. **计算 QKV**：

$$
Q = XW_q,\quad K = XW_k,\quad V = XW_v
$$

2. **计算注意力分数**：

$$
\operatorname{Attention}(Q,K,V) = \operatorname{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$

3. **多头拼接**：分成多个头分别计算，最后拼接结果

关键点：

$\frac{1}{\sqrt{d_k}}$ 是缩放因子，防止点积结果过大导致 softmax 梯度消失。

---

## 2.4 位置编码

因为注意力本身不包含顺序信息，所以需要手动加入位置编码。论文中使用正弦位置编码：

$$
PE_{(pos, 2i)} = \sin\left(pos / 10000^{2i/d_{model}}\right)
$$

$$
PE_{(pos, 2i+1)} = \cos\left(pos / 10000^{2i/d_{model}}\right)
$$

现在也可以用可学习的位置编码，效果差不多。
