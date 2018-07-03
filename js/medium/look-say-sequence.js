/**
 * Challenge
 * Using the JavaScript language, have the function LookSaySequence(num) take
 * the num parameter being passed and return the next number in the sequence
 * according to the following rule: to generate the next number in a sequence
 * read off the digits of the given number, counting the number of digits in
 * groups of the same digit. For example, the sequence beginning with 1 would
 * be: 1, 11, 21, 1211, ... The 11 comes from there being "one 1" before it and
 * the 21 comes from there being "two 1's" before it. So your program should
 * return the next number in the sequence given num.
 * Sample Test Cases
 * Input:1211
 *
 * Output:111221
 *
 *
 * Input:2466
 *
 * Output:121426
 */

function lookSaySequence(num) {
  const str = "" + num;
  let count = 1;
  let currentDigit = str[0];
  let res = "";
  // looping once out of bounds is deliberate so the last digit will be dealt
  // with
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === currentDigit) {
      count++;
    } else {
      res += count + currentDigit;
      currentDigit = str[i];
      count = 1;
    }
  }
  return Number(res);
}

// const test = 1211; // output: 111221
const test = 2466; // output: 121426
console.log(lookSaySequence(test));
