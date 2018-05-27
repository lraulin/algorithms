/**
 * Challenge
 *
 * Using the JavaScript language, have the function
 * ThreeSum(arr) take the array of integers stored in arr, and determine if any
 * three distinct numbers (excluding the first element) in the array can sum up
 * to the first element in the array. For example: if arr is [8, 2, 1, 4, 10,
 * 5, -1, -1] then there are actually three sets of triplets that sum to the
 * number 8: [2, 1, 5], [4, 5, -1] and [10, -1, -1]. Your program should return
 * the string true if 3 distinct elements sum to the first element, otherwise
 * your program should return the string false. The input array will always
 * contain at least 4 elements.
 *
 * Sample Test Cases
 *
 * Input:10, 2, 3, 1, 5, 3, 1, 4, -4, -3, -2
 * Output:"true"
 *
 * Input:12, 3, 1, -5, -4, 7
 * Output:"false"
 *
 * Naive solution: triple to check every combination: i in 0~-2, j in i+1~-1,
 * k in j+1~end. O(n^3)
 *
 * Hint: An efficient solution is to sort the array first, and then loop through
 * the array and maintain two pointers (this method). O(n^2).
 * https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/
 */

function ThreeSum(arr) {
  const target = arr[0];
  const nums = arr.slice(1).sort();
  for (let i = 0; i < nums.length - 2; i++) {
    let first = 1;
    let last = nums.length - 1;
    while (first < last) {
      if (nums[i] + nums[first] + nums[last] == target) {
        return true;
      } else if (nums[i] + nums[first] + nums[last] < target) {
        first += 1;
      } else {
        last - 1;
      }
    }
  }
  return false;
}

// test = [10, 2, 3, 1, 5, 3, 1, 4, -4, -3, -2];
test = [12, 3, 1, -5, -4, 7];
console.log(ThreeSum(test));
