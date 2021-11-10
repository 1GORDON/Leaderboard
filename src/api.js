const url = '';

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
    const json = await response.json();
    const gameId = json.result.split(' ')[3];
    localStorage.setItem('gameID', JSON.stringify(gameId));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const gameID = () => {
  const id = JSON.parse(localStorage.getItem('gameID'));

  if (!id) {
    createGame();
  }
  return id;
};

export const saveToApi = async (gameID, user, score) => {
  try {
    const response = await fetch(``), {
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

export const getScores = async (gameID) => {
  try {
    const response = await fetch(``);
    const data = await response.json();
    return data.result;
  } catch (error) {
    throw new Error(error.message);
  }
};