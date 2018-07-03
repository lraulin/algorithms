/**
 * Using the JavaScript language, have the function EvenPairs(str) take
 * the str parameter being passed and determine if a pair of adjacent even
 * numbers exists anywhere in the string. If a pair exists, return the string
 * true, otherwise return false. For example: if str is "f178svg3k19k46" then
 * there are two even numbers at the end of the string, "46" so your program
 * should return the string true. Another example: if str is "7r5gg812" then
 * the pair is "812" (8 and 12) so your program should return the string true.
 */

// First I thought I'd have to do loops within loops within loops to find
// every combination in case one or more of the even nums is double digit or
// more, but the trick is any even number has to end in an even number. So any
// possible string of consecutive numbers will have at least 2 even digits. If
// it has 2+ even digits, you can split it up into at least 2 even nums.

function EvenPairs(str) {
  return /[02468]\d{0,}[02468]/.test(str);
}

//const test = '7r5gg812';
//const test = 'f178svg3k19k56';i
//const test = 'abc';
const test = 'jfb735f9ph8152';
console.log(EvenPairs(test));
