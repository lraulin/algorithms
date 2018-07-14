/**
 * Challenge
 * Using the JavaScript language, have the function TripleDouble(num1,num2)
 * take both parameters being passed, and return 1 if there is a straight
 * triple of a number at any place in num1 and also a straight double of the
 * same number in num2. For example: if num1 equals 451999277 and num2 equals
 * 41177722899, then return 1 because in the first parameter you have the
 * straight triple 999 and you have a straight double, 99, of the same number
 * in the second parameter. If this isn't the case, return 0.
 * Sample Test Cases
 * Input:465555 & num2 = 5579
 *
 * Output:1
 *
 *
 * Input:67844 & num2 = 66237
 *
 * Output:0
 */

function tripleDouble(num1, num2) {
  for (let i = 0; i < 10; i++) {
    const triple = "" + i + i + i;
    const double = "" + i + i;
    if (
      num1.toString().indexOf(triple) !== -1 &&
      num2.toString().indexOf(double) !== -1
    ) {
      return 1;
    }
  }
  return 0;
}

// console.log(tripleDouble(465555, 5579));
console.log(tripleDouble(67844, 66237));
