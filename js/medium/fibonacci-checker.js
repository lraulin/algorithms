/**
 * Challenge
 * Using the JavaScript language, have the function FibonacciChecker(num)
 * return the string yes if the number given is part of the Fibonacci sequence.
 * This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you
 * add the previous two numbers up. The first two numbers are 0 and 1, then
 * comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the
 * string no.
 * Sample Test Cases
 * Input:34
 *
 * Output:"yes"
 *
 *
 * Input:54
 *
 * Output:"no"
 */

function fibChecker(num) {
  const nums = [0, 1];
  while (nums[nums.length - 1] < num) {
    nums.push(nums[nums.length - 1] + nums[nums.length - 2]);
    if (nums[nums.length - 1] === num) {
      return "yes";
    }
  }
  return "no";
}

console.log(fibChecker(34));
