/**
 * Challenge
 * Using the JavaScript language, have the function MovingMedian(arr) read the
 * array of numbers stored in arr which will contain a sliding window size, N,
 * as the first element in the array and the rest will be a list of numbers.
 * Your program should return the Moving Median for each element based on the
 * element and its N-1 predecessors, where N is the sliding window size. The
 * final output should be a string with the moving median corresponding to each
 * entry in the original array separated by commas.
 *
 * Note that for the first few elements (until the window size is reached), the
 * median is computed on a smaller number of entries. For example: if arr is
 * [3, 1, 3, 5, 10, 6, 4, 3, 1] then your program should output
 * "1,2,3,5,6,6,4,3"
 * Sample Test Cases
 * Input:5, 2, 4, 6
 *
 * Output:"2,3,4"
 *
 *
 * Input:3, 0, 0, -2, 0, 2, 0, -2
 *
 * Output:"0,0,0,0,0,0,0"
 */

function median(arr) {
  arr = arr.sort((a, b) => a - b);
  if (arr.length === 1) {
    return arr[0];
  } else if (arr.length % 2 !== 0) {
    const midIndex = (arr.length - 1) / 2;
    return arr[midIndex];
  } else {
    const num1 = arr[arr.length / 2 - 1];
    const num2 = arr[arr.length / 2];
    return (num1 + num2) / 2;
  }
}

function MovingMedian(arr) {
  const window = arr[0] - 1;
  arr = arr.slice(1);
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const start = i - window >= 0 ? i - window : 0;
    const subarr = arr.slice(start, i + 1);
    res.push(median(subarr));
  }
  return res;
}

test = [3, 1, 3, 5, 10, 6, 4, 3, 1];
console.log(MovingMedian(test));
