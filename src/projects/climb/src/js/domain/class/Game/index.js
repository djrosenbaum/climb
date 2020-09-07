import { Host } from '../Host';

function Game() {
  const host = new Host();

  return {
    host,
  }
}

export {
  Game,
}