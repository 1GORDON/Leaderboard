import { saveToApi } from './api.js';

const addScore = () => {
  const addForm = document.querySelector('.add-form');
  const name = document.getElementById('name');
  const score = document.getElementById('score');

  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveToApi(name.value, score.value)
      .then((response) => {
        if (response.result === 'Leaderboard scores are well created.') {
          window.reload();
        }
      });
  });
};

export default addScore;