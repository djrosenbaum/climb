import { app } from '../app';
import { Host } from '../class/host';

let canCreateNewGame = true;

function newGame() {
  if (canCreateNewGame) {
    canCreateNewGame = false;
    document.querySelector('[data-group="player"]').remove();
    app.host = new Host();
  }
}

export {
  newGame,
}