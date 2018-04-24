function LetterCapitalize(str) {
  str = str.split(' ').map((x) => {
    return x.charAt(0).toUpperCase() + x.substring(1, x.length);
  });
  console.log(str);
  return str.join(' ');
}

string = 'hello world';
answer = LetterCapitalize(string);
console.log(answer);
