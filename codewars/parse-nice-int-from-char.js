/**
 * Parse nice int from char problem
 * Write a program that returns the girl's age (0-9) as an integer.
 * Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
 */

function getAge(inputString) {
  return Number(inputString[0]);
  //return Number(inputString.split(" ")[0]);
  //return parseInt(inputString.split(" ")[0]);
}

console.log(getAge("1 year old"));
console.log(getAge("5 years old"));
