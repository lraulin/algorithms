/**Using the JavaScript language, have the function LetterCountI(str) take the str 
parameter being passed and return the first word with the greatest number of 
repeated letters. For example: "Today, is the greatest day ever!" should return 
greatest because it has 2 e's (and 2 t's) and it comes before ever which also 
has 2 e's. If there are no words with repeating letters return -1. Words will 
be separated by spaces.   */

function LetterCount(str) {
  const arr = str.split(" ");
  let mostWord = -1;
  let mostNum = 0;
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i].split("");
    let maxDups = 0;
    for (let j = 0; j < word.length; j++) {
      const map = new Map();
      if (map.has(word[j])) {
        map.set(word[j], word[j] + 1);
      } else {
        map.set((word[j] = 1));
      }
    }
  }
  return mostWord;
}

console.log(LetterCount("Hello apple pie"));
