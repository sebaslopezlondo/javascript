/**
 * Ensure question
 * Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.
 */

function ensureQuestion(str) {
  //if (str.length === 0) return "";
  //return str.endsWith("?") ? str.slice(0, -1) : `${str}?`; //Entendí mas el enunciado jejeje

  return str.endsWith("?") ? str : `${str}?`;
}

console.log(ensureQuestion("Yes"));
console.log(ensureQuestion("No?"));
console.log(ensureQuestion(""));

//Yes?
//No
