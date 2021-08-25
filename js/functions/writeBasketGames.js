// Escribe los partidos de basket en el HTML

const writeBasketGames = (basketGamesArray) => {
    let padreBasket = document.getElementById("basketGames");
    for (const game of basketGamesArray) {
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
        padreBasket.appendChild(acumulador);
    }
}