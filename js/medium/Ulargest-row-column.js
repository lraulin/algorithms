/**
 * Challenge
 * Using the JavaScript language, have the function LargestRowColumn(strArr)
 * read the strArr parameter being passed which will be a 2D matrix of some
 * arbitrary size filled with positive integers. Your goal is to determine the
 * largest number that can be found by adding up three digits in the matrix
 * that are within the same path, where being on the same path means starting
 * from one of the elements and then moving either up, down, left, or right
 * onto the next element without reusing elements. One caveat though, and that
 * is when you calculate the sum of three digits, you should split the sum into
 * two digits and treat the new digits as a row/column position in the matrix.
 * So your goal is actually to find the sum of three digits that sums to the
 * largest position in the matrix without going out of the bounds. For example:
 * if strArr is ["345", "326", "221"] then this looks like the following
 * matrix:
 *
 * 3 4 5
 * 3 2 6
 * 2 2 1
 *
 * The solution to this problem is to sum the bolded elements, 4 + 2 + 6, which
 * equals 12. Then you take the solution, 12, and split it into two digits: 1
 * and 2 which represents row 1, column 2 in the matrix. This is the largest
 * position you can get in the matrix by adding up 3 digits so your program
 * should return 12. If you for example added up 4 + 5 + 6 in the matrix you
 * would get 15 which is larger than 12, but row 1, column 5 is out of bounds.
 * It's also not possible with the current matrix to sum to any of the
 * following numbers: 20, 21, 22. If you find a sum that is only a single
 * digit, you can treat that as row 0, column N where N is your sum.
 * Sample Test Cases
 * Input:"234", "999", "999"
 *
 * Output:22
 *
 *
 * Input:"11111", "22222"
 *
 * Output:4
 */

// brute force approach: find all permutations of up, down, left, right that
// don't backtrack: uuu, uud, udd, etc
// for each, if valid, find sum

// recursive algorithm adapted from
// https://www.geeksforgeeks.org/print-all-permutations-with-repetition-of-characters/
/**
 * Ug...in all these examples, they always just PRINT each permutation, which
 * sidesteps the problem of...they're not going to do me any good as console
 * logs...what if I want to gather them all in an array so I can use them,
 * which is the whole point?
 * I could have the array as a global variable, but that's usually best
 * avoided...so then what? I could put both functions in a larger function,
 * so I could handle it the same way, but the global wouldn't really be
 * global... How else? Could pass the array around as a parameter... My brain
 * is feeling all twisted just contemplating how that could work. So F it,
 * let's go with easy option #2 for now.
 */

function allPaths() {
  const paths = [];

  function allLexicographicRecur(string, data, last, index) {
    const length = 3;
    for (let i = 0; i < length; i++) {
      data[index] = string[i];
      if (index === last) {
      }
    }
  }
}

function LargestRowColumn(strArr) {
  const height = strArr.length;
  const width = strArr[0].length;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {}
  }
}
