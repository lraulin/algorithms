/**
 * Challenge
 * Using the JavaScript language, have the function GCF(arr) take the array of
 * numbers stored in arr which will always contain only two positive integers,
 * and return the greatest common factor of them. For example: if arr is [45,
 * 12] then your program should return 3. There will always be two elements in
 * the array and they will be positive integers.
 * Sample Test Cases
 * Input:1, 6
 *
 * Output:1
 *
 *
 * Input:12, 28
 *
 * Output:4
 *
 * Hint
 * You might need to get all the factors of both numbers and then determine
 * what numbers they both have in common.
 */

// naive approach: test all numbers equal to or less than the smaller number

function GCF(arr) {
  const smaller = Math.min(...arr);
  const larger = Math.max(...arr);
  for (let i = larger; i > 0; i--) {
    if (larger % i === 0 && smaller % i === 0) {
      return i;
    }
  }
}
