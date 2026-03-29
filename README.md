# HTML演示文稿生成器

这是一个使用HTML+CSS实现的AI演示文稿项目，展示了为何AI利用HTML制作演示文稿更好。

## 项目结构

```
html_sides_ai_generator/
├── index.html          # 主HTML文件
├── styles.css          # 样式表
├── script.js           # 交互脚本
├── assets/             # 外部资源文件夹
│   └── demo-image.jpg  # 示例图片（需自行添加）
└── README.md           # 本文件
```

## 功能特性

- ✅ 标题和副标题
- ✅ 柱状图表展示
- ✅ 数学公式显示
- ✅ 流程图可视化
- ✅ 图片嵌入支持
- ✅ 自动对齐和响应式布局
- ✅ 键盘导航（左右箭头键）
- ✅ 平滑过渡动画

## 使用方法

1. 用浏览器打开 `index.html` 即可查看演示文稿
2. 使用底部按钮或键盘左右箭头键切换幻灯片
3. 将图片放入 `assets/` 文件夹中使用
4. 下载claude code，并配置你想用的模型（如[deepseek](https://api-docs.deepseek.com/zh-cn/guides/anthropic_api))

## 主题自定义指南

所有主题配置都在 `styles.css` 文件顶部的 `:root` 区域，通过修改CSS变量即可快速更改整体主题。

### 1. 颜色方案修改

在 `styles.css` 中找到以下变量并修改：

```css
:root {
    --primary-color: #2563eb;        /* 主色调（标题、按钮等） */
    --secondary-color: #1e40af;      /* 次要色（深色标题） */
    --accent-color: #3b82f6;         /* 强调色（边框、图表） */
    --bg-color: #ffffff;             /* 背景色 */
    --text-color: #1f2937;           /* 文字颜色 */
    --text-light: #6b7280;           /* 浅色文字（副标题等） */
}
```

**示例：更改为绿色主题**
```css
--primary-color: #10b981;
--secondary-color: #059669;
--accent-color: #34d399;
```

**示例：更改为暗色主题**
```css
--bg-color: #1f2937;
--text-color: #f9fafb;
--text-light: #d1d5db;
```

### 2. 字体设置修改

```css
:root {
    --font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;  /* 字体族 */
    --font-size-h1: 3.5rem;          /* 主标题字号 */
    --font-size-h2: 2.5rem;          /* 二级标题字号 */
    --font-size-h3: 1.5rem;          /* 三级标题字号 */
    --font-size-body: 1.2rem;        /* 正文字号 */
}
```

**示例：使用更大的字号**
```css
--font-size-h1: 4rem;
--font-size-h2: 3rem;
--font-size-body: 1.4rem;
```

**示例：更改字体**
```css
--font-family: 'Arial', 'Helvetica', sans-serif;
```

### 3. 布局比例修改

```css
:root {
    --slide-width: 1200px;           /* 幻灯片宽度 */
    --slide-height: 675px;           /* 幻灯片高度 (16:9) */
    --content-padding: 60px;         /* 内容内边距 */
}
```

**示例：更改为4:3比例**
```css
--slide-width: 1024px;
--slide-height: 768px;
```

**示例：增加内容边距**
```css
--content-padding: 80px;
```

### 4. 动画速度修改

```css
:root {
    --transition-speed: 0.3s;        /* 过渡动画速度 */
}
```

**示例：更快的动画**
```css
--transition-speed: 0.15s;
```

**示例：禁用动画**
```css
--transition-speed: 0s;
```

## 快速主题预设

### 商务蓝色主题（默认）
```css
--primary-color: #2563eb;
--secondary-color: #1e40af;
--accent-color: #3b82f6;
```

### 活力橙色主题
```css
--primary-color: #f97316;
--secondary-color: #ea580c;
--accent-color: #fb923c;
```

### 专业紫色主题
```css
--primary-color: #9333ea;
--secondary-color: #7e22ce;
--accent-color: #a855f7;
```

### 自然绿色主题
```css
--primary-color: #10b981;
--secondary-color: #059669;
--accent-color: #34d399;
```

### 暗黑模式主题
```css
--primary-color: #60a5fa;
--secondary-color: #3b82f6;
--accent-color: #93c5fd;
--bg-color: #1f2937;
--text-color: #f9fafb;
--text-light: #d1d5db;
```

## 添加自定义内容

### 添加新幻灯片

在 `index.html` 的 `<div class="presentation">` 中添加：

```html
<section class="slide" id="slide8">
    <h2>你的标题</h2>
    <p>你的内容</p>
</section>
```

记得在 `script.js` 中更新 `totalSlides` 数量。

### 添加图片

1. 将图片放入 `assets/` 文件夹
2. 在HTML中引用：`<img src="assets/your-image.jpg" alt="描述">`

## 浏览器兼容性

支持所有现代浏览器：
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+


## to do
- [ ] 导出功能
## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=oashua/html_sides_ai_generator&type=Date)](https://star-history.com/#oashua/html_sides_ai_generator&Date)

## 许可证

MIT License - 自由使用和修改

