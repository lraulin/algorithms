/**Using the JavaScript language, have the function SecondGreatLow(arr) take the 
array of numbers stored in arr and return the second lowest and second greatest 
numbers, respectively, separated by a space. For example: if arr contains [7, 
7, 12, 98, 106] the output should be 12 98. The array will not be empty and 
will contain at least 2 numbers. It can get tricky if there's just two numbers! 
*/

function secondLowest(inputArray) {
  arr = inputArray.slice(0);
  const lowest = Math.min(...arr);
  arr.splice(arr.indexOf(lowest), 1);
  return Math.min(...arr);
}

function secondGreatest(inputArray) {
  arr = inputArray.slice(0);
  const lowest = Math.max(...arr);
  arr.splice(arr.indexOf(lowest), 1);
  return Math.max(...arr);
}

function SecondGreatLow(arr) {
  arr = [...new Set(arr)];
  console.log(arr);
  return '' + secondLowest(arr) + ' ' + secondGreatest(arr);
}

console.log(SecondGreatLow([2, 2, 2, 5, 5, 5, 6]));
