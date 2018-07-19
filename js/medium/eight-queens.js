/**
 * Challenge
 * Using the JavaScript language, have the function EightQueens(strArr) read
 * strArr which will be an array consisting of the locations of eight Queens on
 * a standard 8x8 chess board with no other pieces on the board. The structure
 * of strArr will be the following: ["(x,y)", "(x,y)", ...] where (x,y)
 * represents the position of the current queen on the chessboard (x and y will
 * both range from 1 to 8 where 1,1 is the bottom-left of the chessboard and
 * 8,8 is the top-right). Your program should determine if all of the queens
 * are placed in such a way where none of them are attacking each other. If
 * this is true for the given input, return the string true otherwise return
 * the first queen in the list that is attacking another piece in the same
 * format it was provided.
 *
 * For example: if strArr is ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)",
 * "(1,6)", "(7,7)", "(5,8)"] then your program should return the string true.
 * The corresponding chessboard of queens for this input is below (taken from
 * Wikipedia).
 *
 *
 * Sample Test Cases
 * Input:"(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)"
 *
 * Output:"(2,1)"
 *
 *
 * Input:"(2,1)", "(5,3)", "(6,3)", "(8,4)", "(3,4)", "(1,8)", "(7,7)", "(5,8)"
 *
 * Output:"(5,3)"
 */

function isAttacking(queenA, queenB) {
  // slope of line between positions of queens
  const slope = (queenB.y - queenA.y) / (queenB.x - queenA.x);
  // queens are 'attacking' if slope is: 0 (horizontal), Infinity (vertical)
  // (nonzero integer returns Infinity because of floating point arithmetic),
  // or 1 or -1 (diagonal)
  if (slope === 0 || slope === Infinity || Math.abs(slope) === 1) {
    return true;
  } else {
    return false;
  }
}

function eightQueens(strArr) {
  // reformat the input array
  const queens = strArr.map(x => {
    let xyArr = x.split(',');
    let coords = {};
    coords.x = parseInt(xyArr[0].slice(1));
    coords.y = parseInt(xyArr[1]);
    return coords;
  });
  // naive solution: for each queen, compare with every subsequent queen
  // double loop, (almost) squared time complexity; there's probably a better way
  for (let i = 0; i < queens.length - 1; i++) {
    for (let j = i + 1; j < queens.length; j++) {
      if (isAttacking(queens[i], queens[j])) {
        return strArr[i];
      }
    }
  }
  // return string 'true' if no queen is in a position to attack another
  return 'true';
}

// const test = [
//   '(2,1)',
//   '(4,3)',
//   '(6,3)',
//   '(8,4)',
//   '(3,4)',
//   '(1,6)',
//   '(7,7)',
//   '(5,8)'
// ];
// const test = [
//   '(2,1)',
//   '(5,3)',
//   '(6,3)',
//   '(8,4)',
//   '(3,4)',
//   '(1,8)',
//   '(7,7)',
//   '(5,8)'
// ];
const test = [
  '(2,1)',
  '(4,2)',
  '(6,3)',
  '(8,4)',
  '(3,5)',
  '(1,6)',
  '(7,7)',
  '(5,8)'
];
console.log(eightQueens(test));
