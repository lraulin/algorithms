def BinaryReversal(s):
    s = bin(int(s))[2:]
    bits = 16 if len(s) > 8 else 8
    s = '0' * (bits - len(s)) + s
    s = s[::-1]
    return str(int(s, 2))


while(True):
    print(BinaryReversal(input('\n>')))
