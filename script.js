document.addEventListener("DOMContentLoaded", () => {
  // Слайдери (внимание: id да съвпада с index.html)
  const sliders = {
    'odin':    { current: 0, images: document.querySelectorAll('#odin-shirt .slides img') },
    'shield':  { current: 0, images: document.querySelectorAll('#shield-shirt .slides img') },
    'hekate':  { current: 0, images: document.querySelectorAll('#hekate-shirt .slides img') },
    'vratia':  { current: 0, images: document.querySelectorAll('#vratia-shirt .slides img') },
    'tree':    { current: 0, images: document.querySelectorAll('#tree-shirt .slides img') }
  };

  function show(name, i) {
    const s = sliders[name];
    if (!s) return;
    s.images.forEach((img, idx) => img.classList.toggle('active', idx === i));
  }

  window.moveSlide = function(name, step) {
    const s = sliders[name];
    if (!s || s.images.length === 0) return;
    s.current = (s.current + step + s.images.length) % s.images.length;
    show(name, s.current);
  };

  for (let key in sliders) {
    const s = sliders[key];
    if (s && s.images.length) show(key, 0);
  }

  // Lightbox (щракни върху всяка снимка)
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbClose = document.querySelector('.lb-close');

  document.addEventListener('click', (e) => {
    if (e.target.matches('.slides img')) {
      lbImg.src = e.target.src;
      lightbox.classList.add('show');
    }
  });

  lbClose.addEventListener('click', () => lightbox.classList.remove('show'));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('show'); });

  // Modal (заяви запитване)
  const modal = document.getElementById('modalForm');
  const modalClose = modal ? modal.querySelector('.close') : null;
  document.querySelectorAll('.buy-btn').forEach(b => { b.addEventListener('click', (e) => { e.preventDefault(); if (modal) modal.style.display = 'flex'; }); });
  if (modalClose) modalClose.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
});
