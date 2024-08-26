/*
 * Alerts
 * Son bloqueantes, bloquea la ejecución del programa.
 * alert(): Muestra un alerta
 */

//alert("Hello World");

/**
 * prompt(): Recibe un valor y me retorna otro
 */

//prompt("Te gusta JavaScript?");

/*
 * Al guardar el prompt, nos retornara un string con el valor que ingresa el usuario
 * Si el usuario no ingresa información, retornara un string vacio ''
 * Al pasarle un segundo parametro, este valor sera por defecto
 */

const edad = prompt("Cual es tu edad?");
const nombre = prompt("Cual es tu nombre?", "No tengo");

console.log(`Bienvenido ${nombre}`);

//console.log(`Tienes ${edad} anios`);
console.log("Tienes****" + edad + "****anios");

/*
 * Cuando te solicite la edad, no ingreses información, y veras que los asteriscos estaran juntos
 *  Ejemplo: Tienes********anios
 * Pero si ingresas un dato como por ejemplo '18'
 * Ejemplo: Tienes****18***anios
 * Esto se hace para explicar que puede llegar a retornar un string vacio '' si no se ingresa información
 */

/*
 * confirm(): Muestra una ventana de confirmacion
 * Retorna true o false, Aceptar o cancelar respectivamente
 */

const deseaEliminar = confirm("Deseas eliminar el archivo?");
console.log(deseaEliminar);

/*
 * Nota Importante: Para poder utilizar lo explicado en este archivo, siempre debemos tener
 * el object Window.
 * Si ejecutamos en consola con node '03.alerts.js', mostrara error ya que no estara definido
 */
