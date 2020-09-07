// import GameController from '../class/game-controller';

export default async function handleNewGame() {
  window.app.gameController = new GameController();
}