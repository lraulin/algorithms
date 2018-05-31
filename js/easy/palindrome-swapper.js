/**
 * Challenge
 * Using the JavaScript language, have the function PalindromeSwapper(str) take
 * the str parameter being passed and determine if a palindrome can be created
 * by swapping two adjacent characters in the string. If it is possible to
 * create a palindrome, then your program should return the palindrome, if not
 * then return the string -1. The input string will only contain alphabetic
 * characters. For example: if str is "rcaecar" then you can create a
 * palindrome by swapping the second and third characters, so your program
 * should return the string racecar which is the final palindromic string.
 * Sample Test Cases
 * Input:"anna"
 *
 * Output:"anna"
 *
 *
 * Input:"kyaak"
 *
 * Output:"kayak"
 */

function PalindromeSwapper(str) {
  if (
    str ===
    str
      .split("")
      .reverse()
      .join("")
  ) {
    return str;
  }
  for (let i = 1; i < str.length; i++) {
    const swap = str.slice(0, i - 1) + str[i] + str[i - 1] + str.slice(i + 1);
    console.log(swap);
    if (
      swap ===
      swap
        .split("")
        .reverse()
        .join("")
    ) {
      return swap;
    }
  }
  return -1;
}

test = "racecra";
console.log(PalindromeSwapper(test));
