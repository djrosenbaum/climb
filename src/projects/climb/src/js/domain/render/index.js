import { renderLobby } from './render-lobby';

function render(screen) {
  console.log('render:', screen);
  
  const rooms = {
    lobby: renderLobby
  }

  rooms[screen]();
}

export {
  render,
}