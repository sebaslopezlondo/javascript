/*
 * console: El objeto console nos permite debuguear
 * el código en el navegador mostrando en la consola del navegador o termianr los resultados.
 */

console.log("Hello World");

/* console me permite imprimir el resultado de cualquier ejecución
 * concatenar cadenas de texto, hacer operaciones aritmeticas, etc.
 */

console.log(2 + 2);
console.log("Bienvenido a JavaScript", "JS");

/*
 * Existen varios tipos de console. entre ellas las que nos informan errores, alertas
 * y advertencias.
 * Al ejecutar con node 'consola', no notaras diferencia, ejecutar en navagador.
 */

console.info("Soy Info");
console.warn("Una Advertencia");
console.error("Un Error");

/*
 *  Podemos realizar cambiar de estilos de la consola con CSS
 */

console.log("%c Hola, blue", "color:blue;");
console.log("%c Hola, blue size", "color:blue; font-size: 50px;");
console.log("%c Hola, green weight", "color:green; font-weight: bold;");

/*
 * console.group(): Crea una agrupacion de console
 *  En consola saldran tabulada cada console agrupada
 *  En el navegador tendra la posibilidad de abrir y cerrar el grupo con una flecha
 */

console.group("Group 1");
console.log("Next log group 1");
console.log("Hello World group 1");
console.groupEnd();

console.group("Group 2");
console.warn("Next log group 2");
console.warn("Hello World group 2");
console.groupEnd();

/*
 * console.time(): Inicia un contador de tiempo
 * console.timeEnd(): Finaliza el contador de tiempo
 *  Ejemplo de resultado: default: 0.01318359375 ms
 */

console.time();
console.log("Hello World time");
console.timeEnd();

/*
 * console.clear(): Limpia la consola
 *  Resultado: Console was cleared
 */

setTimeout(() => {
  //console.clear();
}, 5000);
