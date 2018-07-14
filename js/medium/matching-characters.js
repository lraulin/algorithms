/**
 * Challenge
 * Using the JavaScript language, have the function MatchingCharacters(str)
 * take the str parameter being passed and determine the largest number of
 * unique characters that exists between a pair of matching letters anywhere in
 * the string. For example: if str is "ahyjakh" then there are only two pairs
 * of matching letters, the two a's and the two h's. Between the pair of a's
 * there are 3 unique characters: h, y, and j. Between the h's there are 4
 * unique characters: y, j, a, and k. So for this example your program should
 * return 4.
 *
 * Another example: if str is "ghececgkaem" then your program should return 5
 * because the most unique characters exists within the farthest pair of e
 * characters. The input string may not contain any character pairs, and in
 * that case your program should just return 0. The input will only consist of
 * lowercase alphabetic characters.
 * Sample Test Cases
 * Input:"mmmerme"
 *
 * Output:3
 *
 *
 * Input:"abccdefghi"
 *
 * Output:0
 */

function matchingCharacters(str) {
  let mostUniqueChars = 0;
  for (let i = 0; i < str.length; i++) {
    // if the current character isn't the only/last occurance of that character
    if (i !== str.lastIndexOf(str[i])) {
      // get the string between the current character and its last occurence
      const sub = str.slice(i + 1, str.lastIndexOf(str[i]));
      // use Set to get the number of unique characters
      const uniqueChars = new Set(sub.split("")).size;
      // update largest number of unique characters if appropriate
      if (uniqueChars > mostUniqueChars) {
        mostUniqueChars = uniqueChars;
      }
    }
  }
  return mostUniqueChars;
}

// const test = "ahyjakh";
// const test = "mmmerme";
const test = "abccdefghi";
console.log(matchingCharacters(test));
