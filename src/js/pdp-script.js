'use strict';

import { pdp_page_data } from './pdp-base';
export { pdpScripts };

function pdpScripts() {
  const pdp_variations = document.querySelector('.b-pdp_details-variations');
  const pdp_variation_item = pdp_variations.querySelectorAll('.b-pdp_details-variation');
  const pdp_sizes = document.querySelector('.b-pdp_details-element_sizes');
  const pdp_size_item = pdp_sizes.querySelectorAll('.b-pdp_details-element_size');

  function switchActiveClass(array, parent, activeClass) {
    let active_variation;
    parent.addEventListener('click', (event) => {
        active_variation = parent.querySelector('.' + `${activeClass}`);
        array.forEach(btn => {
            active_variation.classList.remove(activeClass);
            event.target.classList.add(activeClass);
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
  switchActiveClass(pdp_size_item, pdp_sizes, 'm-active');
  switchActiveClass(pdp_variation_item, pdp_variations, 'm-current');
}

// function test(param1, param2) {
//   console.log(this, param1, param2);
// }

// test.apply({hello: 'world'}, ['hello', 'john']);
// test.call({hello: 'world2'}, ['hello2', 'john2']);
// const testBind = test.bind({hello: 'world3'});
// testBind();
// const data_PDP = require('./pdp-base');

