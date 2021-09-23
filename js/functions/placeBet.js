// Array donde se guardaran las apuestas a realizar
let betGames = [];

// Funcion que coloca las apuestas
const placeBet = (filtro, realId) => {
    // Me fijo si ya se habia apostado por este partido
    let alreadyBet = betGames.find(game => game.id === realId);
    if (alreadyBet !== undefined) { betGames = betGames.filter(game => game.id !== realId) }
    // Encuentro el partido por el que se aposto
    const resultado = gamesArray.find(game => game.id === realId);
    // Chequeo qué boton se apretó
    let betTeam;
    if (filtro === 'home') {
        betTeam = "HomeWin | 1";
    } else if (filtro === 'away') {
        betTeam = "AwayWin | 2";
    } else {
        betTeam = "Draw | X"
    }
    resultado.whoWins = betTeam;
    // Lo pongo en un array donde iran todas las apuestas a realizar
    betGames.push(resultado);
    betSlip();
}

// Funcion que muestra las apuestas
const betSlip = () => {
    if (betGames.length === 0) {
        elem = document.getElementById("card-body");
        elem.innerHTML = `<p class="text-center">Para realizar una apuesta clickea en las probabilidades</p>`;
        return;
    }
    // Creo el 'remove all'
    let padre = document.getElementById("card-body");
    padre.innerHTML = `<div class="d-flex justify-content-end mb-1">
                            <a href="#" onclick="removeAllBets()">Remove all bets</a>
                        </div><hr />`;
    let totalOdds = 1;
    // Escribo todos los partidos que se encuentren en este array
    betGames.forEach(game => {
        // Consigo las odds de la API
        let gameodds1 = getOdds(game, 'home')
        let gamedraw = getOdds(game, 'draw')
        let gameodds2 = getOdds(game, 'away')
        // Coloco la apuesta en la card
        let odds;
        if (game.whoWins === "HomeWin | 1") {
            odds = gameodds1;
        } else if (game.whoWins === "AwayWin | 2") {
            odds = gameodds2;
        } else {
            odds = gamedraw;
        }
        totalOdds = totalOdds * odds;
        ryz = document.createElement("div");
        ryz.id = `game${game.id}Bet`
        ryz.innerHTML = `<div class="d-flex flex-column">
                                <div class="d-flex justify-content-between">
                                    <h5>${game.whoWins}</h5>
                                    <button type="button" class="close pb-2" onclick="removeThatBet('${game.id}', ${odds.toFixed(2)})" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="d-flex mb-2 justify-content-between align-items-center">
                                    <span><div class="d-flex flex-column">
                                        <span>${game.home_team} vs</span>
                                        <span>${game.away_team}</span>
                                    </div></span>
                                    <span>${odds.toFixed(2)}</span>
                                </div>
                         </div><hr />`;
        padre.appendChild(ryz);
    });
    // Creo el lugar donde ira la cantidad a apostar
    ryz = document.createElement("div");
    ryz.id = 'betSlot';
    ryz.innerHTML = `<div class="d-flex justify-content-between align-items-center">
                        <span> CANTIDAD: </span>
                        <input id="betAmount" type="number" placeholder="Bet" oninput="calculateBet(this)" class="text-center" style="width: 110px">
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <span> ODDS: </span>
                        <span id="totalOdd">${totalOdds.toFixed(2)}</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-1 overflow-hidden">
                        <span> Potenciales ganancias:</span>
                        <span id="pb1" class="pl-3">0.00</span>
                    </div>
                    <div class="d-flex justify-content-end mt-3">
                        <button class="btn btn-green" type="submit" onclick="bet()" style="width: 120px">APOSTAR</button>
                    </div>
                    <hr />`;
    padre.appendChild(ryz);
}

// Funcion que calcula la apuesta
const calculateBet = (e) => {
    let x = Number(document.getElementById('totalOdd').innerHTML);
    let potentialWins = x * Number(e.value);
    let odds = document.getElementById("pb1");
    odds.value = potentialWins.toFixed(2);
    document.getElementById("pb1").innerHTML = `$${odds.value}`;
}

// Con este metodo jQuery modifico el DOM
const chooseCoin = (coin) => {
    $('#navbarDropdownMenuLink').html(`${coin}`)
}