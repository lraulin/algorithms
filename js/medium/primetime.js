/**
 * Challenge
 * Using the JavaScript language, have the function PrimeTime(num) take the num
 * parameter being passed and return the string true if the parameter is a
 * prime number, otherwise return the string false. The range will be between 1
 * and 2^16.
 * Sample Test Cases
 * Input:19
 *
 * Output:"true"
 *
 *
 * Input:110
 *
 * Output:"false"
 *
 * Hint
 * A prime number is only divisible by 1 and itself, so a simple way to check
 * if a number is prime is to try and divide it by every single number from 1
 * to itself and see if any numbers go into it without a remainder.
 */

function PrimeTime(num) {
  if (!Number.isInteger(num)) {
    throw TypeError("Input must be an integer");
  }

  if (num < 2) {
    return false;
  }

  // 2 is the only even prime number
  if (num != 2 && num % 2 === 0) {
    return false;
  }
  // No point checking even #s or #s > sqrt
  // If one divisor is greater than sqrt, the other must be lesser,
  // And we'd have found it already
  for (let i = 3; i < Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  // Oops, we didn't check 2! That's ok!
  return true;
}

primes = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
];

for (const prime of primes) {
  console.log(PrimeTime(prime));
}

// Coderbyte solution is exactly the same as mine, except it checks
// 4 times as many numbers for no reason.
