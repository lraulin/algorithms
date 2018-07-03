/**
 * Challenge
 * Using the JavaScript language, have the function CharacterRemoval(strArr)
 * read the array of strings stored in strArr, which will contain 2 elements:
 * the first element will be a sequence of characters representing a word, and
 * the second element will be a long string of comma-separated words, in
 * alphabetical order, that represents a dictionary of some arbitrary length.
 * For example: strArr can be: ["worlcde",
 * "apple,bat,cat,goodbye,hello,yellow,why,world"]. Your goal is to determine
 * the minimum number of characters, if any, can be removed from the word so
 * that it matches one of the words from the dictionary. In this case, your
 * program should return 2 because once you remove the characters "c" and "e"
 * you are left with "world" and that exists within the dictionary. If the word
 * cannot be found no matter what characters are removed, return -1.
 * Sample Test Cases
 * Input:"baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"
 *
 * Output:4
 *
 *
 * Input:"apbpleeeef", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"
 *
 * Output:8
 */

function countChars(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    if (!charCount[str[i]]) {
      charCount[str[i]] = 1;
    } else {
      charCount[str[i]]++;
    }
  }
  return charCount;
}

function characterRemoval(strArr) {
  const word = strArr[0];
  const wordMap = countChars(word);
  const dict = strArr[1].split(',');
  // sort from biggest to smallest
  dict.sort((a, b) => b.length - a.length);
  let minChars = -1;
  outerLoop: for (let i = 0; i < dict.length; i++) {
    let removeCount = 0;
    dictWordMap = countChars(dict[i]);
    for (let letter in dictWordMap) {
      // if word doesn't have the necessary characters, skip to next word
      if (!wordMap[letter] || wordMap[letter] < dictWordMap[letter]) {
        continue outerLoop;
      }
    }
    const removeChars = word.length - dict[i].length;
    if (minChars === -1 || removeChars < minChars) {
      minChars = removeChars;
    }
  }
  return minChars;
}

// const test = ['baseball', 'a,all,b,ball,bas,base,cat,code,d,e,quit,z'];
const test = ['apbpleeeef', 'a,ab,abc,abcg,b,c,dog,e,efd,zzzz'];
console.log(characterRemoval(test));
