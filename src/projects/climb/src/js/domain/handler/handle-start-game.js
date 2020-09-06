import app from '../app';

export default async function handleStartGame() {
  console.log('start game');

  app.room.update({
    status: 'rules',
  }).then(() => {
    console.log('show the rules');
  });
}