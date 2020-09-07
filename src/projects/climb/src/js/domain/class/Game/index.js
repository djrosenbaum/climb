import { Room } from '../Room';

function Game() {
  const room = new Room();

  return {
    room,
  }
}

export {
  Game,
}