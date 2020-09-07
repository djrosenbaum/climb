import { createRoomCode } from './create-room-code';
import { render } from '../../render';
import { displayScreen } from '../../../library/display-screen';

function Host() {
  const code = createRoomCode();
  const players = {};
  const ref = window.firebase.database().ref(`rooms/${code}`);  
  
  // remove room from firebase when disconnected
  ref.onDisconnect().remove();

  // listen for player updates
  ref.child('players').on('value', onPlayerListUpdated);
  
  // set screen
  ref.set({
    screen: 'lobby',
  }).then(() => {
    render('lobby');
    displayScreen('lobby');
  });

  return {
    code,
    ref,
    players,
  }
}

function onPlayerListUpdated(e) {
  console.log('on player list updated', e);
}

export {
  Host,
}