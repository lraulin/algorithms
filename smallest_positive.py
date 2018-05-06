# Find smallest missing positive integer in unsorted arrayay
# in O(n) time and O(1) space.


def segregate(array):
    # Move all ints >= 0 to beginning of list and return # of nonpositive ints.
    count = 0
    for i in range(len(array)):
        if array[i] <= 0:
            array[i], array[count] = array[count], array[i]

    return count


def find_missing_positive(array):
    # Find smallest positive in array of non-negative ints
    print(sorted(array))
    for i in range(len(array)):
        current_index = abs(array[i])-1
        print("for ", i, "current: ", current_index,
              " which is ", array[current_index])
        if current_index < len(array) and array[current_index] > 0:
            array[current_index] = -array[current_index]
        print(array)

    print(array)

    for i in range(len(array)):
        if array[i] > 0:
            return i+1
    return len(array)+1


def find_missing(array):
    # First separate pos and neg ints
    shift = segregate(array)
    array2 = []
    for i in range(shift, len(array)):
        array2.append(array[i])
    return find_missing_positive(array2)


array = [-1000, 0, -35, 0, 4, 4, -5,  2, 2, 2, -1000000, 1]
missing = find_missing(array)
print(missing)
