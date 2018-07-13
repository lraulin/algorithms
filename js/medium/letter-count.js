/**
 * Challenge
 * Using the JavaScript language, have the function LetterCount(str) take the
 * str parameter being passed and return the first word with the greatest
 * number of repeated letters. For example: "Today, is the greatest day ever!"
 * should return greatest because it has 2 e's (and 2 t's) and it comes before
 * ever which also has 2 e's. If there are no words with repeating letters
 * return -1. Words will be separated by spaces.
 * Sample Test Cases
 * Input:"Hello apple pie"
 *
 * Output:Hello
 *
 *
 * Input:"No words"
 *
 * Output:-1
 */

function countLetters(str) {
  // return object with count of each letter found in str, case insensitive
  str = str.toLowerCase();
  const letters = {};
  for (let char of str) {
    if (letters.hasOwnProperty(char)) {
      letters[char]++;
    } else {
      letters[char] = 1;
    }
  }
  return letters;
}

function maxDupLetterCount(str) {
  // take str, return count of most frequent letter, case insensitive
  const letters = countLetters(str);
  let mostFrequentLetter;
  let mostFrequentCount = 0;
  for (const letter in letters) {
    if (letters.hasOwnProperty(letter) && letters[letter] > mostFrequentCount) {
      mostFrequentLetter = letter;
      mostFrequentCount = letters[letter];
    }
  }
  return mostFrequentCount;
}

function letterCount(str) {
  // return first word in space-separated string with greatest number repeating
  // characters, or -1 if no words have repeating characters
  const arr = str.split(" ");
  const maxDupsWord = arr.reduce((accumulator, current) => {
    return maxDupLetterCount(current) > maxDupLetterCount(accumulator)
      ? current
      : accumulator;
  });
  return maxDupLetterCount(maxDupsWord) > 1 ? maxDupsWord : -1;
}

const test = "Hello apple pie";
// const test = "No words";
console.log(letterCount(test));
