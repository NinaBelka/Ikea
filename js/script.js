'use strict';

const btnBurger = document.querySelector('.btn-burger'),
  catalog = document.querySelector('.catalog'),
  overlay = document.querySelector('.overlay'),
  btnClose = document.querySelector('.btn-close'),
  subCatalog = document.querySelector('.subcatalog'),
  subCatalogHeader = document.querySelector('.subcatalog-header');


const openMenu = () => {
  catalog.classList.add('open');
  overlay.classList.add('active');
};

const closeMenu = () => {
  catalog.classList.remove('open');
  overlay.classList.remove('active');
};

const openSubMenu = event => {
  event.preventDefault();
  const itemList = event.target.closest('.catalog-list__item');
  if (itemList) {
    subCatalogHeader.innerHTML = itemList.innerHTML;
    subCatalog.classList.add('subopen');
  }
};


btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    closeMenu();
  }
});
catalog.addEventListener('click', openSubMenu);