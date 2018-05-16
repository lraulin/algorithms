"""
Using the Python language, have the function PrimeMover(num) return the 
numth prime number. The range will be from 1 to 10^4. For example: if num is 16 
the output should be 53 as 53 is the 16th prime number.  
"""


def prime_mover(num):
    primes = [2]
    current = 3
    while len(primes) < num:
        for prime in primes:
            if current % prime == 0:
                break
        # Python for has an else clause! It executes if the loop completes
        # without encountering break.
        else:
            primes.append(current)
        current += 2
    print(primes)
    return(primes[-1])


print(prime_mover(16))


def PrimeMover(num):
    # Coderbyte solution
    # negative numbers cannot be primes
    if num < 1:
        return 'invalid'

    # first prime number is 2, the only even prime
    if num == 1:
        return 2

    # if greater than 2, start count at 1
    count = 1
    n = 3

    # loop until we get the numth prime
    while count != num:

        # check if n is divisible by each number in between to see if it is a prime
        for i in range(2, n):

            # if we reach the end we know this number is a prime because it was
            # not divisible by any numbers so increase the count by 1
            if i == n-1:
                count += 1
                n += 1
                break

            # if n is divisible by some number, then it is not a prime
            # and we simply move on to the next number
            elif n % i == 0:
                n += 1
                break

    return n-1
