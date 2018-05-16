require("@std/esm");

/**Using the JavaScript language, have the function Superincreasing(arr) take the 
array of numbers stored in arr and determine if the array forms a 
superincreasing sequence where each element in the array is greater than the 
sum of all previous elements. The array will only consist of positive integers. 
For example: if arr is [1, 3, 6, 13, 54] then your program should return the 
string "true" because it forms a superincreasing sequence. If a superincreasing 
sequence isn't formed, then your program should return the string "false"   */

function Superincreasing(arr) {
  const reducer = (a, b) => a + b;
  for (let i = 1; i < arr.length; i++) {
    const sum = arr.slice(0, i).reduce(reducer);
    if (sum >= arr[i]) {
      return false.toString();
    }
  }
  return true.toString();
}

console.log(Superincreasing([1, 2, 4, 9, 30]));

export default Superincreasing;
