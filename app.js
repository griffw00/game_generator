const get_game_btn = document.getElementById('get_game'); 
const game_container = document.getElementById('game');

// Fetching from IGDB API
const apiKey = 'YOUR_API_KEY';
const endpoint = 'https://api.igdb.com/v4/games';
const body = 'fields name,release_dates.*,cover.*,genres.*; where name = "Halo 5: Guardians";';
const headers = new Headers();
headers.append('Accept', 'application/json');
headers.append('hb62nmo2yk694lb17kyctooz3vhhqb', apiKey);
headers.append('Authorization', `Bearer ${o7nbea4kzn89qu7kps5gxfjdkhxkq}`);

fetch(endpoint, {
  method: 'POST',
  headers,
  body
}).then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));