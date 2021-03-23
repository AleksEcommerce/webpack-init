import '../scss/main.scss';
import '../index.html';

import {pdpScripts} from './pdp-script.js';

pdpScripts();

const GameObject = {
  counter: 0,
  options: {
    playAI: false,
    playHuman: true,
    playing: false
  },
  SwitcherPlayer() {
    const game_wrapper = document.querySelector('.b-kn-wrapper');
    const game_switcher = game_wrapper.querySelector('.b-kn-switcher');
    const game_switcher_item = game_wrapper.querySelectorAll('.b-kn-switcher_item');

    game_switcher.addEventListener('click', (event) => {
      game_switcher_item.forEach(btn => {
          if (event.target.classList.contains('b-kn-switcher_item') && btn.classList.contains('m-active')) btn.classList.remove('m-active');
          event.target.classList.add('m-active');
      });
      if (event.target.classList.contains('m-ai') && this.options.playing == false) {
        this.options.playing = true;
        this.GameFunction('ai');
      } else if (event.target.classList.contains('m-human') && this.options.playing == false) {
        this.options.playing = true;
        this.GameFunction('human');
      } else if (this.options.playing == true && event.target.classList.contains('m-human')) {
        this.GameFunction('human');
      } else if (this.options.playing == true && event.target.classList.contains('m-ai')) {
        this.GameFunction('ai');
      }
    });
    return true;
  },
  GameFunction(enemy) {
    const game_container = document.querySelector('.b-kn');
    const game_item = game_container.querySelectorAll('.b-kn-item');
    const game_reset = document.querySelector('.b-kn-reset');

    game_reset.addEventListener('click', () => {
      ResetClass();
    });

    let ResetClass = () => {
      const game_switcher = document.querySelector('.b-kn-switcher');
      const game_switcher_item = game_switcher.querySelectorAll('.b-kn-switcher_item');
      const game_container = document.querySelector('.b-kn');
      const game_item = game_container.querySelectorAll('.b-kn-item');

      game_item.forEach(item => {
        item.classList.remove('m-krestik');
        item.classList.remove('m-null');
        if (!item.classList.contains('m-inactive')) {
          item.classList.add('m-inactive');
        }
      });
      game_switcher_item.forEach(item => {
        item.classList.remove('m-active');
      });
      this.counter = 0;
      this.options.playing = false;
      this.options.playAI = false;
      if (enemy === 'human') {
        game_container.removeEventListener('click', GamingHumans);
      } else if (enemy === 'ai') {
        game_container.removeEventListener('click', GamingAI);
      };
      if (this.options.playing == false) {
        console.log('counter after - reset')
      }
      return true;
    };


    let GameFunctionContext = this;

    if (enemy === 'human') {
      game_container.addEventListener('click', GamingHumans);
    } else if (enemy === 'ai') {
      game_container.addEventListener('click', GamingAI);
    };

    function AiEnemy() {
      const game_item_inactive = document.querySelectorAll('.m-inactive');
      function randomInteger(min, max) {
        let rand = min + Math.random() * (max - min);
        return Math.floor(rand);
      }
      for (let key in game_item_inactive) {
        let NumberItem = randomInteger(0, game_item_inactive.length);
        game_item_inactive[NumberItem].classList.remove('m-inactive');
        game_item_inactive[NumberItem].classList.add('m-krestik');
        break;
      }
      return true;
    };

    function GamingAI(e) {
      if (e.target.classList.contains('m-inactive')) {
        GameFunctionContext.options.playAI = true;
          if (!e.target.classList.contains('m-krestik') && !e.target.classList.contains('m-null')) {
            e.target.classList.remove('m-inactive');
            e.target.classList.add('m-null');
            setTimeout(AiEnemy, 500);
            setTimeout(GameFinish, 600);
          };
          console.log(GameFunctionContext.counter + ' AI');
        };
    };

    function GamingHumans(e) {
      if (e.target.classList.contains('m-inactive')) {
        GameFunctionContext.counter++;
        if (GameFunctionContext.counter % 2 === 0 && !e.target.classList.contains('m-krestik') && !e.target.classList.contains('m-null')) {
          e.target.classList.remove('m-inactive');
          e.target.classList.add('m-krestik');
        } else if (GameFunctionContext.counter % 2 !== 0 && !e.target.classList.contains('m-krestik') && !e.target.classList.contains('m-null')) {
          e.target.classList.remove('m-inactive');
          e.target.classList.add('m-null');
        };
        console.log(GameFunctionContext.counter + ' HUMAN');
        GameFinish();
      }
    };

    const GameFinish = () => {
      for (let key in game_item) {
        if (
            game_item[0].classList.contains('m-null') && game_item[1].classList.contains('m-null') && game_item[2].classList.contains('m-null') ||
            game_item[3].classList.contains('m-null') && game_item[4].classList.contains('m-null') && game_item[5].classList.contains('m-null') ||
            game_item[6].classList.contains('m-null') && game_item[7].classList.contains('m-null') && game_item[8].classList.contains('m-null') ||
            game_item[0].classList.contains('m-null') && game_item[3].classList.contains('m-null') && game_item[6].classList.contains('m-null') ||
            game_item[1].classList.contains('m-null') && game_item[4].classList.contains('m-null') && game_item[7].classList.contains('m-null') ||
            game_item[2].classList.contains('m-null') && game_item[5].classList.contains('m-null') && game_item[8].classList.contains('m-null') ||
            game_item[0].classList.contains('m-null') && game_item[4].classList.contains('m-null') && game_item[7].classList.contains('m-null') ||
            game_item[2].classList.contains('m-null') && game_item[4].classList.contains('m-null') && game_item[6].classList.contains('m-null')) {
            console.log('Win Null');
            setTimeout(ResetClass, 800);
            return true;
        } else if (
            game_item[0].classList.contains('m-krestik') && game_item[1].classList.contains('m-krestik') && game_item[2].classList.contains('m-krestik') ||
            game_item[3].classList.contains('m-krestik') && game_item[4].classList.contains('m-krestik') && game_item[5].classList.contains('m-krestik') ||
            game_item[6].classList.contains('m-krestik') && game_item[7].classList.contains('m-krestik') && game_item[8].classList.contains('m-krestik') ||
            game_item[0].classList.contains('m-krestik') && game_item[3].classList.contains('m-krestik') && game_item[6].classList.contains('m-krestik') ||
            game_item[1].classList.contains('m-krestik') && game_item[4].classList.contains('m-krestik') && game_item[7].classList.contains('m-krestik') ||
            game_item[2].classList.contains('m-krestik') && game_item[5].classList.contains('m-krestik') && game_item[8].classList.contains('m-krestik') ||
            game_item[0].classList.contains('m-krestik') && game_item[4].classList.contains('m-krestik') && game_item[7].classList.contains('m-krestik') ||
            game_item[2].classList.contains('m-krestik') && game_item[4].classList.contains('m-krestik') && game_item[6].classList.contains('m-krestik')
        ) {
          console.log('Win Krestik');
          setTimeout(ResetClass, 800);
          return true;
        }
      };
    }
  }
}

GameObject.SwitcherPlayer();
