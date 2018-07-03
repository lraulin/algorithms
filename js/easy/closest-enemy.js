/**
 *
 * ChallengesLearn ⌄ProfileOrganizationsPremium Membership
 *
 * Tags: array, searching | Difficulty: Easy
 * Challenge
 * Using the JavaScript language, have the function ClosestEnemy(arr) take the
 * array of numbers stored in arr and from the position in the array where a 1
 * is, return the number of spaces either left or right you must move to reach
 * an enemy which is represented by a 2. For example: if arr is [0, 0, 1, 0, 0,
 * 2, 0, 2] then your program should return 3 because the closest enemy (2) is
 * 3 spaces away from the 1. The array will contain any number of 0's and 2's,
 * but only a single 1. It may not contain any 2's at all as well, where in
 * that case your program should return a 0.
 * Sample Test Cases
 * Input:1, 0, 0, 0, 2, 2, 2
 *
 * Output:4
 *
 *
 * Input:2, 0, 0, 0, 2, 2, 1, 0
 *
 * Output:1
 *
 * Hint
 * It might help to first locate the 1, and then move left and right until you
 * reach a 2.
 */

function ClosestEnemy(arr) {
  const pos = arr.indexOf(1);
  let enemy;
  for (let i = pos + 1; i < arr.length; i++) {
    if (arr[i] === 2) {
      enemy = i - pos;
      break;
    }
  }
  for (let i = pos - 1; i >= 0; i--) {
    if (arr[i] === 2) {
      if (pos - i < enemy || !enemy) {
        enemy = pos - i;
      }
      break;
    }
  }
  return enemy;
}

// test = [1, 0, 0, 0, 2, 2, 2];
test = [2, 0, 0, 0, 2, 2, 1, 0];
console.log(ClosestEnemy(test));
