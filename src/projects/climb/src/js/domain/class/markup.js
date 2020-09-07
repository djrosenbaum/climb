import handleClicks from './handler/handle-clicks';
import handleInput from './handler/handle-input';

function Markup() {
  addListeners();
}

function addListeners() {
  document.addEventListener('click', handleClicks, false);
  document.addEventListener('input', handleInput, false);
}

export default Markup;