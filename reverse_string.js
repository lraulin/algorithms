// One way
function FirstReverse(str) {
  let array = str.split('');
  let revStr = '';
  for (let index = array.length; index > 0; index--) {
    revStr += array[index];
  }
  // code goes here
  return revStr;
}

// Better way
function reverseString(str) {
  var newStr = str.split('').reverse().join('');
  return newStr;
}
