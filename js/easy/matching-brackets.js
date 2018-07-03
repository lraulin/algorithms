/**
 *
 * ChallengesLearn ⌄ProfileOrganizationsPremium Membership
 *
 * Tags: string manipulation, searching, Facebook, recursion | Difficulty: Easy
 * Challenge
 * Using the JavaScript language, have the function RemoveBrackets(str) take
 * the str string parameter being passed, which will contain only the
 * characters "(" and ")", and determine the minimum number of brackets that
 * need to be removed to create a string of correctly matched brackets. For
 * example: if str is "(()))" then your program should return the number 1. The
 * answer could potentially be 0, and there will always be at least one set of
 * matching brackets in the string.
 * Sample Test Cases
 * Input:"(())()((("
 *
 * Output:3
 *
 *
 * Input:"(()("
 *
 * Output:2
 */

function RemoveBrackets(str) {
  const matchArr = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      matchArr.push("(");
    } else if (str[i] === ")") {
      if (!matchArr.pop()) {
        count++;
      }
    }
  }
  return count + matchArr.length;
}

// test = "(())()(((";
// test = "(()(";
test = ")((";
console.log(RemoveBrackets(test));
