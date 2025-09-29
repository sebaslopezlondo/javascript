/**
 * Convert number to reversed array of digits
 * Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 */

function arrayReverse(number) {
  return number.toString().split("").reverse().map(Number);
}

console.log(arrayReverse(123));
