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
 * Me permite definir variables y asignarle el valor haciendo referencia
 * al nombre de la propiedad
 */

const objetoPersona = {
  nombre: "Tony",
  apellidos: "Stark",
  trabajo: "Ingeniero",
  hobbies: ["Correr", "Dormir", "Leer"],
};

//Deseo una variable o constante con el valor de una de las propiedades

const { trabajo, hobbies } = objetoPersona;

console.log("trabajo:", trabajo);
console.log("hobbies:", hobbies);

//Si necesito tener el valor de la propiedad pero con otro nombre de variable

const { nombre: nombrePersona, apellidos: apellidosPersona } = objetoPersona;

console.log("nombre:", nombrePersona);
console.log("apellidos:", apellidosPersona);

/*
 * Destructuración de argumentos
 * Me permite definir variables y asignarle el valor haciendo referencia
 * a los datos recibidos en la función
 */

function verArgumentos(objetoPersona) {
  const nombre = objetoPersona.nombre;
  const apellidos = objetoPersona.apellidos;
  console.log("Fn Nombre:", nombre);
  console.log("Fn Apellidos:", apellidos);
}

verArgumentos(objetoPersona);

// Para evitar lo anterior lo que hacemos es lo siguiente

function verArgumentosDtruct({ nombre, apellidos }) {
  console.log("Fn Nombre:", nombre);
  console.log("Fn Apellidos:", apellidos);
}

verArgumentosDtruct(objetoPersona);
