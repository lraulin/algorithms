/**
 * Using the JavaScript language, have the function PowerSetCount(arr)
 * take the array of integers stored in arr, and return the length of the power
 * set (the number of all possible sets) that can be generated. For example: if
 * arr is [1, 2, 3], then the following sets form the power set:  [] [1] [2]
 * [3] [1, 2] [1, 3] [2, 3] [1, 2, 3]  You can see above all possible sets,
 * along with the empty set, are generated. Therefore, for this input, your
 * program should return 8.
 */

// Naive solution: Generate power set and count length.

function PowerSetCount(arr) {
  const sets = [[]];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, len = sets.length; j < len; j++) {
      const temp = sets[j].concat(arr[i]);
      sets.push(temp);
    }
  }
  // sets.forEach(x => console.log(x.toString()));
  return sets.length;
}

const test = [1, 2, 3];
console.log(PowerSetCount(test));

// Calculate size of power set: size of power set = 2^N
function PowerSetCountFormula(arr) {
  return 2 ** arr.length;
}

console.log(PowerSetCountFormula(test));
