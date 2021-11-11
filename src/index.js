import addScore from './addScore.js';
import recentScores from './recentScores.js';
import { getScores } from './api.js';
import './style.css';

const tableContent = document.querySelector('.scoreboard-table');

const myFunction = async () => {
  const myValue = await getScores();
  recentScores(myValue);
  addScore();
};

myFunction();

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', () => {
  tableContent.innerHTML = '';
  myFunction();
});