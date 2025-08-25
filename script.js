document.addEventListener('DOMContentLoaded', function () {
  // --- Слайдери ---
  const sliders = {
    'hekate': { current: 0, images: document.querySelectorAll('#hekate-shirt .slides img') },
    'vratia': { current: 0, images: document.querySelectorAll('#vratia-shirt .slides img') },
    'tree':   { current: 0, images: document.querySelectorAll('#tree-shirt .slides img') }
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

  // --- Popup форма ---
  const modal = document.getElementById("modalForm");
  const btn   = document.getElementById("openFormBtn");
  const span  = document.querySelector(".close");

  if (btn && modal && span) {
    btn.onclick  = () => modal.style.display = "block";
    span.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
  }

  // --- Lightbox за снимки ---
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeLightbox = document.querySelector(".lightbox .close");

  if (lightbox && lightboxImg && closeLightbox) {
    document.querySelectorAll(".slides img").forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightbox.classList.add("show");
        lightboxImg.src = img.src;
      });
    });

    closeLightbox.onclick = () => {
      lightbox.style.display = "none";
      lightbox.classList.remove("show");
    };

    lightbox.onclick = (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
        lightbox.classList.remove("show");
      }
    };
  }
});
