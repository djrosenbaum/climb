import setupDOM from './setup-dom';
import setupState from './setup-state';

export default async function init() {
  await setupState();
  await setupDOM();
}