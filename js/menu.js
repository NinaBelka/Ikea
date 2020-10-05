import { getData } from './getData.js';
import generateSubCatalog from './generateSubCatalog.js';


export const menu = () => {

  const updateSubCatalog = generateSubCatalog();

  // Получение объектов Dom
  const btnBurger = document.querySelector('.btn-burger'),
    catalog = document.querySelector('.catalog'),
    subCatalog = document.querySelector('.subcatalog');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.append(overlay);


  // Открытие/закрытие меню и подменю
  const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
  };

  const closeMenu = () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu();
  };

  const handlerCatalog = event => {
    event.preventDefault();

    const target = event.target;
    const itemList = target.closest('.catalog-list__item');

    document.querySelectorAll('.catalog-list__item').forEach(item => item.classList.remove('active'));

    if (itemList) {
      getData.subCatalog(target.textContent, (data) => {
        updateSubCatalog(target.textContent, data); subCatalog.classList.add('subopen');
        itemList.classList.add('active');
      });
    }

    if (event.target.closest('.btn-close')) {
      closeMenu();
    }
  };

  const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
  };


  // Обработчики событий
  btnBurger.addEventListener('click', openMenu);
  overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      closeMenu();
    }
  });
  catalog.addEventListener('click', handlerCatalog);
  subCatalog.addEventListener('click', event => {
    const btnReturn = event.target.closest('.btn-return');
    if (btnReturn) {
      document.querySelectorAll('.catalog-list__item').forEach(item => item.classList.remove('active'));
      closeSubMenu();
    }
  });
};