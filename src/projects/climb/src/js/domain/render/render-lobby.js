import { app } from '../app';

function renderLobby() {
  console.log('rendering the lobby');
  if (app.host) {

    const { code, players } = app.host;
    // render lobby as host
    /*inline-template*/
    let markup = 
    `<div>
      <div>Go to</div>
      <div class="bold link">djrosenbaum.github.io/climb</div>
    </div>
    <div>
      <div>Room Code</div>
      <div class="room-code bold">${code}</div>
    </div>
    <div>
      <div>Player List</div>
      <div class="player-list">${players.map(player => `<div>${player}</div>`)}</div>
    </div>
    <div class="start-game-wrapper hidden">
      <div>Press</div>
      <div class="button-wrapper">
        <button data-action="start_game">Start Game</button>
      </div>
      <div>when everyone is in</div>
    </div>`

    document.querySelector('[data-screen="lobby"]').innerHTML = markup;
  }

  if (app.player) {
    // render lobby as player
  }
}

export {
  renderLobby,
}