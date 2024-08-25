/*
 * Variables
 * let, var: Se utilizan para definir variables
 * Se recomienda No usar 'var' para definir variables
 *
 * const: Me permite definir constantes, la cual no puede ser reasignada con otro valor
 */

let a = 10;
var b = 20;
const c = 30;

console.log(a, b, c);

/*
 * Javascript permite declarar multiples variables en una sola linea
 * En el ejemplo, se declara 'd', 'e', 'f', 'g', pero g se declara como 'a + b', como ejemplo
 * de otras formas de declarar variables y darle un valor de forma diferente
 */
let d = 40,
  e = 50,
  f = 60,
  g = a + b;

console.log(d, e, f, g);

/*
 * Siempre se recomienda nombrar las variables con un nombre significativo
 * El cual describa el valor que tiene o puede llegar a tener dicha variable
 *
 * Siempre se recomienda usar camelCase o snake_case para nombrar las variables
 * Lo importante es siempre ser constante en la forma de nombrarlas segun la preferencia
 * Esto quiere decir que si nombre variables como nombreCompleto, no nombrar varibles como nombre_completo
 */

let nombre = "Sebastian";
let apellido = "Lopez";

console.log("Hola, me llamo", nombre, apellido);

/*
 *
 */
