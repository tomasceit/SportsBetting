// Declaro el array que va a contener todos los partidos
const gamesArray = [];
// Lleno el array - En un futuro lo hare con la API
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Real Madrid", "Champions", 1.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Barcelona", "Champions", 2.31, 4.58));
gamesArray.push(new GamesOdds("Tenis", "Rafael Nadal", "Roger Federer", "Wimbledon", 5.55, 3.22));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Man Utd", "Champions", 1.15, 9.15));
gamesArray.push(new GamesOdds("Basket", "Brooklyn Nets", "LA Lakers", "NBA", 2.23, 4.9));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Liverpool", "Champions", 1.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Boca", "Champions", 1.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "River", "Champions", 3.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "San Lorenzo", "Champions", 4.65, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Velez", "Champions", 2.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Huracan", "Champions", 1.56, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Sarmiento", "Champions", 1.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Patronato", "Champions", 1.25, 5.25));
// Agrego Ids a los partidos
let i=1;
gamesArray.forEach(game => {
    game.gameId = i.toString();
    i++
})
// Llamo a las funciones que escriben los partidos en el HTML
writeGames();