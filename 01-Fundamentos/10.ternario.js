/**
 * Ternario: Es una forma de escribir una condición
 * en una sola linea
 * Si la condición es verdadera, se ejecuta el primer bloque
 * Si la condición es falsa, se ejecuta el segundo bloque
 * validacion ? (true) : (false);
 */

const elMayor = (a, b) => (a > b ? a : b);

console.log(elMayor(10, 20)); // 20

const tieneMembresia = (miembro) => (miembro ? "Es miembro" : "No es miembro");

console.log(tieneMembresia(false)); // No es miembros

// En un array

const amigo = false;
const listaDeAmigos = [
  "Peter",
  "Tony",
  "Dr. Strange",
  amigo ? "Benjamin Button" : "Loki",
];

console.log("Amigos", listaDeAmigos);

// Mas de una condición en un ternario

const grado = (nota) => {
  return nota >= 95 ? "A+" : nota >= 90 ? "A" : nota >= 85 ? "B+" : "B";
};

console.log("90", grado(100)); // A+
console.log("85", grado(85)); // B+
console.log("90", grado(90)); // A
console.log("70", grado(70)); // B
