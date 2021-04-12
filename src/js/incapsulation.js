'use strict';


export { teacher };

class teacher {
    constructor(name, age, phone) {
      this.name = name;
      this.age = age;
      this._phone= phone;
    }

    #tech = 'js php react';

    info = () => {console.log(`${this.name} + ${this.age} + ${this._phone} + Skills" ${tech}` )};

    get phone() {
      return this._phone;
    }

    set phone(number) {
      if (typeof number === 'number' && number.length < 20 && number.length > 2) {
        this._phone = number;
      } else {
        console.log('error');
      }
    }
}

// const Sonik = new teacher('Sonik', 25, '380630285458');
// console.log(Sonik.phone);
// Sonik.phone = '777777'; // невозможно перезаписать потому что использована инкапсуляция
// console.log(Sonik.phone);
// console.log(Sonik.tech); // невозможно посомтреть потому что зашифрованы данные через #
