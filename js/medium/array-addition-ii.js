/**
 * Challenge
 * Using the JavaScript language, have the function ArrayAddition(arr) take the
 * array of numbers stored in arr and return the string true if any combination
 * of numbers in the array (excluding the largest number) can be added up to
 * equal the largest number in the array, otherwise return the string false.
 * For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return
 * true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not
 * contain all the same elements, and may contain negative numbers.
 * Sample Test Cases
 * Input:5,7,16,1,2
 *
 * Output:"false"
 *
 *
 * Input:3,5,-1,8,12
 *
 * Output:"true"
 *
 * Hint
 * This challenge can be solved typically in one of two ways. One is to
 * generate all possible sets of numbers and check if the sum of any of these
 * equal to our goal. Another is by a more complicated technique called dynamic
 * programming.
 */

function arrayAdditionII(arr) {
  const sum = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(sum), 1);

  const sets = [[]];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, len = sets.length; j < len; j++) {
      const temp = sets[j].concat(arr[i]);
      sets.push(temp);
      const s = temp.reduce((p, c) => p + c);
      if (s === sum) {
        return "true";
      }
    }
  }
  return "false";
}

// test = [5, 7, 16, 1, 2];
test = [3, 5, -1, 8, 12];
console.log(arrayAdditionII(test));
