/**
 * Challenge
 * Using the JavaScript language, have the function HistogramArea(arr) read the
 * array of non-negative integers stored in arr which will represent the
 * heights of bars on a graph (where each bar width is 1), and determine the
 * largest area underneath the entire bar graph. For example: if arr is [2, 1,
 * 3, 4, 1] then this looks like the following bar graph:
 *
 *
 *
 * You can see in the above bar graph that the largest area underneath the
 * graph is covered by the x's. The area of that space is equal to 6 because
 * the entire width is 2 and the maximum height is 3, therefore 2 * 3 = 6. Your
 * program should return 6. The array will always contain at least 1 element.
 * Sample Test Cases
 * Input:6, 3, 1, 4, 12, 4
 *
 * Output:12
 *
 *
 * Input:5, 6, 7, 4, 1
 *
 * Output:16
 */

// it doesn't explain this clearly, but it seems we're meant to find the area
// of the biggest rectangle you can fit inside the bars.
// ok, brute force, find all possible rectangles.
// so find all permutations...of adjacent bars.
// so indexes: 0, 01, 012, 0123...1, 12, 123... etc
// for each permutation, multiply width by shortest height

function histogramArea(arr) {
  let biggestRectangleArea;
  // find every possible contiguous subset
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      // i is first index, j is last index
      const subArr = arr.slice(i, j + 1);
      const height = Math.min(...subArr);
      const width = subArr.length;
      const area = height * width;
      if (!biggestRectangleArea || area > biggestRectangleArea) {
        biggestRectangleArea = area;
      }
    }
  }
  return biggestRectangleArea;
}

// const test = [6, 3, 1, 4, 12, 4];
const test = [5, 6, 7, 4, 1];
console.log(histogramArea(test));
