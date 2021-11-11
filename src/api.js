const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const createGame = async () => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name: 'newGame',
      }),
      header: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });
    const newPost = await response.json();
    const gameId = newPost.result.split(' ')[3];
    localStorage.setItem('gameID', JSON.stringify(gameId));
  } catch (error) {
    throw new Error(error.message);
  }
};

const gameID = () => {
  const id = JSON.parse(localStorage.getItem('gameID'));

  if (!id) {
    createGame();
  }
  return id;
};

const saveToApi = async (gameID, user, score) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/v4n9rcNTL0SXbCD8IPLG/scores/', {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const getScores = async (gameID) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID()}/scores/`);
    const data = await response.json();
    return data.result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getScores, saveToApi, gameID };