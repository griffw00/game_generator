const get_game_btn = document.getElementById('get-game');
const game_container = document.getElementById('game');

get_game_btn.addEventListener('click', async () => {
  try {
    const gameData = await fetchGame();
    updateGameInfo(gameData);
  } catch (error) {
    console.error(error);
  }
});

async function fetchGame() {
  let randomGameID = Math.floor(Math.random() * 500 + 1);
  let url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${randomGameID}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1610ea2cffmsh1cf73b7f1e96e66p1ce36cjsn342019db238f',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  let response = await fetch(url, options);

  // Loop until our randomGameID is valid
  // Unsure how the gameID in the API database is assigned
  while (!response.ok) {
    randomGameID = Math.floor(Math.random() * 500 + 1);
    url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${randomGameID}`;
    response = await fetch(url, options);
  }

  const result = await response.json();
  console.log(result);  
  return result;
}

function updateGameInfo(gameData) {
  // Extract the required fields from the gameData
  const { title, screenshots, short_description, genre, minimum_system_requirements} = gameData;

    
  // Create HTML elements to display the game information
  const gameInfoHTML = `
    <h2 class="game-info">${title}</h2>
	<img class="game-info" src="${screenshots[0].image}">
    <p class="game-info desc">${short_description}</p>
    <p class="game-info text">Genre: ${genre}</p>
	<p class = "game-info text"> GPU: ${minimum_system_requirements.graphics}</p>
	<p class = "game-info text"> Memory: ${minimum_system_requirements.memory}</p>
	<p class = "game-info text"> OS: ${minimum_system_requirements.os}</p>
	<p class = "game-info text"> Processor: ${minimum_system_requirements.processor}</p>
	<p class = "game-info text"> Storage: ${minimum_system_requirements.storage}</p>
  `;

  // Update the game_container with the new information
  game_container.innerHTML = gameInfoHTML;
}