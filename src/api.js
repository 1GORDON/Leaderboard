const saveToApi = async (username, userscore) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/v4n9rcNTL0SXbCD8IPLG/scores/', {
      method: 'POST',
      body: JSON.stringify({
        user: username,
        score: userscore,
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

const getScores = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/v4n9rcNTL0SXbCD8IPLG/scores/');
    const data = await response.json();
    return data.result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getScores, saveToApi };