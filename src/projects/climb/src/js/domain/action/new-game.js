import { app } from '../app';
import { Host } from '../class/Host';

let canCreateNewGame = true;

function newGame() {
  if (canCreateNewGame) {
    canCreateNewGame = false;
    app.host = new Host();
  }
}

export {
  newGame,
}