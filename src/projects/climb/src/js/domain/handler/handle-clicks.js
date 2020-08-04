import handleNewGame from './handle-new-game';

export default async function handleClicks(event) {
  console.log('clicked', event.target);
  if (event.target.matches('[data-action="new-game"]')) {
    return handleNewGame(event);
  }
}