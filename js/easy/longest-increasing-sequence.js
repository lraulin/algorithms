/**
 * Using the JavaScript language, have the function
 * LongestIncreasingSequence(arr) take the array of positive integers stored in
 * arr and return the length of the longest increasing subsequence (LIS). A LIS
 * is a subset of the original list where the numbers are in sorted order, from
 * lowest to highest, and are in increasing order. The sequence does not need
 * to be contiguous or unique, and there can be several different subsequences.
 * For example: if arr is [4, 3, 5, 1, 6] then a possible LIS is [3, 5, 6], and
 * another is [1, 6]. For this input, your program should return 3 because that
 * is the length of the longest increasing subsequence.
 *
 * Hint: https://www.cs.princeton.edu/courses/archive/spring13/cos423/lectures/LongestIncreasingSubsequence.pdf
 */

function LongestIncreasingSequence(arr) {
  const piles = [];
  let flag;
  arr.forEach(num => {
    flag = false;
    for (let i = 0; i < piles.length; i++) {
      if (num <= piles[i][piles[i].length - 1]) {
        piles[i].push(num);
        flag = true;
        break;
      }
    }
    if (!flag) {
      piles.push([num]);
    }
  });
  console.log(piles);
  return piles.length;
}

const x = [9, 9, 4, 2];
console.log(LongestIncreasingSequence(x));
