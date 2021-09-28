// Se fija si ya se ha realizado alguna apuesta para no pisarla al guardarla
let index = (localStorage.getItem('index') !== null) ? Number(localStorage.getItem('index')) + 1 : 0;

// Guarda la apuesta realizada en el localStorage
const bet = () => {
    localStorage.setItem('index', index)
    let betAmount = Number(document.getElementById('betAmount').value)
    let betOddsTotal = Number(document.getElementById('totalOdd').innerHTML)
    let potentialWins = Number(document.getElementById('pb1').value)
    let coin = (document.getElementById("navbarDropdownMenuLink")).innerHTML
    let betMade = { betId: index, coinUsed: coin, betAmount: betAmount, betOddsTotal: betOddsTotal, potentialWins: potentialWins }
    let item = localStorage.getItem("betsMade")
    let almacenados = []
    if (item) {
        almacenados = JSON.parse(item)
    }
    almacenados.push(betMade)
    localStorage.setItem("betsMade", JSON.stringify(almacenados))
    removeAllBets()
    index++;
    showBets()
}

const showBets = () => {
    padre = document.getElementById('card-body')
    
    let item = localStorage.getItem("betsMade")
    if (!item) {
        padre.innerHTML = `<h5 class="text-center mt-2">Todavia no realizaste apuestas</h5><hr />`;
        return
    }
    let betsMade = JSON.parse(item)

    let variable = document.getElementById('misApuestas')
    variable.innerHTML = `My Bets (${betsMade.length})`

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
        padre.appendChild(acumulador)
    });
}