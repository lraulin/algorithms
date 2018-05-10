/* 
* Using the JavaScript language, have the function PrimeMover(num) return the 
* numth prime number. The range will be from 1 to 10^4. For example: if num is 16 
* the output should be 53 as 53 is the 16th prime number.
*/

// Coderbyte solution
function PrimeMover2(num) {
  // negative numbers cannot be primes
  if (num < 1) {
    return "invalid";
  }

  // first prime number is 2, the only even prime
  if (num === 1) {
    return 2;
  }

  // if greater than 2, start count at 1
  var count = 1;
  var n = 3;

  // loop until we get the numth prime
  while (count != num) {
    // check if n is divisible by each number in between to see if it is a prime
    for (var i = 2; i < n; i++) {
      // if we reach the end we know this number is a prime because it was
      // not divisible by any numbers so increase the count by 1
      if (i === n - 1) {
        count++;
        n++;
        break;
      }

      // if n is divisible by some number, then it is not a prime
      // and we simply move on to the next number
      else if (n % i === 0) {
        n++;
        break;
      }
    }
  }

  return n - 1;
}

PrimeMover2(250);
