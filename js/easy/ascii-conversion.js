/**
 * Challenge
 * Using the JavaScript language, have the function ASCIIConversion(str) take
 * the str parameter being passed and return a new string where every
 * character, aside from the space character, is replaced with its
 * corresponding decimal character code. For example: if str is "dog" then your
 * program should return the string 100111103 because d = 100, o = 111, g =
 * 103.
 * Sample Test Cases
 * Input:"hello world"
 *
 * Output:"104101108108111 119111114108100"
 *
 *
 * Input:"abc **"
 *
 * Output:"979899 4242"
 *
 * Hint
 * There is most likely a built-in function that can convert ASCII to decimal
 * for you.
 */

function ASCIIConversion(str) {
  newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      newStr += str.charCodeAt(i);
    } else {
      newStr += " ";
    }
  }
  return newStr;
}

const test = "hello world";
const answer = "104101108108111 119111114108100";
console.log(ASCIIConversion(test));
console.log(ASCIIConversion(test) == answer);
