import app from '../app';
import displayScreen from '../markup/display-screen';

export default async function handleNewGame() {
  if (app.roomCode) {
    return;
  }

  app.roomCode = getRoomCode();
  const rooms = firebase.database().ref(`rooms/${app.roomCode}`);
  rooms.set({
    status: 'waiting',
  }).then(() => {
    document.querySelector('[data-screen="lobby"] .room-code').innerText = app.roomCode;
    displayScreen('lobby');
  });
}

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function getRoomCode() {
  const roomCode = [];
  for(let i = 0; i < 4; i++) {
    roomCode[i] = getRandom(letters);
  }
  return roomCode.join('');
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}