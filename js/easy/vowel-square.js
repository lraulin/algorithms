/**
 * Challenge
 * Using the JavaScript language, have the function VowelSquare(strArr) take
 * the strArr parameter being passed which will be a 2D matrix of some
 * arbitrary size filled with letters from the alphabet, and determine if a 2x2
 * square composed entirely of vowels exists in the matrix. For example: strArr
 * is ["abcd", "eikr", "oufj"] then this matrix looks like the following:
 *
 * a b c d
 * e i k r
 * o u f j
 *
 * Within this matrix there is a 2x2 square of vowels starting in the second
 * row and first column, namely, ei, ou. If a 2x2 square of vowels is found
 * your program should return the top-left position (row-column) of the square,
 * so for this example your program should return 1-0. If no 2x2 square of
 * vowels exists, then return the string not found. If there are multiple
 * squares of vowels, return the one that is at the most top-left position in
 * the whole matrix. The input matrix will at least be of size 2x2.
 * Sample Test Cases
 * Input:"aqrst", "ukaei", "ffooo"
 *
 * Output:"1-2"
 *
 *
 * Input:"gg", "ff"
 *
 * Output:"not found"
 *
 * Hint
 * Try looping through the entire matrix and skipping the last row and column,
 * and checking if the current row/column + the next row and bottom column form
 * a square composed of only vowels.
 */

function isVowel(str) {
  const vowels = /[aeiou]/;
  return vowels.test(str);
}

function VowelSquare(strArr) {
  for (let i = 0; i < strArr.length - 1; i++) {
    for (let k = 0; k < strArr[0].length - 1; k++) {
      // console.log(strArr[i][k] + " " + strArr[i][k + 1]);
      // console.log(strArr[i + 1][k] + " " + strArr[i + 1][k + 1]);
      // console.log("---");
      if (
        isVowel(strArr[i][k]) &&
        isVowel(strArr[i][k + 1]) &&
        isVowel(strArr[i + 1][k]) &&
        isVowel(strArr[i + 1][k + 1])
      ) {
        return i.toString() + "-" + k.toString();
      }
    }
  }
  return "not found";
}

test = ["aqrst", "ukaei", "ffooo"]; // '1-2'
// test = ["gg", "ff"]; // 'not found'
console.log(VowelSquare(test));
