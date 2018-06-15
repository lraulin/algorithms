/**
 * Challenge
 * Using the JavaScript language, have the function BracketMatcher(str) take
 * the str parameter being passed and return 1 if the brackets are correctly
 * matched and each one is accounted for. Otherwise return 0. For example: if
 * str is "(hello (world))", then the output should be 1, but if str is
 * "((hello (world))" the the output should be 0 because the brackets do not
 * correctly match up. Only "(" and ")" will be used as brackets. If str
 * contains no brackets return 1.
 * Sample Test Cases
 * Input:"(coder)(byte))"
 *
 * Output:0
 *
 *
 * Input:"(c(oder)) b(yte)"
 *
 * Output:1
 */

function bracketMatcher(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push("(");
    } else if (str[i] === ")") {
      if (!stack.pop()) {
        return 0;
      }
    }
  }
  if (stack.length) {
    return 0;
  } else {
    return 1;
  }
}

// test = "(coder)(byte))";
test = "(c(oder)) b(yte)";
console.log(bracketMatcher(test));
