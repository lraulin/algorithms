// Using the JavaScript language, have the function LetterChanges(str) take the
// str parameter being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following it in the alphabet
// (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string
// (a, e, i, o, u) and finally return this modified string.

function LetterChanges(str) {
  let arr = str.split('');
  arr = arr.map((x) => {
    if (/^[a-xA-X]$/.test(x)) {
      x = x.charCodeAt(0);
      x++;
      x = String.fromCharCode(x);
      if (/^[aeiou]$/i.test(x)) {
        x = x.toUpperCase();
      }
    } else if (/^[zZ]$/.test(x)) {
      x = x.charCodeAt(0);
      x -= 25;
      x = String.fromCharCode(x);
    }
    return x;
  });
  return arr.join('');
}

test1 = 'Z3b4z!!@';
const res = LetterChanges(test1);
console.log(res);
