/**
 * Using the JavaScript language, have the function TwoSum(arr) take the
 * array of integers stored in arr, and determine if any two numbers (excluding
 * the first element) in the array can sum up to the first element in the
 * array. For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are
 * actually two pairs that sum to the number 7: [5, 2] and [-4, 11]. Your
 * program should return all pairs, with the numbers separated by a comma, in
 * the order the first number appears in the array. Pairs should be separated
 * by a space. So for the example above, your program would return: 5,2 -4,11
 */

function TwoSum(arr) {
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (i != j && arr[i] + arr[j] == arr[0]) {
        result.push("" + arr[i] + "," + arr[j]);
      }
    }
  }
  if (result.length) {
    return result.join(" ");
  } else {
    return -1;
  }
}

const test = [6, 2];
console.log(TwoSum(test));
