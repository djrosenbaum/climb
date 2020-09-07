import { Room } from './Room';
import { app } from '../app';

function GameHost() {
  console.log('i am the game host');
  app.isGameHost = true;
  app.room = new Room();
}

export {
  GameHost,
}