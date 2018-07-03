/**
 * Challenge
 * Using the JavaScript language, have the function SimplePassword(str) take
 * the str parameter being passed and determine if it passes as a valid
 * password that follows the list of constraints:
 *
 * 1. It must have a capital letter.
 * 2. It must contain at least one number.
 * 3. It must contain a punctuation mark.
 * 4. It cannot have the word "password" in the string.
 * 5. It must be longer than 7 characters and shorter than 31 characters.
 *
 * If all the above constraints are met within the string, the your program
 * should return the string true, otherwise your program should return the
 * string false. For example: if str is "apple!M7" then your program should
 * return "true".
 * Sample Test Cases
 * Input:"passWord123!!!!"
 *
 * Output:"false"
 *
 *
 * Input:"turkey90AAA="
 *
 * Output:"true"
 */

function simplePassword(str) {
  // check length
  if (str.length < 8 || str.length > 30) {
    return false;
  }
  let hasCapital = false;
  let hasNum = false;
  let hasSpecial = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      hasCapital = true;
    }
    if (/[0-9]/.test(str[i])) {
      hasNum = true;
    }
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str[i])) {
      hasSpecial = true;
    }
  }
  if (!hasCapital || !hasNum || !hasSpecial) {
    return false;
  }
  if (str.match(/password/i)) {
    return false;
  }
  return true;
}

function simplePasswordRe(str) {
  re = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/;
  return re.test(str);
}

const test = "apple!M7";
// const test = "passWord123!!!!";
// const test = "turkey90AAA=";
console.log(simplePasswordRe(test));
