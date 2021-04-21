'use strict';


export { DataList };


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
