/**
 * Challenge
 * Using the JavaScript language, have the function CountingAnagrams(str) take
 * the str parameter and determine how many anagrams exist in the string. An
 * anagram is a new word that is produced from rearranging the characters in a
 * different word, for example: cars and arcs are anagrams. Your program should
 * determine how many anagrams exist in a given string and return the total
 * number. For example: if str is "cars are very cool so are arcs and my os"
 * then your program should return 2 because "cars" and "arcs" form 1 anagram
 * and "so" and "os" form a 2nd anagram. The word "are" occurs twice in the
 * string but it isn't an anagram because it is the same word just repeated.
 * The string will contain only spaces and lowercase letters, no punctuation,
 * numbers, or uppercase letters.
 *
 * Hard challenges are worth 15 points and you are not timed for them.
 * Sample Test Cases
 * Input:"aa aa odg dog gdo"
 * Output:2
 *
 * What? How do three words all anagrams of each other count as 2 anagrams?
 *
 * Input:"a c b c run urn urn"
 * Output:1
 */

function isAnagram(a, b) {
  if (a === b) {
    return false;
  } else {
    return (
      a
        .split('')
        .sort()
        .join('') ===
      b
        .split('')
        .sort()
        .join('')
    );
  }
}

function CountingAnagrams(str) {
  const arr = str.split(' ');
  // use hashmap to store anagram pairs
  const anagrams = {};
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (isAnagram(arr[i], arr[j])) {
        let pair = [arr[i], arr[j]];
        // sort pair lexographically so no pair is counted twice
        pair.sort();
        anagrams[pair.join('')] = true;
      }
    }
  }
  return Object.keys(anagrams).length;
}

const test = 'aa aa odg dog gdo';
console.log(CountingAnagrams(test));
