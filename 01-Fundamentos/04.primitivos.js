/**
 * Primitivos: Son los datos que no son objetos y son inmutables
 * Ejemplos: String, Number, Boolean, Undefined, Null
 */

/**
 * string: Cadenas de texto = "Hello World"
 * number: Numeros = 10
 * boolean: true o false
 * null: Sin valor en lo absoluto
 * undefined: Variable declarada que no se le ha asignado valor
 * symbol: Es un valor único que no es igual a ningún otro valor
 */

/*
 * typeof: Retorna el tipo de dato de la variable
 */

/*
 * String: Puedo definir string con comillas dobles "" o simples '' y ``
 */

let holaMundo = "Hello World";

let nombre = "Sebastian";
let apellido = "Lopez";

const nombreCompleto = `Nombre completo: ${nombre} ${apellido}`;

console.log(holaMundo, nombreCompleto);
console.log(typeof holaMundo, typeof nombreCompleto);

/*
 * Number: Puedo definir un numero con decimales o sin decimales
 * Para Javascript no es necesario identificar que tipo de número es como en otros lenguales
 */

let edad = 30;
let pi = 3.1416;

console.log(edad, pi);
console.log(typeof edad, typeof pi);

/*
 * Boolean: true o false
 */

let isAdmin = true;
let isLogin = false;

console.log(typeof isAdmin, typeof isLogin);

/*
 * Symbol: Permite crear identificadores únicos a javascript
 */

let symbol1 = Symbol();
let symbol2 = Symbol();

console.log(typeof symbol1, typeof symbol2);
console.log(symbol1 === symbol2);

/*
 * Undefined: No se le ha asignado valor
 */

let variableUndefined;
console.log(typeof variableUndefined);

/*
 * Null: Sin valor, typeof sale como object
 */

let variableNull = null;

console.log(variableNull);
console.log(typeof variableNull);
