const preloader = document.querySelector('.preloader');

window.onload = () => {
  document.body.classList.add('loaded-hiding');

  window.setTimeout(() => {
    /* Прелоадер */
    preloader.classList.remove('preloader--active');
    document.body.classList.remove('loaded-hiding');

    /* Анимации */
    const promoWrapper = document.querySelector('.promo__title-wrapper');
    const promoButton = document.querySelector('.promo-button');
    const formAnimItem = document.querySelector('.form-wrapper');
    const formAnimFieldset = document.querySelector('.form__fieldset-wrapper');
    const formAnimTextarea = document.querySelector('.form__textarea');
    const promoPicture = document.querySelector('.promo__picture');
    const products = document.querySelectorAll('.products__item');
    const privilegesItem = document.querySelectorAll('.privileges__list-item');
    const mainTitle = document.querySelector('.main-title');
    const mainSubtitle = document.querySelector('.main-subtitle');
    const formLegends = document.querySelectorAll('.form__legend');

    /* Добавление класса общей анимации ( Scale ) */
    let animScaleArr = [promoWrapper, promoButton, formAnimItem, formAnimFieldset, formAnimTextarea];
    for (let i = 0; i < animScaleArr.length; i++) {
      animScaleArr[i] && animScaleArr[i].classList.add('animation-scale');
    }

    if (products) {
      for (product of products) {
        product.classList.add('animation-scale');
      }
    }

    /* Вариативная анимация Position*/
    promoPicture && promoPicture.classList.add('animation-position');
    mainTitle && mainTitle.classList.add('animation-position');
    mainSubtitle && mainSubtitle.classList.add('animation-position');

    if (formLegends) {
      for (legend of formLegends) {
        legend.classList.add('animation-position');
      }
    }

    /* Вариативная анимация Scale*/
    if (privilegesItem) {
      for (let i = 0; i < privilegesItem.length; i++) {
        let b = i - 0.5, j = 1.5;
        if (b >= 0) j = j+b;
        /*Значение duration передаётся в переменную ( Пользовательское свойство ),
        которая в свою очередь идёт значением в animation*/
        privilegesItem[i].style = `--animation-duration: ${j}s`;
      }
    }
  }, 500);
}

//<!DOCTYPE Liky>
