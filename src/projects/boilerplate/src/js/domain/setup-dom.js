import handleClicks from './handler/handle-clicks';
import handleInput from './handler/handle-input';
import displayMarkup from './markup/display-markup';

export default async function setupDOM() {
  await displayMarkup();
  addListeners();
}

function addListeners() {
  document.addEventListener('click', handleClicks, false);
  document.addEventListener('input', handleInput, false);
}