// Array donde se guardaran las apuestas a realizar
let betGames = [];
// Funcion que coloca las apuestas
function placeBet(filtro, Id) {
    // Encuentro el partido por el que se aposto
    const resultado = gamesArray.find(game => game.gameId === Id.toString());
    // Compruebo qué boton se apretó
    let betTeam = (filtro === 'home') ? "HomeWin | 1" : "AwayWin | 2";
    resultado.whoWins = betTeam;
    // Lo pongo en un array donde iran todas las apuestas a realizar
    betGames.push(resultado);
    writeBets();
}
// Funcion que calcula la apuesta
function calculateBet(e) {
    let x = Number(document.getElementById('totalOdd').innerHTML);
    let potentialWins = x * Number(e.value);
    let odds = document.getElementById("pb1");
    odds.value = potentialWins.toFixed(2);
    document.getElementById("pb1").innerHTML = `$${odds.value}`;
}
// Funcion que muestra las apuestas
function writeBets() {
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
        // Coloco la apuesta en la card
        const odds = (game.whoWins === "HomeWin | 1") ? game.odds1 : game.odds2;
        totalOdds = totalOdds * odds;
        ryz = document.createElement("div");
        ryz.id = `game${game.gameId}Bet`
        ryz.innerHTML = `<div class="d-flex flex-column">
                                <div class="d-flex justify-content-between">
                                    <h5>${game.whoWins}</h5>
                                    <button type="button" class="close pb-2" onclick="removeThatBet(${game.gameId}, ${odds})" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="d-flex mb-2 justify-content-between align-items-center">
                                    <span><div class="d-flex flex-column text-center">
                                        <span>${game.team1} vs</span>
                                        <span>${game.team2}</span>
                                    </div></span>
                                    <span>${odds}</span>
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