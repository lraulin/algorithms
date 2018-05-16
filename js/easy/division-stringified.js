/**Using the JavaScript language, have the function DivisionStringified(num1,num2) 
take both parameters being passed, divide num1 by num2, and return the result 
as a string with properly formatted commas. If an answer is only 3 digits long, 
return the number with no commas (ie. 2 / 3 should output "1"). For example: if 
num1 is 123456789 and num2 is 10000 the output should be "12,346".   */

// They don't spell it out, but you have to round to the nearest integer.

function DivisionStringified(num1, num2) {
  let res = Math.round(num1 / num2);
  return res.toLocaleString();
}

function HardWay(a) {
  let num = '';
  let count = 0;
  const arr = a.toString().split('');
  for (let i = arr.length - 1; i >= 0; i--) {
    num = arr[i] + num;
    count++;
    if (count == 3 && i > 0) {
      num = ',' + num;
      count = 0;
    }
  }
  console.log(num);
  return num;
}

console.log(HardWay(91));
