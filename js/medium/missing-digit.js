/**
 * Challenge
 * Using the JavaScript language, have the function MissingDigit(str) take the
 * str parameter, which will be a simple mathematical formula with three
 * numbers, a single operator (+, -, *, or /) and an equal sign (=) and return
 * the digit that completes the equation. In one of the numbers in the
 * equation, there will be an x character, and your program should determine
 * what digit is missing. For example, if str is "3x + 12 = 46" then your
 * program should output 4. The x character can appear in any of the three
 * numbers and all three numbers will be greater than or equal to 0 and less
 * than or equal to 1000000.
 * Sample Test Cases
 * Input:"4 - 2 = x"
 *
 * Output:2
 *
 *
 * Input:"1x0 * 12 = 1200"
 *
 * Output:0
 */

function missingDigit(str) {
  let [num1, op, num2, eq, num3] = str.split(" ");
  if (!Number(num3)) {
    let leftside;
    if (op === "+") {
      leftside = Number(num1) + Number(num2);
    } else if (op === "-") {
      leftside = Number(num1) - Number(num2);
    } else if (op === "*") {
      leftside = Number(num1) * Number(num2);
    } else if (op === "/") {
      leftside = Number(num1) / Number(num2);
    }
    return leftside.toString()[num3.indexOf("x")];
  } else if (!Number(num1)) {
    let rightside;
    if (op === "+") {
      rightside = Number(num3) - Number(num2);
    } else if (op === "-") {
      rightside = Number(num3) + Number(num2);
    } else if (op === "*") {
      rightside = Number(num3) / Number(num2);
    } else if (op === "/") {
      rightside = Number(num3) * Number(num2);
    }
    return rightside.toString()[num1.indexOf("x")];
  } else if (!Number(num2)) {
    let rightside;
    if (op === "+") {
      rightside = Number(num3) - Number(num1);
    } else if (op === "-") {
      rightside = Number(num3) - Number(num1);
      rightside *= -1;
    } else if (op === "*") {
      rightside = Number(num3) / Number(num1);
    } else if (op === "/") {
      rightside = Number(num1) / Number(num3);
    }
    return rightside.toString()[num2.indexOf("x")];
  }
}

test = "12 / x = 4";
console.log(missingDigit(test));
