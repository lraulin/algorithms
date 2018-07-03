/**
 * Challenge
 * Using the JavaScript language, have the function SimpleEvens(num) check
 * whether every single number in the passed in parameter is even. If so,
 * return the string true, otherwise return the string false. For example: if
 * num is 4602225 your program should return the string false because 5 is not
 * an even number.
 * Sample Test Cases
 * Input:2222220222
 *
 * Output:"true"
 *
 *
 * Input:20864646452
 *
 * Output:"false"
 *
 * Hint
 * It may help to loop through the entire number and check whether every single
 * digit is even.
 */

function SimpleEvens(num) {
  str = num.toString();
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) % 2 !== 0) {
      return "false";
    }
  }
  return "true";
}
