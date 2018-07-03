/**
 * Challenge
 * Using the JavaScript language, have the function SwapII(str) take the str
 * parameter and swap the case of each character. Then, if a letter is between
 * two numbers (without separation), switch the places of the two numbers. For
 * example: if str is "6Hello4 -8World, 7 yes3" the output should be 4hELLO6
 * -8wORLD, 7 YES3.
 * Sample Test Cases
 * Input:"Hello -5LOL6"
 *
 * Output:"hELLO -6lol5"
 *
 *
 * Input:"2S 6 du5d4e"
 *
 * Output:"2s 6 DU4D5E"
 *
 * Hint
 * There might be a built-in function to swap the case of a character. Then to
 * swap numbers that surround a character, it may help to check the characters
 * before and after as you loop through each character in the string.
 */

function swapII(str) {
  // swap case
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) {
      str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    } else if (/[A-Z]/.test(str[i])) {
      str = str.slice(0, i) + str[i].toLowerCase() + str.slice(i + 1);
    }
  }
  // swap nums if they are separated by one or more letters
  re = /[0-9][a-zA-Z]*[0-9]/g;
  while ((match = re.exec(str)) !== null) {
    // index of first char of match
    const startIndex = match.index;
    // index of last char of match
    const stopIndex = startIndex + match[0].length - 1;
    str =
      str.slice(0, startIndex) +
      str[stopIndex] +
      str.slice(startIndex + 1, stopIndex) +
      str[startIndex] +
      str.slice(stopIndex + 1);
  }
  return str;
}

// const test = "6Hello4 -8World2, 7 yes3"; // '4hELLO6 -8wORLD, 7 YES3'
// const test = "Hello -5LOL6"; // "hELLO -6lol5"
const test = "2S 6 du5d4e"; // "2s 6 DU4D5E"
console.log(swapII(test));
