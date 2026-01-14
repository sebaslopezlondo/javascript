/**
 * Tipos de modulos
 * - CommonJS
 * - ES6
 * - AMD
 */

/**
 * CommonJS
 * Sintaxis: require/module.exports
 * Extensión: .js
 * Sistema predeterminado de Node.js
 * Ejecución: Síncronica
 */

/*
const math = require("./02.modules/math");

console.log(`Suma:  ${math.add(1, 2)}`);
console.log(`Resta: ${math.substract(1, 2)}`);
*/

/**
 * ES6: EcmaScript 6 +
 * Sintaxis: import/export
 * Extensión: .mjs .js
 * Sistema predeterminado de Node.js
 * Ejecución: Asíncronica (Por diseño)
 * Desde la versión 12 experimental y estable desde Node 14
 */

import { multiply, divided } from "./02.modules/math.mjs";

console.log(`Multiplicación:  ${multiply(2, 2)}`);
console.log(`División: ${divided(10, 5)}`);

/**
 * Módulos Nativos
 * Módulos incorporados y proporcionados por Node.js
 * Ejemplo: fs, http, path, os
 */

/**
 * Módulos Externos
 * Módulos instalados con NPM (npm install)
 * Ejemplo: express, mysql, axios
 */
