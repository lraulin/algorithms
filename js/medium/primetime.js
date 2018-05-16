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
