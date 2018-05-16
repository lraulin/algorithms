/**Using the JavaScript language, have the function OverlappingRanges(arr) take 
the array of numbers stored in arr which will contain 5 positive integers, the 
first two representing a range of numbers (a to b), the next 2 also 
representing another range of integers (c to d), and a final 5th element (x) 
which will also be a positive integer, and return the string true if both sets 
of ranges overlap by at least x numbers. For example: if arr is [4, 10, 2, 6, 
3] then your program should return the string true. The first range of numbers 
are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. The 
last element in the array is 3, and there are 3 numbers that overlap between 
both ranges: 4, 5, and 6. If both ranges do not overlap by at least x numbers, 
then your program should return the string false.   */

function OverlappingRanges(arr) {
  const arr1 = [];
  const arr2 = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    arr1.push(i);
  }
  for (let i = arr[2]; i <= arr[3]; i++) {
    arr2.push(i);
  }
  const intersection = arr1.filter(x => arr2.indexOf(x) !== -1);
  return intersection.length >= arr[4];
}

console.log(OverlappingRanges([5, 11, 1, 5, 1]));
