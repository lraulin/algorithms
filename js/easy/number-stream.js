/**
 * Challenge
 * Using the JavaScript language, have the function NumberStream(str) take the
 * str parameter being passed which will contain the numbers 2 through 9, and
 * determine if there is a consecutive stream of digits of at least N length
 * where N is the actual digit value. If so, return the string true, otherwise
 * return the string false. For example: if str is "6539923335" then your
 * program should return the string true because there is a consecutive stream
 * of 3's of length 3. The input string will always contain at least one digit.
 * Sample Test Cases
 * Input:"5556293383563665"
 *
 * Output:"false"
 *
 *
 * Input:"5788888888882339999"
 *
 * Output:"true"
 */

function NumberStream(str) {
  let num = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      num++;
    } else {
      num = 1;
    }
    if (num === Number(str[i])) {
      return "true";
    }
  }
  return "false";
}

// test = "5788888888882339999";
// test = "5556293383563665";
// test = "6539923335";
test = "57888888882339999";
console.log(NumberStream(test));
