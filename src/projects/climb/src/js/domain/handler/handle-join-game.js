import app from '../app';
import displayScreen from '../markup/display-screen';

export default async function handleJoinGame() {
  console.log('handling join game');
  if (app.playerKey) {
    return;
  }

  const roomCode = getRoomCode();
  const playerName = getPlayerName();
  console.log('room code:', roomCode);
  console.log('player name:', playerName);

  if (!roomCode || !playerName) {
    // room code or player are required
    console.log('room code and player name are required');
    return;
  }

  // firebaseRoomReference = firebase.database().ref(`rooms/${roomCode}`);
  app.room = firebase.database().ref(`rooms/${roomCode}`);

  // get the room data from firebase
  app.room.once('value').then(setPlayerName);
}

/**
 * 
 * @param {Object} snapshot - some firebase snapshot
 */
function setPlayerName(snapshot) {
  console.log('setting player name');
  console.log(snapshot.val());
  const { status } = snapshot.val() || {};
  if (status !== 'waiting') {
    // can only join a room waiting for players
    console.log('room is closed to new players');
    return;
  }
  // set your player info
  app.room.child('players').push({
    playerName: getPlayerName(),
  }).then((data) => {
    console.log('player set', app.playerKey);
    app.playerKey = data.getKey();
    displayScreen('lobby');
  });
}

function getRoomCode() {
  console.log('get room code');
  let roomCode = document.querySelector('[data-input="room-code"]').value;  
  return roomCode.toLowerCase(); 
}

function getPlayerName() {
  console.log('get player name');
  let playerName = document.querySelector('[data-input="player-name"]').value || 'guest';
  return playerName.toLowerCase();
}