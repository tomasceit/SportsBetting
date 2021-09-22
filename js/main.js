// Declaro el array que va a contener todos los partidos
const gamesArray = [];
writeGames('loading')
//  LLamado a la API
fetch('https://api.the-odds-api.com/v4/sports/soccer_argentina_primera_division/odds/?apiKey=607954df37c9a475e3388bde22a852ff&regions=eu&markets=h2h')
    .then(response => response.json())
    .then(data => data.forEach(game => {
        gamesArray.push(game);
        $(writeGames('soccer_argentina_primera_division'));
    }));

fetch('https://api.the-odds-api.com/v4/sports/soccer_germany_bundesliga/odds/?apiKey=607954df37c9a475e3388bde22a852ff&regions=eu&markets=h2h')
    .then(response => response.json())
    .then(data => data.forEach(game => gamesArray.push(game)));

fetch('https://api.the-odds-api.com/v4/sports/soccer_uefa_champs_league/odds/?apiKey=607954df37c9a475e3388bde22a852ff&regions=eu&markets=h2h')
    .then(response => response.json())
    .then(data => data.forEach(game => { gamesArray.push(game); })
    );
fetch('https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=607954df37c9a475e3388bde22a852ff&regions=eu&markets=h2h')
    .then(response => response.json())
    .then(data => data.forEach(game => { gamesArray.push(game); })
    );
fetch('https://api.the-odds-api.com/v4/sports/soccer_spain_la_liga/odds/?apiKey=607954df37c9a475e3388bde22a852ff&regions=eu&markets=h2h')
    .then(response => response.json())
    .then(data => data.forEach(game => { gamesArray.push(game); })
    );
fetch('https://api.the-odds-api.com/v4/sports/soccer_france_ligue_one/odds/?apiKey=607954df37c9a475e3388bde22a852ff&regions=eu&markets=h2h')
    .then(response => response.json())
    .then(data => data.forEach(game => { gamesArray.push(game); })
    );
fetch('https://api.the-odds-api.com/v4/sports/soccer_italy_serie_a/odds/?apiKey=607954df37c9a475e3388bde22a852ff&regions=eu&markets=h2h')
    .then(response => response.json())
    .then(data => data.forEach(game => { gamesArray.push(game); })
    );

// Llamo a la funcion que escribe los partidos en el HTML

(document.getElementById('misApuestas')).innerHTML = (localStorage.length !== 0) ? `My Bets (${localStorage.length - 1})` : `My Bets (0)`;