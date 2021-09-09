let acumulador;

// Escribe los partidos de futbol en el HTML
const writeGames = (filtro = 'futbol') => {
    let padre = document.getElementById('games');
    // Elige que deporte mostrar
    let newGamesArray = gamesArray.filter(game => game.sport.toLowerCase() === filtro);
    // En caso de que no haya partidos de ese deporte
    if (newGamesArray.length === 0) {
        padre.innerHTML = `<h4 class="mt-5 text-center">En este momento no tenemos disponibles partidos de este deporte</h4>`;
        return;
    }
    // Escribe los partidos
    padre.innerHTML = `<thead><tr class="game"><th></th>
    <th></th>
    <th>HOME</th>
    <th>AWAY</th></tr></thead>`;
    newGamesArray.forEach(game => {
        acumulador = document.createElement("tr");
        acumulador.id = `game${game.gameId}`;
        acumulador.className = `${filtro}Game`;
        acumulador.innerHTML = `<td>
                                    <div class="d-flex flex-column text-center">
                                        <span>DIA/MES/AÑO</span>
                                        <span>HORA:MIN</span>
                                    </div>
                                </td>
                                <td id="nameGame${game.gameId}">
                                    <div class="d-flex flex-column text-center" style="width: 220px">
                                        <span>${game.team1}</span>
                                        <span>${game.team2}</span>
                                    </div>
                                </td>
                                <td><button class="btn btn-green btn-odds" type="button" onclick="placeBet('home', ${game.gameId})" style="width: 70px">${game.odds1}</button></td>
                                <td><button class="btn btn-green btn-odds" type="button" onclick="placeBet('away', ${game.gameId})" style="width: 70px">${game.odds2}</button></td>`;
        padre.appendChild(acumulador);
    });
}