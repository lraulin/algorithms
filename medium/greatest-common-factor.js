/**
 * Using the JavaScript language, have the function Division(num1,num2) take both 
parameters being passed and return the Greatest Common Factor. That is, return 
the greatest number that evenly goes into both numbers with no remainder. For 
example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. 
The range for both parameters will be from 1 to 10^3.  
 */

// Linear time
function Division(a, b) {
  if (a < 1 || b < 1) {
    return Error("Input must be greater than zero");
  }
  const max = a > b ? a : b;
  const min = a < b ? a : b;
  for (let i = min; i > 0; i--) {
    if (max % i === 0 && min % i === 0) {
      return i;
    }
  }
  return -1;
}

// console.log(Division(7379697686756, Number.MAX_SAFE_INTEGER));

// Coderbyte solution. Uses Euclid's Algorithm. Probably log time? log(xy)?
function Division2(num1, num2) {
  // setup variables
  var a = num1;
  var b = num2;
  var r;

  // keep using the mod function until a or b hits 0
  while (a > 0 && b > 0) {
    r = a % b;
    a = b;
    b = r;
  }

  // return the non-zero answer
  return a === 0 ? b : a;
}

console.log("GCF");
console.log(Division2(7379697686756, Number.MAX_SAFE_INTEGER));

// Binary GCD algorithm, AKA Stein's Algorithm
function stein(a, b) {
  if (a === 0) return b;
  if (a === 0) return a;
  // Find K, where K is the greatest power of 2 that divides both a and b
  let k = 0;
  while (((a | b) & 1) === 0) {
    a = a >> 1;
    b = b >> 1;
    k++;
  }

  // Dividing by 2 until a is odd
  while ((a & 1) == 0) {
    a = a >> 1;
  }

  // Now a is always odd.
  while (b != 0) {
    // If b is even, remove all factors of 2 in b
    while ((b & 1) == 0) {
      b = b >> 1;
    }

    // Now and b are both odd.
    if (a > b) {
      [a, b] = [b, a];
    }
    b = b - a;
  }
  // restore common factors of 2
  return a << k;
}

const a = 34;
const b = 17;
console.log(stein(a, b));
