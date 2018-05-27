/**
 * Challenge Using the JavaScript language, have the function
 * ThreeNumbers(str) take the str parameter being passed and determine if
 * exactly three unique, single-digit integers occur within each word in the
 * string. The integers can appear anywhere in the word, but they cannot be all
 * adjacent to each other. If every word contains exactly 3 unique integers
 * somewhere within it, then return the string true, otherwise return the
 * string false. For example: if str is "2hell6o3 wor6l7d2" then your program
 * should return "true" but if the string is "hell268o w6or2l4d" then your
 * program should return "false" because all the integers are adjacent to each
 * other in the first word.
 *
 * Sample Test Cases
 *
 * Input:"2a3b5 w1o2rl3d g1gg92"
 * Output:"true"
 * Input:"21aa3a ggg4g4g6ggg"
 * Output:"false"
 *
 * Hint
 *
 * First converting the string into an array of words may be helpful.
 * Then you will be able to loop through the array checking the conditions of
 * each word.
 */

// wait...'g1gg92' is ok... so they just can't ALL be adjacent to each other?

function ThreeNumbers(str) {
  const arr = str.split(" ");
  for (let word of arr) {
    //check for 3 unique digits
    const ints = new Set();
    for (let i = 0; i < word.length; i++) {
      if (!isNaN(word[i])) {
        ints.add(word[i]);
      }
    }
    if (ints.size !== 3) return "false";
    //check that they aren't all adjacent
    if (word.match(/\d{3}/)) {
      return "false";
    }
  }
  return "true";
}

// const test = "2a3b5 w1o2rl3d g1gg92";
// const test = "21aa3a ggg4g4g6ggg";
const test = "2hell6o3 wor6l7d2";
console.log(ThreeNumbers(test));
