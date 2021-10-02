// Compruebo si este usuario ya habia realizado apuestas
(document.getElementById('misApuestas')).innerHTML =`My Bets (${index})`;

// Declaro el array que va a contener todos los partidos
const gamesArray = [];
writeGames('loading')

//  LLamado a la API
fetch('https://api.the-odds-api.com/v4/sports/soccer_argentina_primera_division/odds/?apiKey=090bdc8a81db3f3071a807516addebf3&regions=eu&markets=h2h')
    .then(response => response.json())
    .then(data => data.forEach(game => {
        gamesArray.push(game);
        $(writeGames('soccer_argentina_primera_division'))
    }))
    .catch((error) => console.error(error))

fetch('https://api.the-odds-api.com/v4/sports/soccer_germany_bundesliga/odds/?apiKey=090bdc8a81db3f3071a807516addebf3&regions=eu&markets=h2h')
    .then(response => response.json())
    .then(data => data.forEach(game => gamesArray.push(game)))
    .catch((error) => console.error(error))

fetch('https://api.the-odds-api.com/v4/sports/soccer_uefa_champs_league/odds/?apiKey=090bdc8a81db3f3071a807516addebf3&regions=eu&markets=h2h')
    .then(response => response.json())
    .then(data => data.forEach(game => gamesArray.push(game)))
    .catch((error) => console.error(error))

fetch('https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=090bdc8a81db3f3071a807516addebf3&regions=eu&markets=h2h')
    .then(response => response.json())
    .then(data => data.forEach(game => gamesArray.push(game)))
    .catch((error) => console.error(error))

fetch('https://api.the-odds-api.com/v4/sports/soccer_spain_la_liga/odds/?apiKey=090bdc8a81db3f3071a807516addebf3&regions=eu&markets=h2h')
    .then(response => response.json())
    .then(data => data.forEach(game => gamesArray.push(game)))
    .catch((error) => console.error(error))

fetch('https://api.the-odds-api.com/v4/sports/soccer_france_ligue_one/odds/?apiKey=090bdc8a81db3f3071a807516addebf3&regions=eu&markets=h2h')
    .then(response => response.json())
    .then(data => data.forEach(game => gamesArray.push(game)))
    .catch((error) => console.error(error))

fetch('https://api.the-odds-api.com/v4/sports/soccer_italy_serie_a/odds/?apiKey=090bdc8a81db3f3071a807516addebf3&regions=eu&markets=h2h')
    .then(response => response.json())
    .then(data => data.forEach(game => gamesArray.push(game)))
    .catch((error) => console.error(error))