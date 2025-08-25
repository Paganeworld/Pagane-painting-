document.addEventListener('DOMContentLoaded', function () {
  // --- Слайдери ---
  const sliders = {
    'hekate': { current: 0, images: document.querySelectorAll('#hekate-shirt .slides img') },
    'vratia': { current: 0, images: document.querySelectorAll('#vratia-shirt .slides img') },
    'tree': { current: 0, images: document.querySelectorAll('#tree-shirt .slides img') }
  };

  function show(name, i) {
    sliders[name].images.forEach((img, idx) =>
      img.classList.toggle('active', idx === i)
    );
  }

  window.moveSlide = function (name, step) {
    const s = sliders[name];
    s.current = (s.current + step + s.images.length) % s.images.length;
    show(name, s.current);
  };

  for (let key in sliders) show(key, sliders[key].current);

  // --- Бутон за запитване ---
  const btn = document.getElementById('contactBtn');
  const footer = document.querySelector('footer');

  window.addEventListener('scroll', () => {
    const footerTop = footer.getBoundingClientRect().top;
    if (footerTop < window.innerHeight) {
      document.body.classList.add('scrolled-to-footer');
    } else {
      document.body.classList.remove('scrolled-to-footer');
    }
  });

  btn.addEventListener('click', () => {
    window.location.href = "mailto:pagane.world.of.words@gmail.com?subject=Запитване&body=Здравейте,%0AИскам%20повече%20информация%20за...";
  });

  // --- Lightbox със zoom ---
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox .close');

  // Отваряне при клик на снимка
  document.querySelectorAll('.slides img').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.classList.add('show');
      lightboxImg.src = img.src;
      lightboxImg.classList.remove('zoomed');
    });
  });

  // Затваряне с X
  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('show');
  });

  // Затваряне при клик извън снимката
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('show');
    }
  });

  // Zoom при клик върху снимката
  lightboxImg.addEventListener('click', () => {
    lightboxImg.classList.toggle('zoomed');
  });

  // Затваряне с Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightbox.classList.remove('show');
    }
  });
});
