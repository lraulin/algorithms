/**
 * Challenge
 * Using the JavaScript language, have the function ApproachingFibonacci(arr)
 * take the arr parameter being passed which will be an array of integers and
 * determine the smallest positive integer (including zero) that can be added
 * to the array to make the sum of all of the numbers in the array add up to
 * the next closest Fibonacci number. For example: if arr is [15, 1, 3], then
 * your program should output 2 because if you add up 15 + 1 + 3 + 2 you get 21
 * which is the closest Fibonacci number.
 *
 * Hard challenges are worth 15 points and you are not timed for them.
 * Sample Test Cases
 * Input:5,2,1
 *
 * Output:0
 *
 *
 * Input:1,20,2,5
 *
 * Output:6
 */

function ApproachingFibonacci(arr) {
  // find sum of array
  const sum = arr.reduce((a, c) => a + c);
  // find first Fibonacci number equal or larger than sum
  let fib1 = 0;
  let fib2 = 1;
  while (sum > fib2) {
    let temp = fib1 + fib2;
    fib1 = fib2;
    fib2 = temp;
  }
  return fib2 - sum;
}

// const test = [5, 2, 1];
const test = [1, 20, 2, 5];
console.log(ApproachingFibonacci(test));
