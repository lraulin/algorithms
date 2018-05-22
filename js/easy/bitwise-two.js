/**
 *  Using the JavaScript language, have the function BitwiseTwo(strArr)
 * take the array of strings stored in strArr, which will only contain two
 * strings of equal length that represent binary numbers, and return a final
 * binary string that performed the bitwise AND operation on both strings. A
 * bitwise AND operation places a 1 in the new string where there is a 1 in
 * both locations in the binary strings, otherwise it places a 0 in that spot.
 * For example: if strArr is ["10111", "01101"] then your program should return
 * the string "00101"
 */

function BitwiseTwo(strArr) {
  let result = parseInt(strArr[0], 2) & parseInt(strArr[1], 2);
  result = result.toString(2);
  if (result.length < strArr[0].length) {
    for (let i = 0; i < strArr[0].length - result.length + 1; i++) {
      result = "0" + result;
    }
  }
  return result;
}

// const test = ["100", "000"];
const test = ["10100", "11100"];
console.log(BitwiseTwo(test));
