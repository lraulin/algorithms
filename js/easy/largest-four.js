/**
 * Challenge
 * Using the JavaScript language, have the function LargestFour(arr) take the
 * array of integers stored in arr, and find the four largest elements and
 * return their sum. For example: if arr is [4, 5, -2, 3, 1, 2, 6, 6] then the
 * four largest elements in this array are 6, 6, 4, and 5 and the total sum of
 * these numbers is 21, so your program should return 21. If there are less
 * than four numbers in the array your program should return the sum of all the
 * numbers in the array.
 * Sample Test Cases
 * Input:1, 1, 1, -5
 *
 * Output:-2
 *
 *
 * Input:0, 0, 2, 3, 7, 1
 *
 * Output:13
 *
 * Hint
 * It may help to maintain some sort of counter or array of counters to
 * determine the largest four numbers as you loop through the array.
 */

function LargestFour(arr) {
  if (arr.length <= 4) {
    return arr.reduce((a, b) => a + b);
  }
  const sorted = arr.sort((a, b) => b - a);
  return arr.slice(0, 4).reduce((a, b) => a + b);
}

// test = [1, 1, 1, -5];
// test = [0, 0, 2, 3, 7, 1];
test = [4, 5, -2, 3, 1, 2, 6, 6];
console.log(LargestFour(test));
