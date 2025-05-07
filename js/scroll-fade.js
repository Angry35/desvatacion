// src/js/scroll-fade.js
(() => {
  const logo = document.querySelector('.logo');
  const btn  = document.querySelector('.discord-button');

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset > 0;
    const opacity = scrolled ? 0 : 1;

    // Oculta o muestra logo y botón
    logo.style.opacity = opacity;
    btn.style.opacity  = opacity;

    // Desactiva el botón de Discord al hacer scroll
    btn.style.pointerEvents = scrolled ? 'none' : 'auto';
  });
})();
