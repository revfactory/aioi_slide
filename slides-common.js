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

  function goToSlide(n, pushState) {
    if (n < 0 || n >= total || n === current) return;
    slides[current].classList.remove('active');
    current = n;
    slides[current].classList.add('active');
    pageNum.textContent = `${current + 1} / ${total}`;
    progressBar.style.width = `${((current + 1) / total) * 100}%`;
    updateSectionDots();
    if (pushState !== false) {
      history.pushState({ slide: current }, '', `#slide-${current + 1}`);
    }
    if (typeof window.onSlideChange === 'function') window.onSlideChange(n);
  }

  function nextSlide() { if (current < total - 1) goToSlide(current + 1); }
  function prevSlide() { if (current > 0) goToSlide(current - 1); }

  // Expose globally for onclick handlers
  window.goToSlide = goToSlide;
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

  // 브라우저 뒤로가기/앞으로가기 지원
  window.addEventListener('popstate', (e) => {
    if (e.state && typeof e.state.slide === 'number') {
      goToSlide(e.state.slide, false);
    } else {
      const n = parseSlideFromHash();
      if (n !== null) goToSlide(n, false);
    }
  });

  // URL 해시에서 슬라이드 번호 파싱
  function parseSlideFromHash() {
    const match = location.hash.match(/^#slide-(\d+)$/);
    if (match) {
      const n = parseInt(match[1], 10) - 1;
      if (n >= 0 && n < total) return n;
    }
    return null;
  }

  // 초기 로드 시 해시가 있으면 해당 슬라이드로 이동
  const initialSlide = parseSlideFromHash();
  if (initialSlide !== null && initialSlide !== 0) {
    goToSlide(initialSlide, false);
  }
  history.replaceState({ slide: current }, '', `#slide-${current + 1}`);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide(); }
    if (e.key === 'Home') { e.preventDefault(); goToSlide(0); }
    if (e.key === 'End') { e.preventDefault(); goToSlide(total - 1); }
  });

  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartedInScrollable = false;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    // 테이블 가로 스크롤 영역 내에서 터치 시작 여부 확인
    const el = e.target.closest('.table-scroll-wrapper, .compare-table');
    touchStartedInScrollable = !!(el && el.scrollWidth > el.clientWidth);
  });

  document.addEventListener('touchend', (e) => {
    const diffX = touchStartX - e.changedTouches[0].clientX;
    const diffY = touchStartY - e.changedTouches[0].clientY;
    // 수직 스와이프 우세 시 슬라이드 전환 방지
    if (Math.abs(diffY) > Math.abs(diffX)) return;
    // 가로 스크롤 가능한 테이블 내부 스와이프 시 전환 방지
    if (touchStartedInScrollable) return;
    if (Math.abs(diffX) > 50) { if (diffX > 0) nextSlide(); else prevSlide(); }
  });

  // 슬라이드 전환 시 열린 버블 자동 닫기
  window.onSlideChange = function() {
    const openBubble = document.querySelector('.script-bubble.open');
    if (openBubble) openBubble.classList.remove('open');
  };
}
