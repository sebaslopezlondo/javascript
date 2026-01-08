/**
 * node 01.app_random_numbers.js 10 50
 */

const args = process.argv.slice(2);

let min = 1;
let max = 100;

if (args.length >= 2) {
  const parseMin = parseInt(args[0]);
  const parseMax = parseInt(args[1]);

  if (!isNaN(parseMin) && !isNaN(parseMax) && parseMin < parseMax) {
    min = parseMin;
    max = parseMax;
  } else {
    console.log("Rango inválido, usando por defecto 1-100");
  }
}

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Número aleatorio entre ${min} y ${max}: ${randomNumber}`);
