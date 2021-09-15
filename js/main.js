// Declaro el array que va a contener todos los partidos
const gamesArray = [];
// Lleno el array - En un futuro lo hare con la API
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Real Madrid", "Champions", 1.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "FC Barcelona", "Champions", 2.31, 4.58));
gamesArray.push(new GamesOdds("Tenis", "Rafael Nadal", "Roger Federer", "Wimbledon", 5.55, 3.22));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Man Utd", "Champions", 1.15, 9.15));
gamesArray.push(new GamesOdds("Basket", "Brooklyn Nets", "LA Lakers", "NBA", 2.23, 4.99));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Liverpool", "Champions", 1.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Boca Juniors", "Torneo nietos recuperados", 1.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "River Plate", "Torneo nietos recuperados", 3.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "San Lorenzo", "Torneo nietos recuperados", 4.65, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Velez", "Torneo nietos recuperados", 2.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Huracan", "Torneo nietos recuperados", 1.56, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Sarmiento", "Torneo nietos recuperados", 1.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Patronato", "Torneo nietos recuperados", 1.25, 5.25));
// Agrego Ids a los partidos
let i = 1;
gamesArray.forEach(game => {
    game.gameId = i.toString();
    i++
})
// Llamo a la funcion que escribe los partidos en el HTML
$(writeGames());
(document.getElementById('misApuestas')).innerHTML = (localStorage.length !== 0) ? `My Bets (${localStorage.length - 1})` : `My Bets (0)`;

