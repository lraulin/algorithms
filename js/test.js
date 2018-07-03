function swapChars(str, i1, i2) {
  const char1 = str[i1];
  const char2 = str[i2];
  strArr = str.split("");
  strArr[i1] = char2;
  strArr[i2] = char1;
  return strArr.join("");
}

const testStr = "hello";
console.log(swapChars(testStr, 1, 4));
