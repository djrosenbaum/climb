import { app } from '../app';
import { GameHost } from '../class/game-host';

function newGameHost() {
  if (!app.gameHost) {
    app.gameHost = new GameHost();
  }
}

export {
  newGameHost,
}