/**
 * Challenge
 * Using the JavaScript language, have the function BinaryConverter(str) return
 * the decimal form of the binary value. For example: if 101 is passed return
 * 5, or if 1000 is passed return 8.
 * Sample Test Cases
 * Input:"100101"
 *
 * Output:"37"
 *
 *
 * Input:"011"
 *
 * Output:"3"
 *
 * Hint
 * There is most likely a built-in function that can convert any decimal number
 * into base N.
 */

function binaryConverter(str) {
  return parseInt(str, 2).toString();
}

// test = "100101";
test = "011";
console.log(binaryConverter(test));
