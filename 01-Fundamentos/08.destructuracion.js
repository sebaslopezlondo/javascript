/*
 * Destructuración: Permite desestructurar un objeto o arreglo
 */

/**
 * Destructuracion de un array
 * Lo que estamos realizando es retornar los argumentos de la función, y
 * a su vez los guardamos en variables, la destructuración me permite decir
 * que const[variable1, variable2, variable3], van a tener el valor de array
 * que se retorna respectivamente.
 */

function crearPersona() {
  return arguments;
}

const persona = crearPersona(18, "Pereira", "Ingeniero");
const [edad, ciudad, profesion] = crearPersona(18, "Pereira", "Ingeniero");
/*console.log(edad);
console.log(ciudad);
console.log(profesion);*/
console.log({ edad, ciudad, profesion });

/*
 * Destructuración de un objeto
 */
