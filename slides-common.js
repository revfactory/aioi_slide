function initSlides(total, sections) {
  let current = 0;
  const slides = document.querySelectorAll('.slide');
  const sectionDots = document.querySelectorAll('.section-dot');
  const pageNum = document.getElementById('pageNum');
  const progressBar = document.getElementById('progressBar');

  function updateSectionDots() {
    let activeSection = 0;
    for (let i = sections.length - 1; i >= 0; i--) {
      if (current >= sections[i]) { activeSection = i; break; }
    }
    sectionDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === activeSection);
    });
  }

  function goToSlide(n) {
    slides[current].classList.remove('active');
    current = n;
    slides[current].classList.add('active');
    pageNum.textContent = `${current + 1} / ${total}`;
    progressBar.style.width = `${((current + 1) / total) * 100}%`;
    updateSectionDots();
  }

  function nextSlide() { if (current < total - 1) goToSlide(current + 1); }
  function prevSlide() { if (current > 0) goToSlide(current - 1); }

  // Expose globally for onclick handlers
  window.goToSlide = goToSlide;
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide(); }
    if (e.key === 'Home') { e.preventDefault(); goToSlide(0); }
    if (e.key === 'End') { e.preventDefault(); goToSlide(total - 1); }
  });

  let touchStartX = 0;
  document.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
  document.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { if (diff > 0) nextSlide(); else prevSlide(); }
  });
}
