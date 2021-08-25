// let mayoriaEdad = checkAge();
// if (mayoriaEdad) {
//     alert(`El equipo 1 es: ${game1.team1} y paga ${game1.odds1}`);
//     alert(`El equipo 2 es: ${game1.team2} y paga ${game1.odds2}`);
//     let teamBet = Number(prompt('¿Quieres apostar al equipo 1 o 2?'));
//     // Declaro variables que luego voy a usar dentro del if
//     let betTeam1 = true;
//     let winAmount;

//     if ((teamBet !== 1) && (teamBet !== 2)) {
//         alert('No elegiste correctamente. Volvé a ingresar a la página para apostar.');
//     } else {
//         if (teamBet === 2) betTeam1 = false;
//         let betAmount = Number(prompt('¿Cuanto queres apostar?'));
//         if (betTeam1 && (betAmount > 0)) {
//             // Llamo al metodo
//             winAmount = game1.bet(betAmount, game1.odds1);
//             alert(`Tus ganancias potenciales son de $${winAmount}`);
//         } else if ((betTeam1 === false) && (betAmount > 0)) {
//             winAmount = game1.bet(betAmount, game1.odds2);
//             alert(`Tus ganancias potenciales son de $${winAmount}`);
//         } else {
//             alert('La cantidad apostada no es valida.');
//         }
//     }
// } else {
//     alert('Los menores de edad no tienen permitido apostar.');
// }


// Declaro el array que contiene todos los partidos
const gamesArray = [];
// Lleno el array - En un futuro lo hare con la API
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Real Madrid", "Champions", 1.25, 5.25));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Barcelona", "Champions", 2.3, 4.5));
gamesArray.push(new GamesOdds("Tenis", "Nadal", "Federer", "Wimbledon", 5.5, 3.2));
gamesArray.push(new GamesOdds("Futbol", "Gimnasia LP", "Man Utd", "Champions", 1.1, 9.1));
gamesArray.push(new GamesOdds("Basket", "Nets", "Lakers", "NBA", 2.2, 4.9));
// Creo arrays con partidos de distintos deportes
const futbolGamesArray = gamesArray.filter(game => game.sport.toLowerCase() === "futbol");
const tenisGamesArray = gamesArray.filter(game => game.sport.toLowerCase() === "tenis");
const basketGamesArray = gamesArray.filter(game => game.sport.toLowerCase() === "basket");
// Llamo a las funciones que escriben los partidos en el HTML
writeFutbolGames(futbolGamesArray);
writeBasketGames(basketGamesArray);
writeTenisGames(tenisGamesArray);