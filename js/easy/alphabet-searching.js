/**
 * Challenge Using the JavaScript language, have the function
 * AlphabetSearching(str) take the str parameter being passed and return the
 * string true if every single letter of the English alphabet exists in the
 * string, otherwise return the string false. For example: if str is
 * "zacxyjbbkfgtbhdaielqrm45pnsowtuv" then your program should return the
 * string true because every character in the alphabet exists in this string
 * even though some characters appear more than once.
 *
 * Sample Test Cases
 * Input:"abcdefghijklmnopqrstuvwxyyyy"
 * Output:"false"
 * Input:"abc123456kmo"
 * Output:"false"
 *
 * Hint: Maintaining an array or hash table of each character
 * and updating its count as you loop through the array may be helpful.
 */

function AlphabetSearching(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const table = {};
  for (let i = 0; i < str.length; i++) {
    if (table.hasOwnProperty(str[i])) {
      table[str[i]] += 1;
    } else {
      table[str[i]] = 1;
    }
  }
  for (let i = 0; i < alphabet.length; i++) {
    if (!table.hasOwnProperty(alphabet[i])) {
      return "false";
    }
  }
  return "true";
}

test = "abcdefghijklmnopqrstuvwxyyyy";
// test = "zacxyjbbkfgtbhdaielqrm45pnsowtuv";
console.log(AlphabetSearching(test));
