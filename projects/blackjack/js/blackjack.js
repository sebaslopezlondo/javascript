/**
 *
 */

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0,
  puntosComputadora = 0;

/**
 * Referencias HTML
 */

const btnPedir = document.getElementById("btnPedir");
const puntosHtml = document.querySelectorAll("small");

const divCartasJugador = document.getElementById("jugador-cartas");
const divCartasComputadora = document.getElementById("computadora-cartas");

const crearDeck = () => {
  for (let i = 2; i < 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  console.log("Deck creado", deck);

  deck = _.shuffle(deck);
  console.log("Deck Barajado", deck);
  return deck;
};

crearDeck();

const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  /**
   * Retorna la carta
   * y la saca de la baraja
   */
  //console.log(deck.pop());
  return deck.pop();
};

//console.log(pedirCarta());

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  /*
  console.log(valor);
  if (isNaN(valor)) {
    console.log("No es un numero");
    puntos = valor === "A" ? 11 : 10;
  } else {
    console.log("Es un numero");
    puntos = Number(valor);
  }*/

  //return puntos;

  return isNaN(valor) ? (valor === "A" ? 11 : 10) : Number(valor);
};

//console.log(valorCarta("AD"));

/**
 * Turno de la computadora
 */

const turnoComputadora = (puntosMinimos) => {
  do {
    const carta = pedirCarta();

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHtml[1].innerText = puntosComputadora;

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add("carta");
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};

/**
 * Eventos
 */

btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();
  console.log(carta);
  const valor = valorCarta(carta);
  puntosJugador += valor;

  puntosHtml[0].innerText = puntosJugador;

  const imgCarta = document.createElement("img");
  imgCarta.src = `./assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    console.warn("Lo siento mucho, perdiste");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    console.warn("21, genial!");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  }
});

//turnoComputadora(45);

btnDetener.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;

  turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener("click", () => {
  console.clear();
  deck = [];
  deck = crearDeck();

  puntosJugador = 0;
  puntosComputadora = 0;

  puntosHtml[0].innerText = 0;
  puntosHtml[1].innerText = 0;

  divCartasComputadora.innerHTML = "";
  divCartasJugador.innerHTML = "";

  btnPedir.disabled = false;
  btnDetener.disabled = false;
});
