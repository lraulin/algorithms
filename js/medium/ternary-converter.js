/**
 * Challenge
 * Using the JavaScript language, have the function TernaryConverter(num) take
 * the num parameter being passed, which will always be a positive integer, and
 * convert it into a ternary representation. For example: if num is 12 then
 * your program should return 110.
 * Sample Test Cases
 * Input:21
 *
 * Output:210
 *
 *
 * Input:67
 *
 * Output:2111
 *
 * Hint
 * There is a method to convert a decimal to any base N number by repeated
 * division and modulo operations.
 */

function ternaryConverter(num) {
  const stack = [];
  while (num) {
    stack.push(num % 3);
    num = Math.floor(num / 3);
  }
  let res = "";
  while (stack.length) {
    res += stack.pop();
  }
  return res;
}

// const test = 21 // 210
// const test = 12; // 110
const test = 67; // 2111
console.log(ternaryConverter(test));
