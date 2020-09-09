import { createRoomCode } from './create-room-code';
import { displayScreen } from '../../../library/display-screen';
import { onPlayerListUpdated } from './on-player-list-updated';
import { render } from '../../render';
import { app } from '../../app';

function Host() {
  const code = createRoomCode();
  const ref = window.firebase.database().ref(`rooms/${code}`);
  let playerList = '';
  
  // remove room from firebase when disconnected
  ref.onDisconnect().remove();
  
  // set screen
  ref.set({
    screen: 'lobby',
  }).then(() => {
    render({
      playerType: 'host',
      screen: 'lobby'
    });
    displayScreen('lobby');
  });

  return {
    code,
    listen,
    playerList,
    ref,
  }
}

function listen() {
  console.log('listening');
  const { ref } = app.host;
  ref.child('players').on('value', onPlayerListUpdated);
}

export {
  Host,
}