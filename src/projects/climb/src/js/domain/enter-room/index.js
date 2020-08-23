import enterLobby from '../enter-room/enter-lobby.js';
import displayScreen from '../markup/display-screen';

export default function enterScreen(screen) {
  const joinRoom = {
    lobby: enterLobby
  }

  displayScreen(screen);
  joinRoom[screen]();
}