/**
 * Challenge
 * Using the JavaScript language, have the function MissingDigitII(str) take
 * the str parameter, which will be a simple mathematical formula with three
 * numbers, a single operator (+, -, *, or /) and an equal sign (=) and return
 * the two digits that complete the equation. In two of the numbers in the
 * equation, there will be a single ? character, and your program should
 * determine what digits are missing and return them separated by a space. For
 * example, if str is "38?5 * 3 = 1?595" then your program should output 6 1.
 *
 * The ? character will always appear in both the first number and the last
 * number in the mathematical expression. There will always be a unique
 * solution.
 * Sample Test Cases
 * Input:"56? * 106 = 5?678"
 *
 * Output:"3 9"
 *
 *
 * Input:"18?1 + 9 = 189?"
 *
 * Output:"8 0"
 */

function insertDigit(str, num) {
  let index = str.indexOf("?");
  return Number(str.slice(0, index) + num + str.slice(index + 1));
}

function missingDigit(str) {
  let [num1, op, num2, eq, num3] = str.split(" ");
  if (!Number(num1) && !Number(num2)) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (op === "+") {
          if (insertDigit(num1, i) + insertDigitDi(num2, j) === Number(num3)) {
            return i.toString() + " " + j.toString();
          }
        } else if (op === "-") {
          if (insertDigit(num1, i) - insertDigitDi(num2, j) === Number(num3)) {
            return i.toString() + " " + j.toString();
          }
        } else if (op === "*") {
          if (insertDigit(num1, i) * insertDigitDi(num2, j) === Number(num3)) {
            return i.toString() + " " + j.toString();
          }
        } else if (op === "/") {
          if (insertDigit(num1, i) / insertDigitDi(num2, j) === Number(num3)) {
            return i.toString() + " " + j.toString();
          }
        }
      }
    }
  } else if (!Number(num1) && !Number(num3)) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (op === "+") {
          if (insertDigit(num1, i) + Number(num2) === insertDigit(num3, j)) {
            return i.toString() + " " + j.toString();
          }
        } else if (op === "-") {
          if (insertDigit(num1, i) - Number(num2) === insertDigit(num3, j)) {
            return i.toString() + " " + j.toString();
          }
        } else if (op === "*") {
          if (insertDigit(num1, i) * Number(num2) === insertDigit(num3, j)) {
            return i.toString() + " " + j.toString();
          }
        } else if (op === "/") {
          if (insertDigit(num1, i) / Number(num2) === insertDigit(num3, j)) {
            return i.toString() + " " + j.toString();
          }
        }
      }
    }
  } else if (!Number(num2) && !Number(num3)) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (op === "+") {
          if (Number(num1) + insertDigit(num2, i) === insertDigit(num3, j)) {
            return i.toString() + " " + j.toString();
          }
        } else if (op === "-") {
          if (Number(num1) - insertDigit(num2, i) === insertDigit(num3, j)) {
            return i.toString() + " " + j.toString();
          }
        } else if (op === "*") {
          if (Number(num1) * insertDigit(num2, i) === insertDigit(num3, j)) {
            return i.toString() + " " + j.toString();
          }
        } else if (op === "/") {
          if (Number(num1) / insertDigit(num2, i) === insertDigit(num3, j)) {
            return i.toString() + " " + j.toString();
          }
        }
      }
    }
  }
}

test = "18?1 + 9 = 189?";
console.log(missingDigit(test));
