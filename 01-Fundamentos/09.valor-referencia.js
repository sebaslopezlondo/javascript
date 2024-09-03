/**
 * En Javascript, todos los objetos son pasados por referencia
 * Todos los datos primitivos de pasan por valor
 * Y todos los objetos se pasan por referencia
 * Nota: Todo en Javascript es un objeto, exceptuando los primitivos
 */

let a = 10;
let b = a;

a = 20;

console.log(a, b); // 20 10

/***************************/

let juan = { nombre: "Juan" };
let ana = juan;

console.log(juan, ana); // { nombre: 'Juan' } { nombre: 'Juan' }

ana.nombre = "Ana";

console.log(juan, ana); // { nombre: 'Ana' } { nombre: 'Ana' }

/**
 *
 */

const cambiarNombre = (persona) => {
  persona.nombre = "Tony";
  return persona;
};

let peter = { nombre: "Peter" };
let tony = cambiarNombre(peter);

console.log("peter ", peter, "tony ", tony); // peter  { nombre: 'Tony' } tony  { nombre: 'Tony' }

/**
 * Enviamos a peter a la función el cual esta pasando por referencia
 * Entonces cualquier modificación que se haga a este objeto
 * va a ser afectado al momento de retornarlo, por esto son iguales
 */

/**
 * El operador spread (...) nos permite copiar un arreglo
 * o un objeto y crear un nuevo objeto con todos sus valores
 *
 * Nota: Cuando se usa con los parametros de una función, se llama rest (...)
 */

let nombreUno = { nombre: "Pepito" };
let nombreDos = { ...nombreUno };

nombreUno = { nombre: "Fulanito" };

console.log("Nombres", nombreUno, nombreDos); // Nombres { nombre: 'Fulanito' } { nombre: 'Pepito' }

/***************************/
const cambiarNombreSpread = ({ ...persona }) => {
  persona.nombre = "Mauro";
  return persona;
};

let nameOne = { nombre: "Lucio" };
let nameTwo = cambiarNombreSpread(nameOne);

console.log("nameOne ", nameOne, "nameTwo ", nameTwo); // nameOne  { nombre: 'Lucio' } nameTwo  { nombre: 'Mauro' }

/**
 * Arreglos
 * Los arreglos tambien se pasan por referencia
 * En el siguiente ejemplo vemos como se modifica el arreglo original
 */

const frutas = ["Manzana", "Pera", "Naranja"];
const otrasFrutas = frutas;

otrasFrutas.push("Sandia");

console.log("frutas", frutas); // (4) ['Manzana', 'Pera', 'Naranja', 'Sandia']
console.log("otrasFrutas", otrasFrutas); // (5) ['Manzana', 'Pera', 'Naranja', 'Sandia']
console.table({ frutas, otrasFrutas });

// Utilizando spread operator
// El array frutas2 no se modifica y solo otrasFrutas2 tiene 'Banana'

const frutas2 = ["Manzana", "Pera", "Naranja"];
const otrasFrutas2 = [...frutas2];

otrasFrutas2.push("Banana");
console.table({ frutas2, otrasFrutas2 });

/**
 * Nota: Hay metodos que me permiten realizar la copia de un objeto
 * Todo depende de lo que se necesite
 *
 */
