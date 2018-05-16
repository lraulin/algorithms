/**Using the JavaScript language, have the function AdditivePersistence(num) take 
the num parameter being passed which will always be a positive integer and 
return its additive persistence which is the number of times you must add the 
digits in num until you reach a single digit. For example: if num is 2718 then 
your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you 
stop at 9. 
  */

// don't make functions within a loop
const reducer = (a, c) => Number(a) + Number(c);

// Recursive
function AdditivePersistence(num, count = 0) {
  if (num < 10) return count;
  num = num
    .toString()
    .split("")
    .reduce(reducer);
  count++;
  if (num < 10) return count;
  else return AdditivePersistence(num, count);
}

// With loop
function AdditivePersistence2(num) {
  let count = 0;
  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .reduce(reducer);
    count++;
  }
  return count;
}

let test = 2718;
let x = AdditivePersistence2(test);
console.log(x);
