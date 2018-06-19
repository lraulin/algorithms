# Using the Python language, have the function BinaryReversal(str)
# take the  str parameter being passed, which will be a positive integer, take
# its binary  representation, reverse that string of bits, and then finally
# return the new  reversed string in decimal form. For example: if str is "47"
# then the binary  version of this integer is 00101111. Your program should
# reverse this binary  string which then becomes: 11110100 and then finally
# return the decimal version  of this string, which is 244.


def BinaryReversal(s):
    s = bin(int(s))[2:]
    bits = 16 if len(s) > 8 else 8
    s = '0' * (bits - len(s)) + s
    s = s[::-1]
    return str(int(s, 2))


while(True):
    print(BinaryReversal(input('\n>')))
