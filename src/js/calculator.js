'use strict';


export { FitnessCalculator };

function FitnessCalculator() {
  const parent = document.querySelector('.calculating__field');


  let calcResult = parent.querySelector('.calculating__result span');

  let sex1 = 'female',
      height1,
      weight1,
      age1,
      ratio1 = 1.375;

  if (localStorage.getItem('sex')) {
    sex1 = localStorage.getItem('sex');
  } else {
    sex1 = 'female';
    localStorage.setItem('sex', sex1);
  }

  if (localStorage.getItem('ratio')) {
    ratio1 = localStorage.getItem('ratio');
  } else {
    ratio1 = 'female';
    localStorage.setItem('sex', ratio1);
  }

  function setStaticInformation(selector, activeClass) {
    const elements = parent.querySelectorAll(selector);

    elements.forEach(elem => {
      elem.classList.remove(activeClass);

      if (elem.getAttribute('id') === localStorage.getItem('sex')) {
        elem.classList.add(activeClass);
      }

      if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
        elem.classList.add(activeClass);
      }
    });
  }

  setStaticInformation('#gender div', 'calculating__choose-item_active');
  setStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

  function getStaticInformation(selector, activeClass) {
    const elements = parent.querySelectorAll(selector);
    elements.forEach(elem => {
      elem.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-ratio')) {
          ratio1 = +e.target.getAttribute('data-ratio');
          localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
        } else {
          sex1 = e.target.getAttribute('id');
          localStorage.setItem('sex', e.target.getAttribute('id'));
        }
        elements.forEach(item => {
          item.classList.remove(activeClass);
        });

        e.target.classList.add(activeClass);
        calcTotal();
      });
    });
  }

  function getDinamicInfo(selector) {
    const element = parent.querySelector(selector);

    element.addEventListener('input', (e) => {
      if (element.value.match(/\D/g)) {
        element.style.cssText = 'outline: 1px solid red;'
      } else {
        element.style.cssText = 'outline: none;';
      }

      switch(element.getAttribute('id')) {
        case 'height':
            height1 = +element.value;
            break;
        case 'weight':
            weight1 = +element.value;
            break;
        case 'age':
            age1 = +element.value;
            break;
      }
      calcTotal();
    });
  }

  getStaticInformation('#gender div', 'calculating__choose-item_active');
  getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

  getDinamicInfo('#height');
  getDinamicInfo('#weight');
  getDinamicInfo('#age');

  function calcTotal() {
    if (!sex1 || !height1 || !weight1 || !age1 || !ratio1) {
      calcResult.innerHTML = '____';
      console.log('NETNTENTEA');
      return;
    }
    if (sex1 === 'female') {
      calcResult.innerHTML = Math.round((447.6 + (9.2 * weight1) + (3.1 * height1) - (4.3 * age1)) * ratio1);
      console.log('Zencina');
      return;
    } else if (sex1 === 'male') {
      calcResult.innerHTML = Math.round((88.36 + (13.4 * weight1) + (4.8 * height1) - (5.7 * age1)) * ratio1);
      console.log('Muzik');
      return;
    }
  };

  calcTotal();
}
