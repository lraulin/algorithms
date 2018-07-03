/**
 * Challenge
 * Using the JavaScript language, have the function PrimeChecker(num) take num
 * and return 1 if any arrangement of num comes out to be a prime number,
 * otherwise return 0. For example: if num is 910, the output should be 1
 * because 910 can be arranged into 109 or 019, both of which are primes.
 *
 * Sample Test Cases
 * Input:98   Output:1
 * Input:598  Output:1
 *
 * Hint
 * It might help to first list out every permutation of the numbers and check
 * if any of those are prime. A prime sieve might also speed things up!
 */

function isPrime(num) {
  /* param num (number): number to check
   * return: true if num is prime, else false
   */
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

function findPermutations(str) {
  // recursively returns an array of all unique permutations of a string
  // if it's a one character string, it's the only permutation
  if (str.length < 2) {
    return [str];
  }
  const permutations = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // to avoid duplicates,
    // skip this iteration if the current char is identical to a previous char
    if (str.indexOf(char) !== i) {
      continue;
    }
    const remainingStr = str.slice(0, i) + str.slice(i + 1, str.length);
    for (const subPermutation of findPermutations(remainingStr)) {
      permutations.push(char + subPermutation);
    }
  }
  return permutations;
}

function primeChecker(num) {
  // if it's only one digit, skip checking permutations
  if (num < 10) {
    if (isPrime(num)) {
      return 1;
    } else {
      return 0;
    }
  }
  // get array of distinct permutations of num as strings
  const permutations = findPermutations(num.toString());
  // check each permutation until a prime is found
  for (const numStr of permutations) {
    if (isPrime(Number(numStr))) {
      return 1;
    }
  }
  // no primes were found in any permutation
  return 0;
}

// const test = 910;
// const test = 98;
// const test = 598;
const test = 2222;
console.log(primeChecker(test));
