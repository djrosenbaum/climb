import { handleClick } from '../handler/handle-click';
import { handleInput } from '../handler/handle-input';

function EventListener() {
  console.log('EventListener');

  document.addEventListener('click', handleClick, false);
  document.addEventListener('input', handleInput, false);

  // custom relay event
  // document.addEventListener('relay', handleRelay, false);
}

export {
  EventListener
};