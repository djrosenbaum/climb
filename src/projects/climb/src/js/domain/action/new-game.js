import { app } from '../app';
import { Game } from '../class/game';

let canCreateNewGame = true;

function newGame() {
  if (canCreateNewGame) {
    canCreateNewGame = false;
    app.game = new Game();
  }
}

export {
  newGame,
}