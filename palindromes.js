function reverseString(str) {
  console.log(str);
  var newStr = str.split('').reverse().join('');
  return newStr;
}

function palindrome(str) {
  str = str.toLowerCase().replace(/[^A-za-z0-9]|_/g, '');
  console.log(str);
  return reverseString(str) == str;
}
