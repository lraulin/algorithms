/**
 * Challenge
 * Using the JavaScript language, have the function ElementMerger(arr) take the
 * array of positive integers stored in arr and perform the following
 * algorithm: continuously get the difference of adjacent integers to create a
 * new array of integers, then do the same for the new array until a single
 * number is left and return that number. For example: if arr is [4, 5, 1, 2,
 * 7] then taking the difference of each pair of elements produces the
 * following new array: [1, 4, 1, 5]. Then do the same for this new array to
 * produce [3, 3, 4] -> [0, 1] -> 1. So for this example your program should
 * return the number 1 because that is what's left at the end.
 * Sample Test Cases
 * Input:5, 7, 16, 1, 2
 *
 * Output:7
 *
 *
 * Input:1, 1, 1, 2
 *
 * Output:1
 *
 * Hint
 * A simple loop that computes the difference between pairs of elements should
 * suffice to solve this problem.
 */

function ElementMerger(arr) {
  let res = arr;
  while (res.length > 1) {
    const temp = [];
    for (let i = 1; i < res.length; i++) {
      temp.push(Math.abs(res[i] - res[i - 1]));
    }
    res = temp;
  }
  return res[0];
}
