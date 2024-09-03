/**
 * Ciclos: Es una secuencia de instrucciones que se repite varias veces
 * Es la forma de recorrer una lista de elementos pasando por cada uno de ellos
 */

/**
 * While
 * Quiero ejecutar esta ciclo siempre y cuando se cumpla la condición
 */

console.log("**While**");

const marcasCarros = ["Ford", "Chevrolet", "Toyota", "Peugot"];

let i = 0;
while (i < marcasCarros.length) {
  // La condición es verdadera, se toma como falso undefined, null y false
  // Una mejora de la condición seria: while(carros[i])

  if (i === 1) {
    //break; //Cuando se cumple la condición se rompe el bucle

    i++;
    continue; //Cuando se cumple la condición se continua el bucle
  }

  console.log(marcasCarros[i]);
  i++;
}

/**
 * Do While
 * La diferencia con el while, es que el bucle se ejecuta al menos una vez
 */

console.log("**Do While**");
let j = 0;
do {
  console.log(marcasCarros[j]);
  j++;
} while (marcasCarros[j]);

/**
 * For
 */

console.log("**For**");

const heros = ["Spiderman", "Ironman", "Hulk", "Thor"];

for (let k = 0; k < heros.length; k++) {
  const element = heros[k];
  console.log(element);
}

/**
 * For In
 */

console.log("**For In**");

for (const i in heros) {
  console.log(i, heros[i]);
}

/**
 * For Of
 * Comunmente utulizado para recorrer referencia de objeto y arreglos
 */

console.log("**For Of**");

for (const heroe of heros) {
  console.log(heroe);
}
