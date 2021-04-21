'use strict';

export { simpleSlider };

// HTML Structure
// <div class="b-horslider-container">
//   <section class="b-horslider">
//     <div class="b-horslider-nav">
//       <span class="b-horslider-nav_prev"></span>

//       <span class="b-horslider-nav_current-number"></span>
//       /
//       <span class="b-horslider-nav_total"></span>

//       <span class="b-horslider-nav_next"></span>
//     </div>
//     <div class="b-horslider-pagination">

//     </div>
//     <div class="b-horslider-inner">
//       <div class="b-horslider-slide">
//         <img src="./img/slide-1.jpg" alt="">
//       </div>
//       <div class="b-horslider-slide">
//         <img src="./img/slide-2.jpg" alt="">
//       </div>
//       <div class="b-horslider-slide">
//         <img src="./img/slide-3.jpg" alt="">
//       </div>
//       <div class="b-horslider-slide">
//         <img src="./img/slide-1.jpg" alt="">
//       </div>
//       <div class="b-horslider-slide">
//         <img src="./img/slide-2.jpg" alt="">
//       </div>
//       <div class="b-horslider-slide">
//         <img src="./img/slide-3.jpg" alt="">
//       </div>
//     </div>
//   </section>
// </div>
// End Of structure

const simpleSlider = function(selector, parametries) {
  let parent = document.querySelector(selector),
              parentWidth = parent.clientWidth,
              slidesWrapper = parent.querySelector(parametries.slidesList),
              slidesOffset = 0,
              paginationItems = [],
              slidesItems = parent.querySelectorAll(parametries.items),
              navBlock = parent.querySelector(parametries.navigation.block),
              navPrev = navBlock.querySelector(parametries.navigation.prev),
              navNext = navBlock.querySelector(parametries.navigation.next),
              paginationBlock = parent.querySelector(parametries.pagination.block),
              currentSlide = navBlock.querySelector(parametries.counters.currentslide),
              total = navBlock.querySelector(parametries.counters.allslides),
              slideIndex = 1;

    parametries = {
      navigation: {
        prev: 'selector',
        next: 'selector',
        block: 'selector'
      },
      pagination: {
        block: 'selector',
      },
      counters: {
        currentslide: 'selector',
        allslides: 'selector'
      },
      items: 'selector',
      slidesList: 'selector',
    };

    slidesItems.forEach(item => {
      item.style.minWidth = parentWidth + 'px';
    });

    if (slidesItems.length < 10) {
      total.textContent = '0' + slidesItems.length;
      currentSlide.textContent = '0' + slideIndex;
    } else {
      total.textContent = slidesItems.length;
      currentSlide.textContent = slideIndex;
    };

    for (let i = 0; i < slidesItems.length; i++) {
      const item = document.createElement('span');
      item.setAttribute('data-slide-to', i + 1);
      item.classList.add('b-horslider-pagination_item');
      if (i == 0) {
        item.classList.add('m-active');
      };
      paginationBlock.append(item);
      paginationItems.push(item);
    }

    function currentItem() {
      if (slidesItems.length < 10) { // показ актуального номера слайда
        currentSlide.textContent = '0' + slideIndex;
      } else {
        currentSlide.textContent = slideIndex;
      }; // конец актуального показа номера слайда
    }

    function moveSlider(coord) {
      slidesOffset +=  parentWidth * coord; // присваимваем в переменную отсутпу по ширине родителя и умножаем на аргумент
      slidesWrapper.style.transform = `translateX(${slidesOffset}px)`; // присваиваем отступ
      slideIndex += (-coord); // счетчик актуального номера слайда

      if (slideIndex === slidesItems.length + 1) { // обновляем значения счетчика для первого и последнего элемента
        slideIndex = 1;
        slidesOffset = 0;
        slidesWrapper.style.transform = `translateX(${slidesOffset}px)`;
      } else if (slideIndex === 0) {
        slideIndex = slidesItems.length;
        slidesOffset = parentWidth * (slidesItems.length - 1) * -coord;
        slidesWrapper.style.transform = `translateX(${slidesOffset}px)`;
      }; // конец обновляем значения счетчика для первого и последнего элемента

      currentItem();

      paginationItems.forEach(item => item.classList.remove('m-active'));
      paginationItems[slideIndex - 1].classList.add('m-active');
    };

    paginationItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');
        slideIndex = (slideTo - 1);
        slidesOffset =  parentWidth * (slideIndex  * -1);
        slideIndex = 1 + slideIndex;
        slidesWrapper.style.transform = `translateX(${slidesOffset}px)`;
        paginationItems.forEach(item => item.classList.remove('m-active'));
        e.target.classList.add('m-active');

        currentItem();
      });
    });

    navNext.addEventListener('click', () => {
      moveSlider(-1);
    });

    navPrev.addEventListener('click', () => {
      moveSlider(1);
    });
};
