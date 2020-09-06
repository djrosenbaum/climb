import enterLobby from './lobby.js';
import enterRules from './rules.js';
import displayScreen from '../markup/display-screen';

export default function enterScreen(screen) {
  const joinRoom = {
    lobby: enterLobby,
    rules: enterRules
  }

  displayScreen(screen);
  joinRoom[screen]();
}