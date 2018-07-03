/**
 * Challenge
 * Using the JavaScript language, have the function PlusMinus(num) read the num
 * parameter being passed which will be a combination of 1 or more single
 * digits, and determine if it's possible to separate the digits with either a
 * plus or minus sign to get the final expression to equal zero. For example:
 * if num is 35132 then it's possible to separate the digits the following way,
 * 3 - 5 + 1 + 3 - 2, and this expression equals zero. Your program should
 * return a string of the signs you used, so for this example your program
 * should return -++-. If it's not possible to get the digit expression to
 * equal zero, return the string not possible.
 * Sample Test Cases
 * Input:199
 *
 * Output:"not possible"
 *
 *
 * Input:26712
 *
 * Output:"-+--"
 */

function plusMinus(num) {
  const signs = "+-";
  const numStr = num.toString();
  let permutations = [""];
  for (let i = 0; i < numStr.length - 1; i++) {
    let newPermutations = [];
    permutations.forEach(permutation => {
      newPermutations.push(permutation + "-");
      newPermutations.push(permutation + "+");
    });
    permutations = newPermutations;
  }
  for (let permutation of permutations) {
    let sum = Number(numStr[0]);
    for (let i = 0; i < permutation.length; i++) {
      if (permutation[i] === "+") {
        sum += Number(numStr[i + 1]);
      } else {
        sum -= Number(numStr[i + 1]);
      }
    }
    if (sum === 0) {
      return permutation;
    }
  }
  return "not possible";
}

// test = 26712;
test = 199;
console.log(plusMinus(test));
