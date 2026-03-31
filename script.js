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

// 导出PDF（使用浏览器原生打印）
function exportToPDF() {
    window.print();
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
window.addEventListener('load', () => {
    // 临时显示所有 slide 以计算真实高度
    const slides = document.querySelectorAll('.slide');
    const saved = currentSlide;
    slides.forEach(s => s.classList.add('active'));
    checkOverflow();
    slides.forEach(s => s.classList.remove('active'));
    currentSlide = saved;
    showSlide(currentSlide);
});
