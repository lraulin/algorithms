function findLongestWordLength(str) {
  let arr = str.split(' ');
  let max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
    }
  }
  return max;
}

const str1 = "hello I love you won't you tell me your name";
// console.log(findLongestWordLength(str1));

// Using traditional for iteration
function findLongestWord(str) {
  const re = /\W/g; // matches all non-alphanumeric
  const arr = str.split(re);
  let longestWord = '';
  console.log('Length = ' + arr.length);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}

// console.log('The longest word is: ' + findLongestWord(str1));

// Using ES6 for...in iteration
function findLongestWord2(str) {
  const re = /\W/g; // matches all non-alphanumeric
  const arr = str.split(re);
  let longestWord = '';
  for (word of arr) {
    console.log(word);
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const answer = findLongestWord2(str1);
console.log('The longest word is: ' + answer);

const str2 = 'coderbyte';
const answer2 = FirstReverse(str2);
console.log(answer2);
