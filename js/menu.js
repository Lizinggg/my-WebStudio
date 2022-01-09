(() => {
  const refs = {
    openMenuBtn: document.querySelector('.open-menu-mobile-btn'),
    closeMenuBtn: document.querySelector('.cls-menu-mobile-btn'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();