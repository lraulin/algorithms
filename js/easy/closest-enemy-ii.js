/**
 * Challenge
 * Using the JavaScript language, have the function ClosestEnemyII(strArr) read
 * the matrix of numbers stored in strArr which will be a 2D matrix that
 * contains only the integers 1, 0, or 2. Then from the position in the matrix
 * where a 1 is, return the number of spaces either left, right, down, or up
 * you must move to reach an enemy which is represented by a 2. You are able to
 * wrap around one side of the matrix to the other as well. For example: if
 * strArr is ["0000", "1000", "0002", "0002"] then this looks like the
 * following:
 *
 * 0 0 0 0
 * 1 0 0 0
 * 0 0 0 2
 * 0 0 0 2
 *
 * For this input your program should return 2 because the closest enemy (2) is
 * 2 spaces away from the 1 by moving left to wrap to the other side and then
 * moving down once. The array will contain any number of 0's and 2's, but only
 * a single 1. It may not contain any 2's at all as well, where in that case
 * your program should return a 0.
 * Sample Test Cases
 * Input:"000", "100", "200"
 *
 * Output:1
 *
 *
 * Input:"0000", "2010", "0000", "2002"
 *
 * Output:2
 *
 * Hint
 * You can try simply moving in each direction from the 1, but you may need to
 * add a special case if you reach the border letting your program know you
 * need to jump to the other side of the matrix.
 */

function ClosestEnemyII(arr) {
  const enemies = [];
  let pos;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "2") {
        enemies.push([i, j]);
      } else if (arr[i][j] === "1") {
        pos = [i, j];
      }
    }
  }
  if (!enemies.length) {
    return 0;
  }
  let minDistance;
  for (let enemy of enemies) {
    leftMost = Math.min(pos[1], enemy[1]);
    rightMost = Math.max(pos[1], enemy[1]);
    horizontalWrapDistance = arr[0].length - rightMost + leftMost;
    horizontalDistance = Math.min(horizontalWrapDistance, rightMost - leftMost);
    topMost = Math.min(pos[0], enemy[0]);
    bottomMost = Math.max(pos[0], enemy[0]);
    verticalWrapDistance = arr[0].length - bottomMost + topMost;
    verticalDistance = Math.min(verticalWrapDistance, bottomMost - topMost);
    totalDistance = horizontalDistance + verticalDistance;
    if (!minDistance || totalDistance < minDistance) {
      minDistance = totalDistance;
    }
  }
  return minDistance;
}

// test = ["000", "100", "200"];
// test = ["0000", "2010", "0000", "2002"];
// test = ["0000", "1000", "0002", "0002"];
// test = ["01000", "00020", "00000", "00002", "02002"];
// test = ["01000", "00000", "00000", "00000", "00000"];
// test = ["00000", "10020", "00000", "00002", "02002"];
// test = ["00000", "10000", "00000", "00002", "02002"];
test = [
  "0000000",
  "0001000",
  "0000000",
  "0000000",
  "0000000",
  "2000000",
  "0000000",
];
console.log(ClosestEnemyII(test));
