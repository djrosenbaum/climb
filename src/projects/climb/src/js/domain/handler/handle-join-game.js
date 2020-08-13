import app from '../app';
import displayScreen from '../markup/display-screen';

export default async function handleJoinGame() {
  console.log('handling join game');
  if (app.myPlayerIndex) {
    return;
  }

  const roomCode = getRoomCode();
  console.log('room code:', roomCode);

  const room = firebase.database().ref(`rooms/${roomCode}`);

  // get the room code
  room.once('value').then(function(snapshot) {
    console.log(snapshot.val());
  });

  // set the room code

  // get a snapshot of the room

  // verify the room is accepting players

  // set your player info

  // app.myPlayerIndex = getMyPlayerIndex();
}

function getMyPlayerIndex() {
  // gets the player index
  console.log('get my player index');
}

function getRoomCode() {
  let roomCode = document.querySelector('[data-input="room-code"]').value;
  
  return roomCode.toLowerCase();
}