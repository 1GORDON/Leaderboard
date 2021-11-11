import addScore from './addScore.js';
import recentScores from './recentScores.js';
// import refresh from './refresh';
import { getScores, gameID } from './api.js';
import './style.css';

const loadTable = () => {
  window.onload = () => {
    if (gameID()) {
      getScores(gameID)
        .then((scores) => recentScores(scores));
    }
  };
};

addScore();
// refresh();
loadTable();