/**
 * Challenge
 * Using the JavaScript language, have the function
 * FormattedDivision(num1,num2) take both parameters being passed, divide num1
 * by num2, and return the result as a string with properly formatted commas
 * and 4 significant digits after the decimal place. For example: if num1 is
 * 123456789 and num2 is 10000 the output should be "12,345.6789". The output
 * must contain a number in the one's place even if it is a zero.
 * Sample Test Cases
 * Input:2 & num2 = 3
 *
 * Output:"0.6667"
 *
 *
 * Input:10 & num2 = 10
 *
 * Output:"1.0000"
 */

function formattedDivision(num1, num2) {
  let answer = num1 / num2;
  answer = answer.toFixed(4);
  console.log(answer);
  answer = answer.split(".");
  let commaPos = -3;
  while (Math.abs(commaPos) < answer[0].length) {
    answer[0] = answer[0].slice(0, commaPos) + "," + answer[0].slice(commaPos);
    commaPos -= 4;
  }
  return answer.join(".");
}

console.log(formattedDivision(732646454452122, 3));
