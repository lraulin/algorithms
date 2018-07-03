/**
 * Challenge
 * Using the JavaScript language, have the function CaesarCipher(str,num) take
 * the str parameter and perform a Caesar Cipher shift on it using the num
 * parameter as the shifting number. A Caesar Cipher works by shifting each
 * letter in the string N places down in the alphabet (in this case N will be
 * num). Punctuation, spaces, and capitalization should remain intact. For
 * example if the string is "Caesar Cipher" and num is 2 the output should be
 * "Ecguct Ekrjgt".
 * Sample Test Cases
 * Input:"Hello" & num = 4
 *
 * Output:"Lipps"
 *
 *
 * Input:"abc" & num = 0
 *
 * Output:"abc"
 */

// lowercase: 97 ~ 122; uppercase: 65 ~ 90

function caesarCipher(str, num) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    // if lowercase
    if (code >= 97 && code <= 122) {
      code += num;
      if (code > 122) {
        code -= 26;
      }
      // if uppercase
    } else if (code >= 65 && code <= 90) {
      code += num;
      if (code > 90) {
        code -= 26;
      }
    }
    newStr += String.fromCharCode(code);
  }
  return newStr;
}

// const test = ['Hello', 4];
// const test = ['abc', 0];
// const test = ['Caesar Cipher', 2];
const test = ['abcXYZ', 1];
console.log(caesarCipher(...test));
