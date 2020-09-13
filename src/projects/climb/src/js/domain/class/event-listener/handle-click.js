// import { newGameHost } from '../action/new-game-host';
import { joinGame } from '../../action/join-game';
import { newGame } from '../../action/new-game';
// import startGame from './start-game';

const actions = {
  join_game: joinGame,
  new_game: newGame,
  // join_game: joinGame,
  // start_game: startGame,
}

function handleClick(event) {
  const action = event.target.dataset.action || '';
  !!action && actions[action]();
}

export {
  handleClick
}