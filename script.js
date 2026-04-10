let currentSlide = 1;
const totalSlides = 9;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');

    if (n > totalSlides) currentSlide = totalSlides;
    if (n < 1) currentSlide = 1;

    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide - 1].classList.add('active');

    document.getElementById('slideNumber').textContent = `${currentSlide} / ${totalSlides}`;
    document.getElementById('prevBtn').disabled = currentSlide === 1;
    document.getElementById('nextBtn').disabled = currentSlide === totalSlides;
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

// 键盘导航
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'ArrowRight') changeSlide(1);
});

// 初始化
showSlide(currentSlide);

// 导出PDF（使用浏览器原生打印，自动匹配幻灯片比例）
function exportToPDF() {
    const el = document.querySelector('.presentation');
    const w = el.offsetWidth;
    const h = el.offsetHeight;

    // px → mm（96dpi: 1px ≈ 0.2646mm），缩放到 297mm 宽
    const mmW = 297;
    const mmH = Math.round(mmW * (h / w));

    // 动态注入 @page 尺寸
    const style = document.createElement('style');
    style.id = 'print-page-size';
    style.textContent = `@page { size: ${mmW}mm ${mmH}mm; margin: 0; }`;
    document.head.appendChild(style);

    window.print();

    // 打印对话框关闭后移除
    style.remove();
}

// 溢出检测
function checkOverflow() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        const overflow = slide.scrollHeight - slide.clientHeight;
        if (overflow > 0) {
            console.warn(
                `[溢出警告] 第 ${i + 1} 页 (#${slide.id}) 内容溢出 ${overflow}px`
            );
        }
    });
}

// 页面加载完成后检测所有 slide 溢出
window.addEventListener('load', async () => {
    // 临时显示所有 slide 以计算真实高度
    const slides = document.querySelectorAll('.slide');
    const saved = currentSlide;
    slides.forEach(s => s.classList.add('active'));
    
    // 初始化 Mermaid，确保在元素可见且有尺寸时计算 (Mermaid 11.x 的 run 是异步的)
    try {
        if (typeof mermaid !== 'undefined') {
            await mermaid.run({ querySelector: '.mermaid' });
        } else if (window.mermaid) {
            await window.mermaid.run({ querySelector: '.mermaid' });
        }
    } catch (e) {
        console.error('Mermaid render error:', e);
    }

    checkOverflow();
    slides.forEach(s => s.classList.remove('active'));
    currentSlide = saved;
    showSlide(currentSlide);
});