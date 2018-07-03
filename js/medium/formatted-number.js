/**
 * Challenge
 * Using the JavaScript language, have the function FormattedNumber(strArr)
 * take the strArr parameter being passed, which will only contain a single
 * element, and return the string true if it is a valid number that contains
 * only digits with properly placed decimals and commas, otherwise return the
 * string false. For example: if strArr is ["1,093,222.04"] then your program
 * should return the string true, but if the input were ["1,093,22.04"] then
 * your program should return the string false. The input may contain
 * characters other than digits.
 * Sample Test Cases
 * Input:"0.232567"
 *
 * Output:"true"
 *
 *
 * Input:"2,567.00.2"
 *
 * Output:"false"
 */

function formattedNumber(str) {
  const dotSplit = str.split(".");
  const rounded = dotSplit[0].split(",");
  // check that there's no more than one dot
  if (dotSplit.length > 2) {
    return "false";
  }
  re = /[0-9]/;
  if (dotSplit[1]) {
    for (let i = 0; i < dotSplit[1].length; i++) {
      if (!re.test(dotSplit[1][i])) {
        return "false";
      }
    }
  }
  // check that the first value before a comma has 1~3 digits
  if (rounded[0].length > 3 || rounded[0].length < 1) {
    return "false";
  }
  // check that every comma separated group after the first has 3 digits
  for (let i = 1; i < rounded.length; i++) {
    if (rounded[i].length !== 3) {
      return "false";
    }
  }
  return "true";
}

// test = "0.232567";
test = "2,567,400.265";
console.log(formattedNumber(test));
