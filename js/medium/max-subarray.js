/**
 * Challenge
 * Using the JavaScript language, have the function MaxSubarray(arr) take the
 * array of numbers stored in arr and determine the largest sum that can be
 * formed by any contiguous subarray in the array. For example, if arr is [-2,
 * 5, -1, 7, -3] then your program should return 11 because the sum is formed
 * by the subarray [5, -1, 7]. Adding any element before or after this subarray
 * would make the sum smaller.
 * Sample Test Cases
 * Input:1, -2, 0, 3
 *
 * Output:3
 *
 *
 * Input:3, -1, -1, 4, 3, -1
 *
 * Output:8
 */

// brute force approach
function maxSubarray(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    // make sure inner loop includes last index +1 in order to get the last
    // element with slice
    for (let j = i + 1; j <= arr.length; j++) {
      const subarr = arr.slice(i, j);
      const sum = subarr.reduce((a, c) => a + c);
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}

// const test = [3, -1, -1, 4, 3, -1];
const test = [1, -2, 0, 3];
console.log(maxSubarray(test));
