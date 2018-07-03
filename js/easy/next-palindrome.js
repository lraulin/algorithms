/**
 * Using the JavaScript language, have the function NextPalindrome(num)
 * take the num parameter being passed and return the next largest palindromic
 * number. The input can be any positive integer. For example: if num is 24,
 * then your program should return 33 because that is the next largest number
 * that is a palindrome.
 */

function NextPalindrome(num) {
  while (true) {
    num++;
    if (
      num ==
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) {
      return num;
    }
  }
}

const test = 2;
console.log(NextPalindrome(test));
