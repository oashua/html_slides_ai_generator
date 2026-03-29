let currentSlide = 1;
const totalSlides = 7;

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
