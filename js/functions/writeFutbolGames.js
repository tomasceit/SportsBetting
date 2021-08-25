// Escribe los partidos de futbol en el HTML
let acumulador;
const writeFutbolGames = (futbolGamesArray) => {
    let padreFutbol = document.getElementById("futbolGames");
    for (const game of futbolGamesArray) {
        acumulador = document.createElement("div");
        acumulador.innerHTML = `<div class="d-flex justify-content-around align-items-center">
                                <span>Fecha</span>
                                <div class="d-flex flex-column text-center" style="width: 200px">
                                    <span>${game.team1}</span>
                                    <span>${game.team2}</span>
                                </div>
                                <button class="btn btn-dark" type="button" style="width: 70px">${game.odds1}</button>
                                <button class="btn btn-dark" type="button" style="width: 70px">${game.odds2}</button>
                            </div>`;
        padreFutbol.appendChild(acumulador);
    }
}