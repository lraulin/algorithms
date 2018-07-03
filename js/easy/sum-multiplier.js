/**
 *
 * ChallengesLearn ⌄ProfileOrganizationsPremium Membership
 *
 * Tags: array, math fundamentals, sequences | Difficulty: Easy
 * Challenge
 * Using the JavaScript language, have the function SumMultiplier(arr) take the
 * array of numbers stored in arr and return the string true if any two numbers
 * can be multiplied so that the answer is greater than double the sum of all
 * the elements in the array. If not, return the string false. For example: if
 * arr is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then the sum of all these elements
 * is 42 and doubling it is 84. There are two elements in the array, 16 * 6 =
 * 96 and 96 is greater than 84, so your program should return the string true.
 * Sample Test Cases
 * Input:2, 2, 2, 2, 4, 1
 *
 * Output:"false"
 *
 *
 * Input:1, 1, 2, 10, 3, 1, 12
 *
 * Output:"true"
 *
 * Hint
 * A simple loop can help to find the sum of all elements. As you loop it would
 * also help to keep track of the largest elements for multiplication later.
 */

function SumMultiplier(arr) {
  const doubleSum = arr.reduce((a, b) => a + b) * 2;
  const largest = Math.max(...arr);
  arr.splice(arr.indexOf(largest), 1);
  const secondLargest = Math.max(...arr);
  if (largest * secondLargest > doubleSum) {
    return "true";
  } else {
    return "false";
  }
}

test = [2, 2, 2, 2, 4, 1];
// test = [1, 1, 2, 10, 3, 1, 12];
console.log(SumMultiplier(test));
