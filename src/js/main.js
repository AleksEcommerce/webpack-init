import '../scss/main.scss';
import '../index.html';

import {pdpScripts} from './pdp-script.js';

pdpScripts();


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

  getData('https://jsonplaceholder.typicode.com/todos')
  .then(data => {
    console.log(data);
    data.forEach(({userId, id, title, completed}) => {
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
