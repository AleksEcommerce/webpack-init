import '../scss/main.scss';
import '../index.html';

import {pdpScripts} from './pdp-script.js';
import {DokSlider} from './slider.js';
import {HorSlider} from './slider.js';
import {FitnessCalculator} from './calculator.js';
import {teacher} from './incapsulation.js';

pdpScripts();


// LocalStorage
// localStorage.setItem('number', 5);
// localStorage.removeItem('item');
// localStorage.clear();
// console.log(localStorage.getItem('number'));
const checkbox = document.querySelector('.b-form_checkbox'),
      form = document.querySelector('.b-form'),
      change = document.querySelector('.m-change');


      checkbox.addEventListener('change', () => {
        localStorage.setItem('isChecked', true);
      });

      if (localStorage.getItem('bg') === 'changed') {
        form.style.backgroundColor = 'red';
      }

      if (localStorage.getItem('isChecked')) {
        checkbox.checked = true;
      }

      change.addEventListener('click', () => {
        if (localStorage.getItem('bg') === 'changed') {
          localStorage.removeItem('bg');
          form.style.backgroundColor = '#fff';
        } else {
          localStorage.setItem('bg', 'changed');
          form.style.backgroundColor = 'red';
        }
      });

      // const persone2 = {
      //   name: 'Alexander',
      //   age: '32',
      //   job: {
      //     first: 'templateMonster',
      //     second: 'Respond'
      //   }
      // }

      // const serializedPersone = JSON.stringify(persone2);
      // localStorage.setItem('alexander', serializedPersone);

      // console.log(JSON.parse(localStorage.getItem('alexander')))



// const ans = prompt('Vvedite your names');
// const reg = /\d/g;
// console.log(ans.match(reg));


// const str = 'My name is R2B2';
// console.log(str.match(/\D/i));





// \d - chisla
// \w - slova
// \s - stroki

// \D - ne chisla
// \W - ne slova
// \S - ne stroki

// i
// g
// m

//console.log(ans.search(reg));
//console.log(ans.match(reg));

// const pass = prompt('Password')
// console.log(pass.replace(/\./g, "*"));

// console.log('12-34-56'.replace(/-/g, ":"));




let newSlider = new DokSlider('.b-slider', {
  navigation: {
    next: '.b-slider-counter_next',
    prev: '.b-slider-counter_prev'
  },
  counters: {
    currentslide: '.b-slider-counter_prev-number',
    allslides: '.b-slider-counter_next-number'
  }
});

let newSlider2 = new HorSlider('.b-horslider', {
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


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(data => data.json())
//   .then(res => console.log(res));


// const postData = async (url, data) => {
//   const res = await fetch(url, {
//     method: "POST",
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: data
//   });

//   return await res.json();
// };




  class DataList {
    constructor(userId, id, title, completed, parentSelector, ...classes) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('li');

        if (this.classes.length === 0) {
            this.classes = "b-server_data-item";
            element.classList.add(this.classes);
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }

        element.innerHTML = `
            <span class="b-server_data-item_id">${this.id}</span>
            <span class="b-server_data-item_title">${this.title}</span>
            <span class="b-server_data-item_completed">${this.completed}</span>
        `;
        this.parent.append(element);
    }
}

const getData = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};


  // getData('https://jsonplaceholder.typicode.com/todos')
  // .then(data => {
  //   console.log(data);
  //   data.forEach(({userId, id, title, completed}) => {
  //     new DataList(userId, id, title, completed, ".b-server_data-list").render();
  //   });
  // });

// USE AXIOS
  axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(data => {
    data.data.forEach(({userId, id, title, completed}) => {
          new DataList(userId, id, title, completed, ".b-server_data-list").render();
      });
  });



    //   getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({userId, id, title, completed}) => {
    //         const element = document.createElement('div');

    //         element.classList.add("b-server_data-item");

    //         element.innerHTML = `
    //           <span class="b-server_data-item_id">${id}</span>
    //           <span class="b-server_data-item_title">${title}</span>
    //           <span class="b-server_data-item_completed">${completed}</span>
    //         `;
    //         document.querySelector(".b-server_data-list").append(element);
    //     });
    // }

//postData('https://jsonplaceholder.typicode.com/todos/1', JSON.stringify(object));

// const persone3 = {
//   name: 'Alexander',
//   age: 32,
//   get userAge() {
//     return this.age;
//   },

//   set userAge(num) {
//     this.age = num;
//   }
// }

// console.log(persone3.userAge = 30);
// console.log(persone3.userAge);

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  #surname = 'Taranov';

  say = () => {
    console.log(`Name User: ${this.name} ${this.#surname}, his age ${this._age}`);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log('Error');
    }
  }
}

// const Ivan = new User('Ivan', 29);
// console.log(Ivan.age);
// console.log(Ivan.surname);
// Ivan.age = 99;
// Ivan.say();

// console.log('Домашнее задание потренироваться с инкапсуляцией')


