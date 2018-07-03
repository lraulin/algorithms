/**
 * Challenge
 * Using the JavaScript language, have the function KUniqueCharacters(str) take
 * the str parameter being passed and find the longest substring that contains
 * k unique characters, where k will be the first character from the string.
 * The substring will start from the second position in the string because the
 * first character will be the integer k. For example: if str is "2aabbacbaa"
 * there are several substrings that all contain 2 unique characters, namely:
 * ["aabba", "ac", "cb", "ba"], but your program should return "aabba" because
 * it is the longest substring. If there are multiple longest substrings, then
 * return the first substring encountered with the longest length. k will range
 * from 1 to 6.
 * Sample Test Cases
 * Input:"3aabacbebebe"
 *
 * Output:"cbebebe"
 *
 *
 * Input:"2aabbcbbbadef"
 *
 * Output:"bbcbbb"
 */

// brute force approach: check all possible substrings

function uniqueChars(str) {
  const chars = {};
  for (let i = 0; i < str.length; i++) {
    chars[str[i]] = true;
  }
  return Object.keys(chars).length;
}

function kUniqueCharacters(str) {
  const num = Number(str[0]);
  str = str.slice(1);
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substr = str.slice(i, j);
      if (uniqueChars(substr) === num && substr.length > longest.length) {
        longest = substr;
      }
    }
  }
  return longest;
}

// const test = "3aabacbebebe";
// const test = "2aabbcbbbadef";
const test = "2aabbacbaa";
console.log(kUniqueCharacters(test));

// from https://www.geeksforgeeks.org/find-the-longest-substring-with-k-unique-characters-in-a-given-string/
// not quite working yet

const MAX_CHARS = 26;

function isValid(count, k) {
  let val = 0;
  for (let i = 0; i < MAX_CHARS; i++) {
    if (count[i] > 0) {
      val++;
    }
  }
  return k >= val;
}

function kUniques(str) {
  const k = Number(str[0]);
  const s = str.slice(1);
  let u = 0;
  let count = Array.apply(null, Array(MAX_CHARS)).map(
    Number.prototype.valueOf,
    0,
  );
  for (let i = 0; i < s.length; i++) {
    if (count[s.charCodeAt(i) - "a".charCodeAt(0)] === 0) {
      u++;
    }
    count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  if (u < k) {
    return "Invalid Input: Not enough unique characters";
  }

  let currStart = 0;
  let currEnd = 0;
  let maxWindowSize = 1;
  let maxWindowStart = 0;

  count = Array.apply(null, Array(count.length)).map(
    Number.prototype.valueOf,
    0,
  );

  count[s.charCodeAt(0) - "a".charCodeAt(0)]++;

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - "a".charCodeAt("a")]--;
    currStart++;
    while (!isValid(count, k)) {
      count[s.charCodeAt(currStart) - "a".charCodeAt(0)]--;
      currStart++;
    }
    if (currEnd - currStart + 1 > maxWindowSize) {
      maxWindowSize = currEnd - currStart + 1;
      maxWindowStart = currStart;
    }
  }

  return s.slice(maxWindowStart, maxWindowStart + maxWindowSize);
}

console.log(kUniques(test));
