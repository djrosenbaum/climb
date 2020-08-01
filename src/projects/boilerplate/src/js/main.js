import app from './domain/app';
import init from './domain/init';

window.app = app;

document.addEventListener('DOMContentLoaded', init);