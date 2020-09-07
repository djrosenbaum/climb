import { onScreenUpdated } from './on-screen-updated';
import { createRoomCode } from './create-room-code';

function Room() {
  const code = createRoomCode();
  const ref = window.firebase.database().ref(`rooms/${code}`);  
  
  // remove room from firebase when disconnected
  ref.onDisconnect().remove();
  
  // listen for screen changes
  ref.child('screen').on('value', onScreenUpdated);
  
  // set screen
  ref.set({
    screen: 'lobby',
  });

  return {
    code,
    ref,
  }
}

export {
  Room,
}