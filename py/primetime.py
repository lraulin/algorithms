def primetime(num):
    if num != int(num):
        raise ValueError('Input must be a whole number')
    if num < 2:
        return False
    if num != 2 and num % 2 == 0:
        return False
    for i in range(3, num, 2):
        if num % i == 0:
            return False
    return True


for i in range(300, 400):
    if primetime(i):
        print(i)
