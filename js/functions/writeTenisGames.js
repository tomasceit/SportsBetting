// Escribe los partidos de tenis en el HTML

const writeTenisGames = (tenisGamesArray) => {
    let padreTenis = document.getElementById("tenisGames");
    for (const game of tenisGamesArray) {
        acumulador = document.createElement("tr");
        acumulador.innerHTML = `<td class="gameDate">
                                    <div class="d-flex flex-column text-center">
                                        <span>DIA/MES/AÑO</span>
                                        <span>HORA:MIN</span>
                                    </div>
                                </td>
                                <td class="gameName">
                                    <div class="d-flex flex-column text-center" style="width: 275px">
                                        <span>${game.team1}</span>
                                        <span>${game.team2}</span>
                                    </div>
                                </td>
                                <td class="gameOdds1"><button class="btn btn-dark btn-odds" type="button" onclick="placeBetHome(event)" style="width: 70px">${game.odds1}</button></td>
                                <td class="gameOdds2"><button class="btn btn-dark btn-odds" type="button" onclick="placeBetAway(event)" style="width: 70px">${game.odds2}</button></td>`;
        padreTenis.appendChild(acumulador);
    }
}