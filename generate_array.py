from random import randrange, shuffle


def random_sequence(min, max, length):
    arr = [randrange(min, max) for i in range(length)]
    print(arr)
    file = open("arr.txt", "w")
    file.write(str(arr))
    file.close()


def shuffled_sequence(min, max):
    arr = shuffle([i for i in range(min, max)])
    file = open("arr.txt", "w")
    file.write(str(arr))
    file.close()


# shuffled_sequence(1, 400000)
random_sequence(-1000000, 1000000, 1000000)
