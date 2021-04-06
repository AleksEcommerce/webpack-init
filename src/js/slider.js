'use strict';


export { DokSlider };

export { HorSlider };

// Simple slider
const DokSlider = function(selector, params) {
    let parent = document.querySelector(selector),
        nextSlide = parent.querySelector(params.navigation.next),
        prevSlide = parent.querySelector(params.navigation.prev),
        slides = parent.querySelectorAll('.b-slider-slide'),
        indexSlides = 1,
        currentSlide = parent.querySelector(params.counters.currentslide),
        total = parent.querySelector(params.counters.allslides);

    params = {
      navigation: {
        next: 'selector',
        prev: 'selector'
      },
      counters: {
        currentslide: 'selector',
        allslides: 'selector'
      }
    };

    if (slides.length < 10) {
      total.textContent = '0' + slides.length;
    } else {
      total.textContent = slides.length;
    };

    showSlide(indexSlides);

    function showSlide(n) {
      if (n > slides.length) indexSlides = 1;
      if (n < 1) indexSlides = slides.length;

      slides.forEach(item => {
        item.classList.remove('show');
        item.classList.add('hide');
      });
      slides[indexSlides - 1].classList.remove('hide');
      slides[indexSlides - 1].classList.add('show');

      if (slides.length < 10) {
        currentSlide.textContent = '0' + indexSlides;
      } else {
        currentSlide.textContent = indexSlides;
      };
    };

    function nextSlides(n) {
      showSlide(indexSlides += n);
    };

    nextSlide.addEventListener('click', () => {
      nextSlides(1);
    });
    prevSlide.addEventListener('click', () => {
      nextSlides(-1);
    });
}
// Simple slider the END


// Horizontsl Slider
const HorSlider = function(selector, parametries) {

  let parent = document.querySelector(selector),
              // parentWidth = window.getComputedStyle(parent).width;,
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
      slidesList: 'selector'
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

// Horizontsl Slider the END
