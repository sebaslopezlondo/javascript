/*
 * Arreglos: Son colecciones de datos, un arreglo se define con 'corchetes' []
 * Formas de crear un arreglo
 * let nombreArreglo = [];
 * let nombreArreglo = new Array();
 */

const arr = new Array(5);
console.log(arr);

let videoJuegos = ["Mario", "Zelda", "Sonic"];
console.log(videoJuegos);

console.log(typeof videoJuegos, typeof arr); // object object

/*
 * Accediendo a los elementos de un arreglo
 * Los arreglos empiezan en 0, esto significa que el primer elemento es el 0
 * Con el ejemplo de videoJuegos, el primer elemento, la posición 0 es 'Mario'
 */

console.log(videoJuegos[0]);

/*
 * Los arreglos pueden tener todos los tipos de datos y los que veremos en el futuro
 * como lo son objetos, otros arrays y funciones
 */

const videoJuegos2 = [
  "Mario",
  "Zelda",
  "Sonic",
  10,
  true,
  null,
  undefined,
  { nombre: "Luigui" },
  ["A", "B", "C"],
];

console.log(videoJuegos2);

console.log(videoJuegos2[7].nombre); // Luigui
console.log(videoJuegos2[8][1]); // B

/*****************************
 * Metodos para los arreglos *
 *****************************/

const videoJuegosNintendo = ["Mario", "Zelda", "Sonic", "Pokemon"];

/*
 * length: Retorna la longitud de un arreglo
 */

console.log(videoJuegosNintendo.length); // 4

let primero = videoJuegosNintendo[0];
let ultimo = videoJuegosNintendo[videoJuegosNintendo.length - 1];

console.log(primero, ultimo);

/*
 * push: Agrega un elemento al final de un arreglo
 * pop: Elimina un elemento al final de un arreglo
 * unshift: Agrega un elemento al principio de un arreglo
 * shift: Elimina un elemento al principio de un arreglo
 * splice: Agrega o elimina elementos de un arreglo
 * slice: Crea una copia de un arreglo
 * concat: Une dos arreglos
 * indexOf: Retorna la posicion de un elemento
 */

videoJuegosNintendo.push("F-Zero");
console.log(videoJuegosNintendo); //(5) ['Mario', 'Zelda', 'Sonic', 'Pokemon', 'F-Zero']

// Me retorna el elemento eliminado
const eliminadoUltimo = videoJuegosNintendo.pop();
console.log(eliminadoUltimo); // F-Zero
console.log(videoJuegosNintendo); //(4) ['Mario', 'Zelda', 'Sonic', 'Pokemon']

videoJuegosNintendo.unshift("PAC-MAN");
console.log(videoJuegosNintendo); //(5) ['PAC-MAN', 'Mario', 'Zelda', 'Sonic', 'Pokemon']

// Me retorna el elemento eliminado
const eliminadoInicio = videoJuegosNintendo.shift();
console.log(eliminadoInicio); // PAC-MAN
console.log(videoJuegosNintendo); //(4) ['Mario', 'Zelda', 'Sonic', 'Pokemon']

// Elimina los elementos desde la posicion 1 hasta la 2, dos elementos
let juegosBorrados = videoJuegosNintendo.splice(1, 2);
console.log(videoJuegosNintendo); //(3) ['Mario', 'Pokemon']
console.log(juegosBorrados); //(2) ['Zelda', 'Sonic']

// Retorna la posicion de un elemento
// Si retorna -1 significa que no lo encontro
let pokemonIndex = videoJuegosNintendo.indexOf("Pokemon");
console.log(pokemonIndex); // 1
