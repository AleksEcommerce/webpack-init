import '../scss/main.scss';
import '../index.html';

import {pdpScripts} from './pdp-script.js';

pdpScripts();


const GameObject = {
  counter: 0,
  options: {
    playAI: false,
    playHuman: true
  },
  GameFunction() {
    const game_container = document.querySelector('.b-kn');
    const game_item = game_container.querySelectorAll('.b-kn-item');
    function GameFinish() {
      for (let key in game_item) {
        if (
            game_item[0].classList.contains('m-null') && game_item[1].classList.contains('m-null') && game_item[2].classList.contains('m-null') ||
            game_item[3].classList.contains('m-null') && game_item[4].classList.contains('m-null') && game_item[5].classList.contains('m-null') ||
            game_item[6].classList.contains('m-null') && game_item[7].classList.contains('m-null') && game_item[8].classList.contains('m-null') ||
            game_item[0].classList.contains('m-null') && game_item[4].classList.contains('m-null') && game_item[6].classList.contains('m-null') ||
            game_item[1].classList.contains('m-null') && game_item[4].classList.contains('m-null') && game_item[7].classList.contains('m-null') ||
            game_item[2].classList.contains('m-null') && game_item[5].classList.contains('m-null') && game_item[8].classList.contains('m-null') ||
            game_item[0].classList.contains('m-null') && game_item[4].classList.contains('m-null') && game_item[7].classList.contains('m-null') ||
            game_item[2].classList.contains('m-null') && game_item[4].classList.contains('m-null') && game_item[6].classList.contains('m-null')) {
            console.log('Win Null');
            ResetClass();
            return true;
        } else if (
            game_item[0].classList.contains('m-krestik') && game_item[1].classList.contains('m-krestik') && game_item[2].classList.contains('m-krestik') ||
            game_item[3].classList.contains('m-krestik') && game_item[4].classList.contains('m-krestik') && game_item[5].classList.contains('m-krestik') ||
            game_item[6].classList.contains('m-krestik') && game_item[7].classList.contains('m-krestik') && game_item[8].classList.contains('m-krestik') ||
            game_item[0].classList.contains('m-krestik') && game_item[4].classList.contains('m-krestik') && game_item[6].classList.contains('m-krestik') ||
            game_item[1].classList.contains('m-krestik') && game_item[4].classList.contains('m-krestik') && game_item[7].classList.contains('m-krestik') ||
            game_item[2].classList.contains('m-krestik') && game_item[5].classList.contains('m-krestik') && game_item[8].classList.contains('m-krestik') ||
            game_item[0].classList.contains('m-krestik') && game_item[4].classList.contains('m-krestik') && game_item[7].classList.contains('m-krestik') ||
            game_item[2].classList.contains('m-krestik') && game_item[4].classList.contains('m-krestik') && game_item[6].classList.contains('m-krestik')
        ) {
          console.log('Win Krestik');
          ResetClass();
          return true;
        }
      }
    };
    function ResetClass() {
      game_item.forEach(item => {
        item.classList.remove('m-krestik');
        item.classList.remove('m-null');
      });
      return true;
    };
    game_item.forEach(item => {
      item.addEventListener('click', (e) => {
        this.counter++;
        if (this.counter % 2 === 0 && !e.target.classList.contains('m-krestik') && !e.target.classList.contains('m-null')) {
          e.target.classList.add('m-krestik');
        } else if (!e.target.classList.contains('m-krestik') && !e.target.classList.contains('m-null')) {
          e.target.classList.add('m-null');
        }
        GameFinish()
      });
    });
  }
}

  // game_item.forEach(item => {
  //   item.addEventListener('click', (e) => {
  //     // this.counter += this.counter
  //     console.log(that);
  //   });
  // });


GameObject.GameFunction();
