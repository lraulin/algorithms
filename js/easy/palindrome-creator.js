/**
 * Using the JavaScript language, have the function
 * PalindromeCreator(str) take the str parameter being passed and determine if
 * it is possible to create a palindromic string of at least 3 characters by
 * removing 1 or 2 characters. For example: if str is "abjchba" then you can
 * remove the characters jc to produce "abhba" which is a palindrome. For this
 * example your program should return the two characters that were removed with
 * no delimiter and in the order they appear in the string, so jc. If 1 or 2
 * characters cannot be removed to produce a palindrome, then return the string
 * not possible. If the input string is already a palindrome, your program
 * should return the string palindrome.   The input will only contain lowercase
 * alphabetic characters. Your program should always attempt to create the
 * longest palindromic substring by removing 1 or 2 characters (see second
 * sample test case as an example). The 2 characters you remove do not have to
 * be adjacent in the string.
 */

function isPalindrome(str) {
  return (
    str ==
      str
        .split("")
        .reverse()
        .join("") && str.length > 2
  );
}

function removeCharAt(str, n) {
  return str.slice(0, n) + str.slice(n + 1);
}

function PalindromeCreator(str) {
  if (isPalindrome(str)) {
    return "palindrome";
  }
  for (let i = 0; i < str.length; i++) {
    tmp = removeCharAt(str, i);
    if (isPalindrome(tmp)) {
      return str[i];
    }
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      tmp = removeCharAt(str, i);
      tmp = removeCharAt(tmp, j - 1);
      if (isPalindrome(tmp)) {
        return str[i] + str[j];
      }
    }
  }
  return "not possible";
}

const test = "vhhgghhgghhk";
console.log(PalindromeCreator(test));
