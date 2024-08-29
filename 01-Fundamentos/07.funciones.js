/*
 * Funciones: Son bloques de código que se pueden reutilizar
 * Se pueden definir con 'function' o 'const'
 * Una función puede retornar un valor o no, esto lo sabemos si la funcion tiene un return
 */

function saludar() {
  console.log("Hola Mundo");
}

//Llamando a la funcion
saludar();

const saludarPersona = function (nombre) {
  console.log(`Hola ${nombre}`);
};

saludarPersona("Sebastian");
saludarPersona("Fernando");

//Funcion de flecha
const saludarFlecha = (nombre) => {
  console.log(`Flecha: Hola ${nombre}`);
};

saludarFlecha("Sebastian");
saludarFlecha("Juan Jose");

//Funcion de flecha simplificada
const saludarFlechaSimplificada = (nombre) =>
  console.log(`Simplificada: Hola ${nombre}`);

saludarFlechaSimplificada("Sebastian");
saludarFlechaSimplificada("Aldinever");

// Funciones con retorno
// El retorno puede ser cualquier tipo de dato

function sumar(a, b) {
  return a + b;
}

const resultado = sumar(10, 20);
console.log(resultado);
console.log(sumar(33, 22));

const multiplicar = (a, b) => a * b;
const obtenerNumeroAleatorio = () => Math.random();

const valorMulti = multiplicar(
  obtenerNumeroAleatorio(),
  obtenerNumeroAleatorio()
);
console.log(valorMulti);

/***
 *
 */

function crearPersona(nombre, apellido) {
  /*
  return {
    nombre: nombre,
    apellido: apellido,
  };
  */
  // Javascript me permite hacer lo anterior simplificado
  return { nombre, apellido };
}

const persona = crearPersona("Sebastian", "Lima");
console.log(persona);

/*
 * arguments: Esta palabra reservada permite acceder a los argumentos
 * que se le pasaron a una función, los muestra en un array en el orden enviado
 */

function verArgumentos() {
  console.log("arguments: ", arguments);
}

verArgumentos(1, "dos", true, [1, 2, 3, 4], { cinco: 5, seis: "seis" });

/* La funcion flecha no me permite ver los arguments de la misma forma
 * Pero se pueden obtener de la siguiente manera
 */

//const verArgumentosFlecha = (args) => { // De esta forma solo me imprime: "Uno"
const verArgumentosFlecha = (...args) => {
  // De esta forma me imprime los arguments en array
  // args es el nombre como identifico los argumentos, pero puede ser cualquier nombre
  // Si deseo para algún parametro, debe ir al incio de la lista de argumentos (edad, ...args)

  console.log("arguments flecha: ", args);
};

verArgumentosFlecha("Uno", 2, false, ["1", "2", "a", "b"], {
  diez: 10,
  pi: "3.14",
});
