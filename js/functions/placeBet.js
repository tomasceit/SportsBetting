function bet(a, e) {
    let potentialWins = a * Number(e.value);
    let odds = document.getElementById("pb1");
    odds.value = potentialWins.toFixed(2);
    document.getElementById("pb1").innerHTML = odds.value;
}

function placeBetHome(e) {
    // Saco el texto que indica como apostar
    let elem = document.getElementById("removeInfo");
    if (elem !== null) elem.remove();
    // Si ya hay alguna apuesta colocada la quito
    elem = document.getElementById("gameBet");
    if (elem !== null) elem.remove();
    // Coloco la apuesta en la card
    let odds1 = e.target.innerHTML;
    let odds = document.createElement("div");
    odds.id = "gameBet";
    odds.innerHTML = `<div class="d-flex flex-column">
                            <div class="d-flex">
                                <h5 class="mr-7">HomeWin | 1</h5>
                                <button type="button" class="close pb-2" onclick="removeBet()" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="d-flex mb-4">
                                <span class="mr-7">Game Name</span>
                                <span class="pl-3">1 x 2</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <span class="mr-5"> CANTIDAD: </span>
                            <input type="number" placeholder="Bet" oninput="bet(${odds1},this)" style="width: 110px">
                        </div>
                        <div class="d-flex align-items-center mt-2">
                            <span class="mr-7"> ODDS: </span>
                            <strong class="ml-5 pl-3"> ${odds1} </strong>
                        </div>
                        <div class="d-flex align-items-center mt-1 overflow-hidden">
                            <span class="mr-5"> Potenciales ganancias:</span>
                            <span id="pb1">0.00</span>
                        </div>
                        <div class="d-flex justify-content-end mt-2">
                            <button class="btn btn-green" type="submit" onclick= style="width: 70px">APOSTAR</button>
                        </div>
                        <hr />`;
    let padre = document.getElementById("card-body");
    padre.appendChild(odds)
}

function placeBetDraw(e) {
    // Saco el texto que indica como apostar
    let elem = document.getElementById("removeInfo");
    if (elem !== null) elem.remove();
    // Si ya hay alguna apuesta colocada la quito
    elem = document.getElementById("gameBet");
    if (elem !== null) elem.remove();
    // Coloco la apuesta en la card
    let odds1 = e.target.innerHTML;
    let odds = document.createElement("div");
    odds.id = "gameBet";
    odds.innerHTML = `<div class="d-flex flex-column">
                            <div class="d-flex">
                                <h5 class="mr-7">Draw | x</h5>
                                <button type="button" class="close pb-2 ml-5" onclick="removeBet()" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="d-flex mb-4">
                                <span class="mr-7">Game Name</span>
                                <span class="pl-3">1 x 2</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <span class="mr-5"> CANTIDAD: </span>
                            <input type="number" placeholder="Bet" oninput="bet(${odds1},this)" style="width: 110px">
                        </div>
                        <div class="d-flex align-items-center mt-2">
                            <span class="mr-7"> ODDS: </span>
                            <strong class="ml-5 pl-2"> ${odds1} </strong>
                        </div>
                        <div class="d-flex align-items-center mt-1 overflow-hidden">
                            <span class="mr-5"> Potenciales ganancias:</span>
                            <span id="pb1">0.00</span>
                        </div>
                        <div class="d-flex justify-content-end mt-2">
                            <button class="btn btn-green" type="submit" onclick= style="width: 70px">APOSTAR</button>
                        </div>
                        <hr />`;
    let padre = document.getElementById("card-body");
    padre.appendChild(odds)
}

function placeBetAway(e) {
    // Saco el texto que indica como apostar
    let elem = document.getElementById("removeInfo");
    if (elem !== null) elem.remove();
    // Si ya hay alguna apuesta colocada la quito
    elem = document.getElementById("gameBet");
    if (elem !== null) elem.remove();
    // Coloco la apuesta en la card
    let odds1 = e.target.innerHTML;
    let odds = document.createElement("div");
    odds.id = "gameBet";
    odds.innerHTML = `<div class="d-flex flex-column">
                            <div class="d-flex">
                                <h5 class="mr-7">Away Win | 2</h5>
                                <button type="button" class="close pb-2" onclick="removeBet()" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="d-flex mb-4">
                                <span class="mr-7">Game Name</span>
                                <span class="pl-3">1 x 2</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <span class="mr-5"> CANTIDAD: </span>
                            <input type="number" placeholder="Bet" oninput="bet(${odds1},this)" style="width: 110px">
                        </div>
                        <div class="d-flex align-items-center mt-2">
                            <span class="mr-7"> ODDS: </span>
                            <strong class="ml-5 pl-3"> ${odds1} </strong>
                        </div>
                        <div class="d-flex align-items-center mt-1 overflow-hidden">
                            <span class="mr-5"> Potenciales ganancias:</span>
                            <span id="pb1">0.00</span>
                        </div>
                        <div class="d-flex justify-content-end mt-2">
                            <button class="btn btn-green" type="submit" onclick= style="width: 70px">APOSTAR</button>
                        </div>
                        <hr />`;
    let padre = document.getElementById("card-body");
    padre.appendChild(odds)
}

function removeBet() {
    elem = document.getElementById("gameBet");
    if (elem !== null) elem.remove();
    let texto = document.createElement("p");
    texto.classList.add("text-center");
    texto.id = "gameBet";
    texto.innerHTML = "Para realizar otra apuesta, clickea en las probabilidades";
    elem = document.getElementById("card-body");
    elem.appendChild(texto)
}