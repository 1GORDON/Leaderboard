import { saveToApi, gameID } from './api';

const addScore = () => {
  const addForm = document.querySelector('.add-form');
  const name = document.getElementById('name');
  const score = document.getElementById('score');

  addForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    saveToApi(gameID, name.value, score.value)
    .then((response) => {
      if (response.result === 'Leaderboard scores are well created.') {
        window.location.reload();
      }
    });
  });
};

export default addScore;