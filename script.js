document.addEventListener("DOMContentLoaded", () => {
  const sliders = {
    'odin':    { current: 0, images: document.querySelectorAll('#odin-shirt .slides img') },
    'shield':  { current: 0, images: document.querySelectorAll('#shield-shirt .slides img') },
    'hekate':  { current: 0, images: document.querySelectorAll('#hekate-shirt .slides img') },
    'vratia':  { current: 0, images: document.querySelectorAll('#vratia-shirt .slides img') },
    'tree':    { current: 0, images: document.querySelectorAll('#tree-shirt .slides img') }
  };

  function show(name, i) {
    sliders[name].images.forEach((img, idx) =>
      img.classList.toggle('active', idx === i)
    );
  }

  window.moveSlide = function(name, step) {
    const s = sliders[name];
    s.current = (s.current + step + s.images.length) % s.images.length;
    show(name, s.current);
  };

  for (let key in sliders) show(key, 0);

  // Popup
  const modal = document.getElementById("modalForm");
  const btns = document.querySelectorAll(".buy-btn");
  const close = document.querySelector(".close");

  btns.forEach(btn => btn.onclick = () => modal.style.display = "block");
  close.onclick = () => modal.style.display = "none";
  window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
});
