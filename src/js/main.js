import '../scss/main.scss';
import '../index.html';

import {pdpScripts} from './pdp-script.js';
import {simpleSlider} from './slider.js';
import {FitnessCalculator} from './calculator.js';
import {teacher} from './incapsulation.js';
import {DataList} from './data-list.js';
import {warrior} from './classes.js';

pdpScripts();


console.log('1');

setTimeout(() => {
  console.log('timeout');
}, 1000);

setTimeout(() => {
  console.log('timeout_2000');
}, 2000);

console.log('2');

// function* count(n) {
//   for (let i = 0; i < n; i++) {
//     yield i;
//   }
// }

// for (let m of count(8)) {
//   console.log(m);
// }

document.addEventListener('DOMContentLoaded', () => {
  let newSlider = new simpleSlider('.b-horslider', {
    navigation: {
      prev: '.b-horslider-nav_prev',
      next: '.b-horslider-nav_next',
      block: '.b-horslider-nav'
    },
    pagination: {
      block: '.b-horslider-pagination',
    },
    counters: {
      currentslide: '.b-horslider-nav_current-number',
      allslides: '.b-horslider-nav_total'
    },
    items: '.b-horslider-slide',
    slidesList: '.b-horslider-inner'
});


FitnessCalculator();

  // // USE AXIOS
  // axios.get('https://jsonplaceholder.typicode.com/todos')
  // .then(data => {
  //   data.data.forEach(({userId, id, title, completed}) => {
  //         new DataList(userId, id, title, completed, ".b-server_data-list").render();
  //     });
  // });
});




