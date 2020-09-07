import { createRoomCode } from './create-room-code';
import { render } from '../../render';
import { displayScreen } from '../../../library/display-screen';

function Host() {
  const code = createRoomCode();
  const ref = window.firebase.database().ref(`rooms/${code}`);  
  
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
    ref,
  }
}

// function onPlayerListUpdated(e) {
//   console.log('on player list updated', e);
// }

export {
  Host,
}