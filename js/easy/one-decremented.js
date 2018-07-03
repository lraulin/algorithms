/**
 * Challenge
 * Using the JavaScript language, have the function OneDecremented(num) count
 * how many times a digit appears that is exactly one less than the previous
 * digit. For example: if num is 5655984 then your program should return 2
 * because 5 appears directly after 6 and 8 appears directly after 9. The input
 * will always contain at least 1 digit.
 * Sample Test Cases
 * Input:56
 *
 * Output:0
 *
 *
 * Input:9876541110
 *
 * Output:6
 *
 * Hint
 * Simply looping through the number and maintaining a count and checking the
 * previous digit should work.
 */

function OneDecremented(num) {
  const str = num.toString();
  let count = 0;
  for (let i = 1; i < str.length; i++) {
    if (Number(str[i]) === Number(str[i - 1] - 1)) {
      count++;
    }
  }
  return count;
}
