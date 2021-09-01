// Declaro el array que contiene todos los partidos
const gamesArray = [];
// Lleno el array - En un futuro lo hare con la API
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Real Madrid", "Champions", 1.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Barcelona", "Champions", 2.3, 4.5));
gamesArray.push(new GamesOdds("Tenis", "Nadal", "Federer", "Wimbledon", 5.5, 3.2));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Man Utd", "Champions", 1.1, 9.1));
gamesArray.push(new GamesOdds("Basket", "Nets", "Lakers", "NBA", 2.2, 4.9));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Real Madrid", "Champions", 1.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Boca", "Champions", 1.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "River", "Champions", 3.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "San Lorenzo", "Champions", 4.6, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Velez", "Champions", 2.2, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Huracan", "Champions", 1.56, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Sarmiento", "Champions", 1.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Patronato", "Champions", 1.25, 5.25));
// Creo arrays con partidos de distintos deportes
const futbolGamesArray = gamesArray.filter(game => game.sport.toLowerCase() === "futbol");
const tenisGamesArray = gamesArray.filter(game => game.sport.toLowerCase() === "tenis");
const basketGamesArray = gamesArray.filter(game => game.sport.toLowerCase() === "basket");
// Llamo a las funciones que escriben los partidos en el HTML
writeFutbolGames(futbolGamesArray);
writeBasketGames(basketGamesArray);
writeTenisGames(tenisGamesArray);