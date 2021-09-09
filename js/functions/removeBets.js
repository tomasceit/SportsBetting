// Funcion que elimina todas las apuestas colocadas
function removeAllBets() {
    elem = document.getElementById("card-body");
    elem.innerHTML = `<p class="text-center">Para realizar una apuesta, clickea en las probabilidades</p>`;
    betGames.length = 0;
}
// Funcion que elimina solo la apuesta seleccionada
function removeThatBet(thatGameId, odds) {
    if (betGames.length === 1) {
        removeAllBets();
        return;
    }
    document.getElementById(`game${thatGameId}Bet`).remove();
    betGames = betGames.filter(game => game.gameId !== thatGameId.toString());
    let newOdds = Number(document.getElementById("totalOdd").innerHTML);
    newOdds = Number((newOdds / odds).toFixed(2));
    document.getElementById("totalOdd").innerHTML = newOdds;
}