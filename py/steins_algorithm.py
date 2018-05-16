# https://www.geeksforgeeks.org/steins-algorithm-for-finding-gcd/


def gcd(a, b):
    """Stein's algorithm--Iterative implementation."""

    # GCD(0, b) == b; GCD(a, 0) == a,
    # GCD(0, 0) == 0
    if (a == 0):
        return b

    if (b == 0):
        return a

    # Finding K, where K is the greatest
    # power of 2 that divides both a and
    # b.
    k = 0

    while(((a | b) & 1) == 0):
        a = a >> 1
        b = b >> 1
        k = k + 1

    # Dividing a by 2 until a becomes odd
    while ((a & 1) == 0):
        a = a >> 1

    # From here on, 'a' is always odd.
    while(b != 0):

        # If b is even, remove all factor of
        # 2 in b
        while ((b & 1) == 0):
            b = b >> 1

        # Now a and b are both odd. Swap if
        # necessary so a <= b, then set
        # b = b - a (which is even).
        if (a > b):

            # Swap u and v.
            temp = a
            a = b
            b = temp

        b = (b - a)

    # restore common factors of 2
    return (a << k)


# Driver code
a = 34
b = 17

print("Gcd of given numbers is ", gcd(a, b))

# This code is contributed by Nikita Tiwari.


def gcdRecursive(a, b):
    """Recursive Python 3 program to implement Stein's Algorithm."""

    if (a == b):
        return a

    # GCD(0, b) == b; GCD(a, 0) == a,
    # GCD(0, 0) == 0
    if (a == 0):
        return b

    if (b == 0):
        return a

    # look for factors of 2
    # a is even
    if ((~a & 1) == 1):

        # b is odd
        if ((b & 1) == 1):
            return gcd(a >> 1, b)
        else:
            # both a and b are even
            return (gcd(a >> 1, b >> 1) << 1)

    # a is odd, b is even
    if ((~b & 1) == 1):
        return gcd(a, b >> 1)

    # reduce larger number
    if (a > b):
        return gcd((a - b) >> 1, b)

    return gcd((b - a) >> 1, a)


# Driver code
a = 34
b = 17
print("Gcd of given numbers is ", gcdRecursive(a, b))

# This code is contributed by Nikita Tiwari.
