/**
 * Challenge
 * Using the JavaScript language, have the function DistinctCharacters(str)
 * take the str parameter being passed and determine if it contains at least 10
 * distinct characters, if so, then your program should return the string true,
 * otherwise it should return the string false. For example: if str is
 * "abc123kkmmmm?" then your program should return the string false because
 * this string contains only 9 distinct characters: a, b, c, 1, 2, 3, k, m, ?
 * adds up to 9.
 * Sample Test Cases
 * Input:"12334bbmma:=6"
 *
 * Output:"true"
 *
 *
 * Input:"eeeemmmmmmmmm1000"
 *
 * Output:"false"
 *
 * Hint
 * It may help to maintain some sort of data structure to keep a count of each
 * character that appears (like a hash table).
 */

function DistinctCharacters(str) {
  const table = {};
  for (let i = 0; i < str.length; i++) {
    if (table[str[i]] !== undefined) {
      table[str[i]] = 1;
    } else {
      table[str[i]]++;
    }
  }
  if (Object.keys(table).length >= 10) {
    return "true";
  } else {
    return "false";
  }
}

// test = "12334bbmma:=6";
test = "eeeemmmmmmmmm1000";
console.log(DistinctCharacters(test));
