/**
 * Merging sorted integer arrays (without duplicates)
 * Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
 */

function mergeArrays(arr1, arr2) {
  /*console.time();
  const a = [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
  console.timeEnd();
  return a;*/

  console.time();
  arr1.push(...arr2);
  const amor = arr1.sort((a, b) => {
    console.log(a, b);
    return a - b;
  });

  console.timeEnd();
  return amor;
}

console.log(mergeArrays([1, 3, 5, 6], [2, 4, 6, 2]));
