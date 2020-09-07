import { app } from '../app';
import { render } from './';

function renderLobby() {
  console.log('rendering the lobby');
  if (app.host) {
    // render lobby as host
    
  }
  if (app.player) {
    // render lobby as player
  }
}

export {
  renderLobby,
}