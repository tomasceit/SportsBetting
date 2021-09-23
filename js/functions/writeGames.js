let acumulador;

// Escribe los partidos de futbol en el HTML
const writeGames = (filtro) => {
    let padre = document.getElementById('games');
    // Elige que deporte mostrar
    let newGamesArray = gamesArray.filter(game => game.sport_key.toLowerCase() === filtro);

    if (filtro === 'loading') {
        padre.innerHTML = `<h4 class="mt-5 text-center">Loading...</h4>`;
        return;
    }

    // En caso de que no haya partidos de esa competicion
    if (newGamesArray.length === 0) {
        padre.innerHTML = `<h4 class="mt-5 text-center">En este momento no tenemos disponibles partidos de esta competicion</h4>`;
        return;
    }

    // Escribe los partidos
    padre.innerHTML = `<thead><tr class="game"><th></th>
    <th></th>
    <th>HOME</th>
    <th>DRAW</th>
    <th>AWAY</th></tr></thead>`;
    newGamesArray.forEach(game => {
        let game_date = game.commence_time.slice(0, 10);
        let game_hour = game.commence_time.slice(11, 16);
        let gameodds1 = getOdds(game, 'home')
        let gameodds2 = getOdds(game, 'away')
        let gamedraw = getOdds(game, 'draw')
        acumulador = document.createElement("tr");
        acumulador.id = `game_${game.id}`;
        acumulador.className = `${filtro}_game`;
        acumulador.innerHTML = `<td>
                                    <div class="d-flex flex-column text-center">
                                        <span>${game_date}</span>
                                        <span>${game_hour} hs</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex flex-column text-center" style="width: 220px">
                                        <span>${game.home_team}</span>
                                        <span>${game.away_team}</span>
                                    </div>
                                </td>
                                <td><button class="btn btn-green btn-odds" type="button" onclick="placeBet('home', '${(game.id).toString()}')" style="width: 70px">${gameodds1.toFixed(2)}</button></td>
                                <td><button class="btn btn-green btn-odds" type="button" onclick="placeBet('draw', '${(game.id).toString()}')" style="width: 70px">${gamedraw.toFixed(2)}</button></td>
                                <td><button class="btn btn-green btn-odds" type="button" onclick="placeBet('away', '${(game.id).toString()}')" style="width: 70px">${gameodds2.toFixed(2)}</button></td>`;
        padre.appendChild(acumulador);
    });
}

// Obtener las odds
const getOdds = (partido, wich) => {
    const hometeam = partido.home_team;
    const awayteam = partido.away_team;
    let variable = (partido.bookmakers).find(game => game.key === 'betfair' || 'onexbet');
    variable = (variable.markets).find(game => game.key === 'h2h');
    if (wich === 'home') {
        variable = (variable.outcomes).find(game => game.name === hometeam);
        return variable.price;
    } else if (wich === 'away') {
        variable = (variable.outcomes).find(game => game.name === awayteam);
        return variable.price;
    } else {
        variable = (variable.outcomes).find(game => game.name === 'Draw');
        return variable.price;
    }
}