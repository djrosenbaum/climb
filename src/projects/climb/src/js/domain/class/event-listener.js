import { handleClick } from '../handler/handle-click';
import { handleInput } from '../handler/handle-input';

function EventListener() {
  document.addEventListener('click', handleClick, false);
  document.addEventListener('input', handleInput, false);
}

export {
  EventListener
};