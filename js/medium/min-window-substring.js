/**
 * Challenge
 * Using the JavaScript language, have the function MinWindowSubstring(strArr)
 * take the array of strings stored in strArr, which will contain only two
 * strings, the first parameter being the string N and the second parameter
 * being a string K of some characters, and your goal is to determine the
 * smallest substring of N that contains all the characters in K. For example:
 * if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that
 * contains the characters a, e, and d is "dae" located at the end of the
 * string. So for this example your program should return the string dae.
 *
 * Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest
 * substring of N that contains all of the characters in K is "aabd" which is
 * located at the beginning of the string. Both parameters will be strings
 * ranging in length from 2 to 50 characters and all of K's characters will
 * exist somewhere in the string N. Both strings will only contains lowercase
 * alphabetic characters.
 * Sample Test Cases
 * Input:"ahffaksfajeeubsne", "jefaa"
 *
 * Output:"aksfaje"
 *
 *
 * Input:"aaffhkksemckelloe", "fhea"
 *
 * Output:"affhkkse"
 */

// naive/brute force
String.prototype.containsLetters = function(str) {
  function countLetters(s) {
    const letterCount = {};
    for (let char of s) {
      if (letterCount.hasOwnProperty(char)) {
        letterCount[char]++;
      } else {
        letterCount[char] = 1;
      }
    }
    return letterCount;
  }
  lettersA = countLetters(this);
  lettersB = countLetters(str);
  for (let letter in lettersB) {
    if (!(lettersA[letter] >= lettersB[letter])) {
      return false;
    }
  }
  return true;
};

function minWindowSubstring(strArr) {
  const word = strArr[0];
  const letters = strArr[1];
  let shortestSubstr;
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length + 1; j++) {
      const sub = word.slice(i, j);
      if (
        sub.containsLetters(letters) &&
        (!shortestSubstr || sub.length < shortestSubstr.length)
      ) {
        shortestSubstr = sub;
      }
    }
  }
  return shortestSubstr;
}

const test = ["aaffhkksemckelloe", "fhea"];
console.log(minWindowSubstring(test));
