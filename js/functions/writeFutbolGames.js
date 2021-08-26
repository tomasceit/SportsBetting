// Escribe los partidos de futbol en el HTML
let acumulador;
const writeFutbolGames = (futbolGamesArray) => {
    let padreFutbol = document.getElementById("futbolGames");
    for (const game of futbolGamesArray) {
        acumulador = document.createElement("tr");
        acumulador.innerHTML = `<td>
                                    <div class="d-flex flex-column text-center">
                                        <span>DIA/MES/AÑO</span>
                                        <span>HORA:MIN</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column text-center" style="width: 220px">
                                        <span>${game.team1}</span>
                                        <span>${game.team2}</span>
                                    </div>
                                </td>
                                <td><button class="btn btn-dark" type="button" style="width: 70px">${game.odds1}</button></td>
                                <td><button class="btn btn-dark" type="button" style="width: 70px">DRAW</button></td>
                                <td><button class="btn btn-dark" type="button" style="width: 70px">${game.odds2}</button></td>`;
        padreFutbol.appendChild(acumulador);
    }
}