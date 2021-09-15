// Se fija si ya se ha realizado alguna apuesta para no pisarla al guardarla
let index = (localStorage.getItem('index') !== null) ? Number(localStorage.getItem('index')) + 1 : 0;
// Guarda la apuesta realizada en el localStorage
const bet = () => {
    localStorage.setItem('index', index);
    let betAmount = Number(document.getElementById('betAmount').value);
    let betOddsTotal = Number(document.getElementById('totalOdd').innerHTML);
    let potentialWins = Number(document.getElementById('pb1').value);
    let coin = (document.getElementById("navbarDropdownMenuLink")).innerHTML;
    let betMade = { betId: index, coinUsed: coin, betAmount: betAmount, betOddsTotal: betOddsTotal, potentialWins: potentialWins };
    localStorage.setItem(betMade.betId, JSON.stringify(betMade));
    removeAllBets();
    index++;
    verApuestas();
}

const verApuestas = () => {
    const betsMade = [];
    for (let l = 0; l < (localStorage.length - 1); l++) {
        betsMade.push(JSON.parse(localStorage.getItem(l)))
    }
    let ahre = document.getElementById('misApuestas')
    ahre.innerHTML = `My Bets (${betsMade.length})`

    padre = document.getElementById('card-body');
    if (betsMade.length === 0) {
        padre.innerHTML = `<h5 class="text-center mt-2">Todavia no realizaste apuestas</h5><hr />`;
        return;
    }
    padre.innerHTML = `<h5>Apuestas realizadas</h5><hr />`;
    betsMade.forEach(element => {
        acumulador = document.createElement('div')
        acumulador.className = 'mt-1'
        acumulador.innerHTML = `
        <p>Id de la apuesta: ${element.betId}</p>
        <p>Monto de la apuesta: $${element.betAmount}</p>
        <p>Odds de la apuesta: ${element.betOddsTotal}</p>
        <p>Potenciales ganancias: $${element.potentialWins}</p>
        <p>Moneda: ${element.coinUsed}</p>
        <hr />
        `;
        padre.appendChild(acumulador);
    });
}