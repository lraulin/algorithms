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

function maxDupLetterCount(str) {
  // take str, return count of most frequent letter, case insensitive
  str = str.toLowerCase();
  const letters = {};
  for (let i = 0; i < str.length; i++) {
    if (letters.hasOwnProperty(str[i])) {
      letters[str[i]]++;
    } else {
      letters[str[i]] = 1;
    }
  }
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
  let mostFrequentWord;
  let maxDupCount = 0;
  for (let word of arr) {
    const numDupLetters = maxDupLetterCount(word);
    if (numDupLetters > maxDupCount) {
      maxDupCount = numDupLetters;
      mostFrequentWord = word;
    }
  }
  if (maxDupCount > 1) {
    return mostFrequentWord;
  } else {
    return -1;
  }
}

// const test = "Hello apple pie";
const test = "No words";
console.log(letterCount(test));
