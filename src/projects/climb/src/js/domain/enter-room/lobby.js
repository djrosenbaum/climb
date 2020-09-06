import app from "../app";
import enterRoom from '.';

export default function enterLobby() {
  console.log('hello i am in the lobby');
  setRoomCode();
  getAndSetPlayerList();
}

function setRoomCode() {
  document.querySelector('[data-screen="lobby"] .room-code').innerText = app.room.getKey();
}

function getAndSetPlayerList() {
  console.log('get and set player list:', app.room);
  app.room.once('value').then(snapshot => {
    console.log(snapshot);
    if (!snapshot.toJSON().players) {
      showEveryoneIsReadyButton();
    }
    app.room.child('players').on('value', onPlayerListUpdated);
    app.room.child('status').on('value', onStatusUpdated);
  });
}

function onPlayerListUpdated(snapshot) {
  const playerList = snapshot.exists() ? snapshot.toJSON() : {};
  console.log('snapshot', playerList);
  updatePlayerList(playerList);
}

function onStatusUpdated(snapshot) {
  console.log('on status updated snapshot:', snapshot);
  const status = snapshot.toJSON();
  if (status === 'rules') {
    console.log('start the game!');
    enterRoom('rules');
  }
}

function updatePlayerList(playerList) {
  console.log('update player list', playerList);
  const $playerList = document.querySelector('[data-screen="lobby"] .player-list');
  $playerList.innerHTML = Object.keys(playerList).map(player => `<div>${playerList[player].playerName}</div>`).join('');
}

function showEveryoneIsReadyButton() {
  document.querySelector('.start-game-wrapper').classList.remove('hidden');
}