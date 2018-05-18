/**
 * Using the JavaScript language, have the function BinaryReversal(str)
 * take the  str parameter being passed, which will be a positive integer, take
 * its binary  representation, reverse that string of bits, and then finally
 * return the new  reversed string in decimal form. For example: if str is "47"
 * then the binary  version of this integer is 00101111. Your program should
 * reverse this binary  string which then becomes: 11110100 and then finally
 * return the decimal version  of this string, which is 244.
 */

function BinaryReversal(str) {
  str = Number(str).toString(2); // doesn't work if num is neg
  let tmp = str;
  const bits = str.length > 8 ? 16 : 8;
  for (let i = 0; i < bits - str.length; i++) {
    tmp = '0' + tmp;
  }
  tmp = tmp
    .split('')
    .reverse()
    .join('');
  tmp = parseInt(tmp, 2).toString();
  return tmp;
}

console.log(BinaryReversal(47));
