function LetterCountI(arr) {
  arr = arr
    .toLowerCase()
    .replace(/[^a-z\s]|_/g, '')
    .split(' ');
  let mostRepeats = 1;
  let wordWithMost = '';
  for (let i = 0; i < arr.length; i++) {
    let maxInWord = 0;
    let map = {};
    for (let j = 0; j < arr[i].length; j++) {
      if (!map.hasOwnProperty(arr[i][j])) {
        map[arr[i][j]] = 1;
      } else {
        map[arr[i][j]] = map[arr[i][j]] + 1;
      }
    }
    let wordMax = Math.max(...Object.values(map));
    if (wordMax > mostRepeats) {
      mostRepeats = wordMax;
      wordWithMost = arr[i];
    }
  }
  if (mostRepeats === 1) {
    return -1;
  } else {
    return wordWithMost;
  }
}

console.log(letterCount('the dog and cat'));
