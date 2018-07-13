/**
 * Challenge
 * Using the JavaScript language, have the function LongestConsecutive(arr)
 * take the array of positive integers stored in arr and return the length of
 * the longest consecutive subsequence (LCS). An LCS is a subset of the
 * original list where the numbers are in sorted order, from lowest to highest,
 * and are in a consecutive, increasing order. The sequence does not need to be
 * contiguous and there can be several different subsequences. For example: if
 * arr is [4, 3, 8, 1, 2, 6, 100, 9] then a few consecutive sequences are [1,
 * 2, 3, 4], and [8, 9]. For this input, your program should return 4 because
 * that is the length of the longest consecutive subsequence.
 * Sample Test Cases
 * Input:6, 7, 3, 1, 100, 102, 6, 12
 *
 * Output:2
 *
 *
 * Input:5, 6, 1, 2, 8, 9, 7
 *
 * Output:5
 */

function longestConsecutive(arr) {
  // sort without mutating
  const sequence = [].concat(arr).sort((a, b) => a - b);
  // length of current sequence
  let currentCount = 1;
  // length of longest sequence
  let maxCount = 1;
  // compare values it indexes i and i + 1
  // for the last pair, i+1 is out of range, therefore undefined, therefore
  // will be treated as the end of a consecutive sequence
  for (let i = 0; i < sequence.length; i++) {
    // if the next num equals current num + 1...
    if (sequence[i + 1] === sequence[i] + 1) {
      // the pairs are part of a consecutive sequence; increase the count
      currentCount++;
    } else {
      // we've reached the end of a consecutive sequence
      // update maxCount if appropriate
      maxCount = currentCount > maxCount ? currentCount : maxCount;
      // reset currentCount
      currentCount = 1;
    }
  }
  return maxCount;
}

const test = [4, 3, 8, 1, 2, 6, 100, 9];
console.log(longestConsecutive(test));
