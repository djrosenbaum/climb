import app from '../app';

export default async function handleNewGame() {
  if (app.roomCode) {
    return;
  }

  console.log('handle new game');
  // try setting room code
  const rooms = firebase.database().ref('rooms');
  rooms.set(createNewRoom());
}

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function getRoomCode() {
  const roomCode = [];
  for(let i = 0; i < 4; i++) {
    console.log('i', i);
    roomCode[i] = getRandom(letters);
  }
  console.log('room code', roomCode);
  return roomCode.join('');
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createNewRoom() {
  const room = {};
  const roomCode = getRoomCode();
  room[roomCode] = {
    foo: 'bar',
  }
  app.roomCode = roomCode;
  console.log('created room', room);
  return room;
}