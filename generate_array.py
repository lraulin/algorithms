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


def shuffled_random_sequence(min, max):
    """Generate array of ints with missing ints but no duplicates."""
    arr = [i for i in range(min, max) if randrange(1, 3) == 1]
    shuffle(arr)
    file = open("arr.txt", "w")
    file.write(str(arr))
    file.close()



# shuffled_sequence(1, 400000)
shuffled_random_sequence(-250000, 250000)
