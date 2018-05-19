/**
 * Using the JavaScript language, have the function LargestPair(num)
 * take the num parameter being passed and determine the largest double digit
 * number within the whole number. For example: if num is 4759472 then your
 * program should return 94 because that is the largest double digit number.
 * The input will always contain at least two positive digits.
 */

function LargestPair(num) {
  const numstring = num.toString();
  let largest = 0;
  for (let i = 0; i < numstring.length - 1; i++) {
    if (Number(numstring.substring(i, i + 2)) > largest) {
      largest = Number(numstring.substring(i, i + 2));
    }
  }
  return largest;
}

// test = 453857;
test = 34;
console.log(LargestPair(test));
