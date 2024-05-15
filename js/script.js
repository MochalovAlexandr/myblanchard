/*------Слайдер hearo-------------------------------------------------------------------------Слайдер--*/
// // Слайдер hearo
const swiper = new Swiper('.swiper1', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  // spaceBetween: 30,
  loop: true,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'bullets',
  //   clickable: true,
  // },
  // Автопрокрутка
  autoplay: {
    //Пауза между прокруткой
    delay: 5000,
    //Закончить на последнем слайде
    stopOnLastSlide: true,
    //Отключить после ручного переключения
    disableOnInteraction: false,
  },

  // Скорость перекл слайдов по умолч 300мс
  speed: 3400,
  effect: "fade",
  allowTouchMove: false,

});

/*------Слайдер Gallery-------------------------------------------------------------------------Слайдер--*/
// Слайдер Gallery


document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".gallery__slidescont", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 50,
    // pagination: {
    //   el: ".test-section .test-pagination",
    //   type: "fraction"
    // },

    pagination: {
      el: '.gallery__pagination',
      // type: 'bullets',
      clickable: true,

      type: 'fraction',
    },
    navigation: {
      nextEl: ".gallery__btn_next",
      prevEl: ".gallery__btn_prev"
    },

    breakpoints: {

      220: {
        slidesPerView: 1,
        spaceBetween: 38,
        slidesPerGroup: 1,
      },



      576: {
        slidesPerView: 2,
        spaceBetween: 38
      },

      1025: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
});









/*------Слайдер Partners-------------------------------------------------------------------------Слайдер--*/
// Слайдер Partners
const swiper3 = new Swiper('.swiper3', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  // loop: true,
  navigation: {
    nextEl: '.partners__btn_next',
    prevEl: '.partners__btn_prev',
  },

  // pagination: {
  //   el: '.swiper-pagination',
  //   // type: 'bullets',
  //   clickable: true,

  //   type: 'fraction',
  // },
  //Автопрокрутка
  // autoplay: {
  //   //Пауза между прокруткой
  //   delay: 3000,
  //   //Закончить на последнем слайде
  //   stopOnLastSlide: true,
  //   //Отключить после ручного переключения
  //   disableOnInteraction: false,
  // },

  // Скорость перекл слайдов по умолч 300мс
  // speed: 1400,

  // breakpoints адаптив
  // Ширина экрана

  breakpoints: {

    220: {
      slidesPerView: 1,
      spaceBetween: 2,
      slidesPerGroup: 1,
    },

    //   480: {
    //     slidesPerView: 2,
    //   },

    //   992: {
    //     slidesPerView: 3,
    //   },

    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,

    },

    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,

    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },


});

/*------Слайдер developments-------------------------------------------------------------------------Слайдер--*/
// Слайдер developments
const swiper4 = new Swiper('.swiper4', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  // spaceBetween: 50,
  // loop: true,
  navigation: {
    nextEl: '.developments__btn_next',
    prevEl: '.developments__btn_prev',
  },
  // Автовысота
  // autoHeight: true,

  pagination: {
    el: '.swiper4-pagination',
    type: 'bullets',
    clickable: true,
    // dynamicBullets: true,
  },
  //Автопрокрутка
  // autoplay: {
  //   //Пауза между прокруткой
  //   delay: 3000,
  //   //Закончить на последнем слайде
  //   stopOnLastSlide: true,
  //   //Отключить после ручного переключения
  //   disableOnInteraction: false,
  // },

  // Скорость перекл слайдов по умолч 300мс
  // speed: 1400,

  // breakpoints адаптив
  // Ширина экрана

  breakpoints: {

    300: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,

    },

    //   480: {
    //     slidesPerView: 2,
    //   },

    768: {
      spaceBetween: 34,
      slidesPerGroup: 2,
      slidesPerView: 2,
    },



    992: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 2,
    },

    1500: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 1,
    },

  },


});

//Плавный скролл

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
};

/*------Аккордион-------------------------------------------------------------------------Аккордион--*/


// $(".accordion").accordion({
//   heightStyle: "content"
// });
// new Accordion('.accordion-container');

// new Accordion('.accordion-list', {
//   elementClass: 'accordion',
//   triggerClass: 'accordion__control',
//   panelClass: 'accordion__content',
//   activeClass: 'accordion--active',
//   showMultiple: false,
//   openOnInit: [0],
//   collapse: false
// });

document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion('.accordion__list', {
    duration: 700,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',
    activeClass: 'accordion--active',
    showMultiple: false,
    openOnInit: [0],
    collapse: true
  });
})

/*------Табы-сatalog-------------------------------------------------------------------------Табы--*/
// Табы сatalog

let tabsBtn = document.querySelectorAll('.сatalog__painter');
let tabsItem = document.querySelectorAll('.сatalogcard');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    // tabsBtn.forEach(function (btn) { btn.classList.remove('weworking__steps--activ') });
    // e.currentTarget.classList.add('weworking__steps--activ');

    tabsItem.forEach(function (element) { element.classList.remove('сatalogcard--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('сatalogcard--active');
  });
});


/*------dropdown__simplebar-------------------------------------------------------------------------Слайдер--*/
//  dropdown__simplebar
// document.querySelectorAll(".menu").forEach(dropdown => {
//   new SimpleBar(dropdown, {
//     /* чтобы изначально ползунок был виден */
//     autoHide: false,
//     /* с помощью этого значения вы можете управлять высотой ползунка*/
//     scrollbarMaxSize: 25,
//   });
// })

/*------dropdown__simplebar-------------------------------------------------------------------------Слайдер--*/
//  Показ dropdown по клику

const btns = document.querySelectorAll(".navbottom__item");
const btns2 = document.querySelectorAll(".navbottom__link");


const dropdowns = document.querySelectorAll(".menu");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {

  item.addEventListener("click", function () {
    let DropThis = this.querySelector(".menu");
    // console.log(DropThis);
    dropdowns.forEach(el => {

      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    // btns2.forEach(el => {
    //   if (el = this) {
    //     el.classList.toggle(activeClassbtns)
    //   }
    // });
    DropThis.classList.toggle(activeClassdropdowns);
    // this.classList.toggle(activeClassbtns);
    document.querySelectorAll(".navbottom__link").forEach(i => {

      i.addEventListener("click", function () {

        i.classList.add(activeClassbtns);

      })
    })

  })
});

/*------tooltip-------------------------------------------------------------------------tooltip--*/



tippy('.js-tooltip-btn', {
  theme: 'testtooltip',
  maxWidth: 300,
});

/*------MAP-------------------------------------------------------------------------MAP--*/

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("myMap1", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.759998, 37.601588],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    controls: ['geolocationControl', 'zoomControl'],

    zoom: 14
    // controls: ['geolocationControl', 'zoomControl']
  },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "350px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "270px", right: "20px" }
    }
  );
  myMap.behaviors.disable('scrollZoom');
  // Создание геообъекта с типом точка (метка).
  // var myGeoObject = new ymaps.GeoObject({
  //   geometry: {
  //     type: "Point", // тип геометрии - точка
  //     coordinates: [55.8, 37.8] // координаты точки
  //   }
  // });

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'map.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });

  // Размещение геообъекта на карте.
  // myMap.geoObjects.add(myGeoObject);
  myMap.geoObjects.add(myPlacemark);
  // myMap.geoObjects.add(myGeoObject);

}

/*------Валидация формы-------------------------------------------------------------------------Валидация формы--*/


var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);


const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя!',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Недопустимый формат'
    },
    {
      rule: 'function',
      validator: function () {
        const phone = selector.inputmask.unmaskedvalue()
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный номер телефона!'
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });


/*------Дропдаун-------------------------------------------------------------------------Дропдаун--*/


const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  // itemSelectText: '',
});

/*----search_form------------------------------------------------------------------------------search_form------*/

let headerSearch = document.querySelector('.header__btnopensearch');
let searchForm = document.querySelector('.header__searchform');
let searchBtn = document.querySelector('.header__searchformclose');


headerSearch.addEventListener('click', function () {

  searchForm.classList.add("form__active");
  headerSearch.classList.add("active");

});

searchBtn.addEventListener('click', function () {

  searchForm.classList.remove("form__active");
  headerSearch.classList.remove("active");


});

document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".header__searchform");
  if (!target.closest(".header__searchcontainer")) {
    form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".header__btnopensearch").classList.remove("active");
    // document.querySelector(".menu").classList.remove("menu__active")

  }
  let menu = document.querySelectorAll(".menu");

  // console.log(menu);
  menu.forEach(elem => {
    // console.log(elem);
    if (!target.closest(".navbottom__item")) {
      elem.classList.remove(activeClassdropdowns);
      document.querySelectorAll(".navbottom__link").forEach(el => {
        el.classList.remove(activeClassbtns);
      })



      // this.classList.toggle(activeClassbtns);
    }
  });
});

/*------Бургер-header-------------------------------------------------------------------------header--*/
// Бургер-header
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');
let menuClose = document.querySelector('.header__navclose');

burger.addEventListener('click', function () {

  // burger.classList.toggle('burger--active');

  menu.classList.toggle('hader__navactive');

  document.body.classList.toggle('stop-scroll');

});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    // burger.classList.remove('burger--active');

    menu.classList.remove('hader__navactive');

    document.body.classList.remove('stop-scroll');

  });
});

menuClose.addEventListener('click', function () {


  menu.classList.remove('hader__navactive');
  document.body.classList.remove('stop-scroll');
});



/*------modal--------------------------------------------------------------------------modal--*/

//modal
const modal = document.querySelector('.overlay')
const modalClose = document.querySelector('.modal__close')
const gallerswiperButton = document.querySelectorAll('.gallery__slide')


gallerswiperButton.forEach((el) => {
  el.addEventListener('click', () => {
    modal.classList.add('show');
  })
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('show');
})


/*-----Табы-modal--------------------------------------------------------------------------Табы-modal-*/
// Табы-modal

let tabsBtnMod = document.querySelectorAll('.gallery__slide');
let tabsItemMod = document.querySelectorAll('.modal__content');

tabsBtnMod.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    // tabsBtn.forEach(function (btn) { btn.classList.remove('weworking__steps--activ') });
    // e.currentTarget.classList.add('weworking__steps--activ');

    tabsItemMod.forEach(function (element) { element.classList.remove('modal__content_active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('modal__content_active');
  });
});
