// Escribe los partidos de basket en el HTML

const writeBasketGames = (basketGamesArray) => {
    let padreBasket = document.getElementById("basketGames");
    for (const game of basketGamesArray) {
        acumulador = document.createElement("tr");
        acumulador.innerHTML = `<td>
                                    <div class="d-flex flex-column text-center">
                                        <span>DIA/MES/AÑO</span>
                                        <span>HORA:MIN</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column text-center" style="width: 275px">
                                        <span>${game.team1}</span>
                                        <span>${game.team2}</span>
                                    </div>
                                </td>
                                <td><button class="btn btn-dark btn-odds" type="button" style="width: 70px">${game.odds1}</button></td>
                                <td><button class="btn btn-dark btn-odds" type="button" style="width: 70px">${game.odds2}</button></td>`;
        padreBasket.appendChild(acumulador);
    }
}