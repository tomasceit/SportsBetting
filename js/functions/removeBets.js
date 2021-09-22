// Funcion que elimina todas las apuestas colocadas
const removeAllBets = () => {
    elem = document.getElementById("card-body");
    elem.innerHTML = `<p class="text-center">Para realizar una apuesta clickea en las probabilidades</p>`;
    betGames.length = 0;
}

// Funcion que elimina solo la apuesta seleccionada
const removeThatBet = (thatGameId, odds) => {
    if (betGames.length === 1) {
        removeAllBets();
        return;
    }
    document.getElementById(`game${thatGameId}Bet`).remove();
    betGames = betGames.filter(game => game.id !== thatGameId.toString());
    let newOdds = Number(document.getElementById("totalOdd").innerHTML);
    newOdds = Number((newOdds / odds).toFixed(2));
    document.getElementById("totalOdd").innerHTML = newOdds;
}

// Obtener las odds
const getOdds = (partido, wich) => {
    const hometeam = partido.home_team;
    const awayteam = partido.away_team;
    let qsy = (partido.bookmakers).find(game => game.key === 'betfair' || 'onexbet');
    qsy = (qsy.markets).find(game => game.key === 'h2h');
    if (wich === 'home') {
        qsy = (qsy.outcomes).find(game => game.name === hometeam);
        return qsy.price;
    } else if (wich === 'away') {
        qsy = (qsy.outcomes).find(game => game.name === awayteam);
        return qsy.price;
    } else {
        qsy = (qsy.outcomes).find(game => game.name === 'Draw');
        return qsy.price;
    }
}