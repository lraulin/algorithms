function rot13(str) {
  const shift = 13;
  arr = str.toUpperCase().split("");
  arr = arr.map(x => {
    let code = x.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      code += shift;
      if (code > 90) {
        code -= 26;
      }
    }
    return code;
  });
  return String.fromCharCode.apply(null, arr);
}

// Change the inputs below to test
answer = rot13("SERR PBQR PNZC");
console.log(answer);
