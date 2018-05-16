"""
Using the Python language, have the function BitwiseOne(strArr) take the array 
of strings stored in strArr, which will only contain two strings of equal 
length that represent binary numbers, and return a final binary string that 
performed the bitwise OR operation on both strings. A bitwise OR operation 
places a 0 in the new string where there are zeroes in both binary strings, 
otherwise it places a 1 in that spot. For example: if strArr is ["1001", 
"0100"] then your program should return the string "1101" 
"""


def BitwiseOne(strArr):
    num0 = int(strArr[0], base=2)
    num1 = int(strArr[1], base=2)
    return str(bin(num0 | num1))[2:]


BitwiseOne(["100", "000"])
