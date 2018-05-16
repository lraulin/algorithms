# https://codereview.stackexchange.com/questions/143315/optimise-sieve-of-eratosthenes?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

def eratosthenes(n):
    array = [True] * n

    result = []

    result.append(2)
    for i in range(4, n, 2):
        array[i] = False;

    for i in range(3, int(math.sqrt(n) + 1), 2):
        if array[i]:
            for j in range (i*i, n, i * 2):
                array[j] = False;

    for i in range(3, n, 2):
        if array[i]:
            result.append(i)
    return result

