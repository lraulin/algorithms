/**
 * Challenge
 * Using the JavaScript language, have the function ArrayMinJumps(arr) take the
 * array of integers stored in arr, where each integer represents the maximum
 * number of steps that can be made from that position, and determine the least
 * amount of jumps that can be made to reach the end of the array. For example:
 * if arr is [1, 5, 4, 6, 9, 3, 0, 0, 1, 3] then your program should output the
 * number 3 because you can reach the end of the array from the beginning via
 * the following steps: 1 -> 5 -> 9 -> END or
 * 1 -> 5 -> 6 -> END. Both of these combinations produce a series of 3 steps.
 * And as you can see, you don't always have to take the maximum number of
 * jumps at a specific position, you can take less jumps even though the number
 * is higher.
 *
 * If it is not possible to reach the end of the array, return -1.
 *
 * Sample Test Cases
 *
 * Input: [3, 4, 2, 1, 1, 100]
 * Output:2
 *
 * Input: [1, 3, 6, 8, 2, 7, 1, 2, 1, 2, 6, 1, 2, 1, 2]
 * Output:4
 */

function arrayMinJumps(arr) {
  let index = 0;
  let count = 0;

  while (index < arr.length - 1) {
    console.log("" + index + ": " + arr[index]);
    const maxSteps = arr[index];
    if (maxSteps === 0) {
      // we're stuck. The loop would go on forever.
      return -1;
    }
    // make a list of currently available moves
    const availableMoves = arr.slice(index + 1, index + maxSteps + 1);
    // find the index of the possible move that gets you the farthest
    let bestMove = 0;
    for (let i = 1; i < availableMoves.length; i++) {
      if (i + availableMoves[i] > bestMove + availableMoves[bestMove]) {
        bestMove = i;
      }
    }
    // add one because the 0th index of availableMoves is one after current
    bestMove++;
    // move to the current index and record that another jump has been made
    index += bestMove;
    count++;
  }
  return count;
}

// test = [1, 3, 6, 8, 2, 7, 1, 2, 1, 2, 6, 1, 2, 1, 2];
//      0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
// test = [3, 4, 2, 1, 1, 100];
// test = [1, 5, 4, 6, 9, 3, 0, 0, 1, 3];
// test = [1, 3, 6, 8, 2, 7, 1, 2, 1, 0, 0, 0, 0, 0, 0];
test = [1, 5, 4, 6, 9, 3, 0, 0, 1, 3];
console.log(arrayMinJumps(test));
