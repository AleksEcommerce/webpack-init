'use strict';

import { pdp_page_data } from './pdp-base';
export { pdpScripts };

function pdpScripts() {
  const pdp_variations = document.querySelector('.b-pdp_details-variations');
  const pdp_variation_item = pdp_variations.querySelectorAll('.b-pdp_details-variation');
  const pdp_sizes = document.querySelector('.b-pdp_details-element_sizes');
  const pdp_size_item = pdp_sizes.querySelectorAll('.b-pdp_details-element_size');

  function setActiveClass(array, parent, nameClass) {
    parent.addEventListener('click', (event) => {
        array.forEach(btn => {
            let active_variation = parent.querySelector('.' + `${nameClass}`);
            active_variation.classList.remove(nameClass);
            event.target.classList.add(nameClass);
        });
    });
}

function classToggle(el) {
    let elTarget = document.querySelector(el);
    elTarget.addEventListener('click', () => {
        elTarget.classList.toggle('m-active');
    });
}

function my_accordeon(accordeon) {
    let accordeon_parent = document.querySelector(accordeon),
        accordeon_items = accordeon_parent.querySelectorAll('[data-accordeon-item]'),
        accordeon_control = accordeon_parent.querySelectorAll('[data-accordeon-control]');


    accordeon_control.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (e.target.parentNode.classList.contains('m-expanded')) {
                e.target.parentNode.classList.remove('m-expanded');
            } else if (!e.target.parentNode.classList.contains('m-expanded')) {
                accordeon_items.forEach(item => {
                    if (item.classList.contains('m-expanded')) {
                        item.classList.remove('m-expanded')
                    }
                });
                e.target.parentNode.classList.add('m-expanded');
            }
        });
    });

    // accordeon_control.forEach(btn => { // это простой Аккордеон где может быть несколько активныз блоков
    //     btn.addEventListener('click', (e) => {
    //        if (e.target.parentNode.classList.contains('m-expanded')) {
    //             e.target.parentNode.classList.remove('m-expanded');
    //        } else {
    //             e.target.parentNode.classList.add('m-expanded');
    //        }
    //     });
    // }); // это простой Аккордеон где может быть несколько активныз блоков
}

function InitInformation() {
  const pdp_product = document.querySelector('.l-pdp-product');
  const pdp_info = pdp_page_data;

  function simpleSet(el, text) {
    pdp_product.querySelector(el).innerHTML = text;
  }

  simpleSet('.b-pdp_title-name', pdp_info.product.title);
  simpleSet('.b-pdp_price-cost span', pdp_info.product.price_piece);
  simpleSet('.b-pdp_price-unit strong', pdp_info.product.price_box);
  simpleSet('.b-pdp_details-element_value', pdp_info.product.sku);


  function colorSet(parent, data) {
    let parent1 = pdp_product.querySelector(parent);
    let counter = 0;
    if (typeof data === 'object') {
      for (let key in data) {
        counter++;
        parent1.innerHTML += `<span class="b-pdp_details-variation m-color-${counter}"></span>`;
      }
    }
  }

  colorSet('.b-pdp_details-variations', pdp_info.product.variations.colors);
}

InitInformation();

  my_accordeon('.b-pdp_calc-accordeon');
  classToggle('.b-pdp_details-more');
  classToggle('.b-pdp_calc-checkbox_info');
  setActiveClass(pdp_size_item, pdp_sizes, 'm-active');
  setActiveClass(pdp_variation_item, pdp_variations, 'm-current');
}

function test(param1, param2) {
  console.log(this, param1, param2);
}

test.apply({hello: 'world'}, ['hello', 'john']);
test.call({hello: 'world2'}, ['hello2', 'john2']);
const testBind = test.bind({hello: 'world3'});
testBind();
// const data_PDP = require('./pdp-base');



// console.log('Запрос данных ...');


// const regProm = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Подготовка данных ...");

//     const pdpProduct = {
//       name: 'TV',
//       price: 2000
//     };

//     resolve(pdpProduct);
//   }, 1000);
// });

// regProm.then((pdpProductBase) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       pdpProductBase.status = 'order';
//       resolve(pdpProductBase);
//     }, 1000);
//   });
// }).then(data => {
//   data.modify = true;
//   return data;
// }).then((dataNext) => {
//   console.log(dataNext);
// }).catch(() => {
//   console.error('Error....')
// }).finally(() => {
//   console.log('Finally');
// });


// Вторая Часть урока Промисов
// const testPromise = time => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), time);
//   });
// };

// testPromise(1000).then(() => {
//   console.log('1000');
// });
// testPromise(2000).then(() => {
//   console.log('2000');
// });
// testPromise(1500).then(() => {
//   console.log('1500');
// });


// Promise.all([testPromise(1000), testPromise(2000)]).then(() => {
//   console.log('All'); // Этот промис отрабатывает когда все прогрузилось
// });


// Promise.race([testPromise(1000), testPromise(2000)]).then(() => {
//   console.log('All'); // Этот промис отрабатывает когда первое загрузилось
// });


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));
