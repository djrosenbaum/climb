// import setupDOM from './setup-dom';
// import Game from './enter-room/game';
// import Markup from './class/markup';
import { EventListener } from './class/event-listener';
import { app } from './app';

function init() {
  app.eventListener = new EventListener();
};

export {
  init
}