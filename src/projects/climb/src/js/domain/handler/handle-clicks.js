import handleJoinGame from './handle-join-game';
import handleNewGame from './handle-new-game';
import handleStartGame from './handle-start-game';

export default async function handleClicks(event) {
  console.log('clicked', event.target);
  if (event.target.matches('[data-action="new-game"]')) {
    return handleNewGame(event);
  }
  if (event.target.matches('[data-action="join-game"]')) {
    return handleJoinGame(event);
  }
  if (event.target.matches('[data-action="start-game"]')) {
    return handleStartGame(event);
  }
}