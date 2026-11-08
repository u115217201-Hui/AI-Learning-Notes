(() => {
  'use strict';
  const bar = document.querySelector('.reading-progress');
  const up = document.querySelector('.back-top');
  const refresh = () => {
    const root = document.documentElement;
    const length = root.scrollHeight - innerHeight;
    if (bar) bar.style.width = `${length > 0 ? Math.min(100, (scrollY / length) * 100) : 0}%`;
    if (up) up.classList.toggle('show', scrollY > 500);
  };
  addEventListener('scroll', refresh, { passive: true });
  addEventListener('resize', refresh);
  if (up) up.addEventListener('click', () => scrollTo({top:0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'}));
  refresh();
})();
