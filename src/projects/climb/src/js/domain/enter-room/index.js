import lobby from './lobby.js';
import game from './game.js';
import displayScreen from '../../library/display-screen';

function enterRoom(screen) {
  const joinRoom = {
    lobby,
    game,
  }

  joinRoom[screen]();
  displayScreen(screen);
}

export {
  enterRoom,
}