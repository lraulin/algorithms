/**
 * Challenge
 * Using the JavaScript language, have the function DashInsertII(str) insert
 * dashes ('-') between each two odd numbers and insert asterisks ('*') between
 * each two even numbers in str. For example: if str is 4546793 the output
 * should be 454*67-9-3. Don't count zero as an odd or even number.
 * Sample Test Cases
 * Input:99946
 *
 * Output:9-9-94*6
 *
 *
 * Input:56647304
 *
 * Output:56*6*47-304
 *
 * Hint
 * A simple loop through the string may work: simply check each pair of
 * adjacent characters to determine if something needs to be inserted between
 * them.
 */

function dashInsertII(str) {
  let newStr = "";
  for (let i = 0; i < str.length - 1; i++) {
    newStr += str[i];
    if (str[i] !== "0") {
      if (parseInt(str[i]) % 2 !== 0 && parseInt(str[i + 1]) % 2 !== 0) {
        newStr += "-";
      } else if (parseInt(str[i]) % 2 === 0 && parseInt(str[i + 1]) % 2 === 0) {
        newStr += "*";
      }
    }
  }
  newStr += str[str.length - 1];
  return newStr;
}

// test = "99946";
test = "56647304";
console.log(dashInsertII(test));
