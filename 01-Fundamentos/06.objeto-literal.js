/*
 * Objeto
 * Objeto Literal
 * tienen pares de valores, donde tenemos llave y valor
 * ejemplo: { llave: valor, llave2: valor2, llave3: valor3 }
 *
 * Las propiedades se dividen entre si por coma
 * Cada propiedad puede tener cualquier tipo de valor
 */

let personaje = {
  nombre: "Tony Stark",
  apodo: "Ironman",
  edad: 45,
  superPoder: "Inteligencia",
  coordenadas: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark II", "Hulkbuster"],
};

// Como acceder a las propiedades de un objeto
console.log(personaje);
console.log("Heroe", personaje.apodo);
console.log("Super Poder:", personaje.superPoder);

console.log("Cantidad de trajes:", personaje.trajes.length);

/*
 * Agregar propiedades a un objeto y modificarlas
 */

//Agregando propiedades
personaje.mejorAmigo = "Peter Parker";
console.log("Mejor Amigo", personaje);

/**
 * delete: Borrar una propiedad de un objeto
 */

delete personaje.edad;
console.log("Edad eliminada", personaje);

/*
 * entries: Retorna las propiedades y valores de un objeto en un arreglo
 */

const entriesPares = Object.entries(personaje);
console.log(entriesPares); // ['nombre', 'Tony Stark']

/*
 * Retornar las propiedades de un objeto en un arreglo
 * keys
 * getOwnPropertyNames
 */

const propiedades = Object.keys(personaje);
console.log(propiedades); // ['nombre', 'apodo', 'superPoder']

/*
 * Retornar los valores de las propiedades de un objeto en un arreglo
 * values
 * getOwnPropertyValues
 */

const valores = Object.values(personaje);
console.log(valores); // ['Tony Stark', 'Ironman', 'Inteligencia']

/*
 * freeze: Convierte un objeto en inmutable
 * No permite modificar las propiedades despues de usarlo
 * Pero me permite cambiar el valor de las propiedades objetos, tendria que usar Object.freeze en la propieda
 */

Object.freeze(personaje);

personaje.superPoder = "Fuerza";
console.log("Super Poder:", personaje.superPoder); // Inteligencia
