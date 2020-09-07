import app from '../app';
import { enterRoom } from '../enter-room';

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function Game(app) {
  if (app.roomCode) {
    return;
  }

  app.roomCode = getRoomCode();
  app.room = firebase.database().ref(`rooms/${app.roomCode}`);

  app.room.onDisconnect().remove();

  app.room.set({
    status: 'waiting',
  }).then(() => {
    document.querySelector('[data-screen="lobby"] .room-code').innerText = app.roomCode;
    enterRoom('lobby');
  });
}

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