/**
 * Using the JavaScript language, have the function
 * NonrepeatingCharacter(str) take the str parameter being passed, which will
 * contain only alphabetic characters and spaces, and return the first
 * non-repeating character. For example: if str is "agettkgaeee" then your
 * program should return k. The string will always contain at least one
 * character and there will always be at least one non-repeating character.
 */

function NonrepeatingCharacter(str) {
  str = str.toLowerCase();
  const count = {};
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]]) {
      count[str[i]]++;
    } else {
      count[str[i]] = 1;
    }
  }
  for (let key in count) {
    if (count[key] == 1) {
      return key;
    }
  }
}

const test = "agettkgaeee";
console.log(NonrepeatingCharacter(test));
