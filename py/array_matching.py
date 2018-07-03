# Using the Python language, have the function
# ArrayMatching(strArr) read the array of strings stored in strArr which will
# contain only two elements, both of which will represent an array of positive
# integers. For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then
# both elements in the input represent two integer arrays, and your goal for
# this challenge is to add the elements in corresponding locations from both
# arrays. For the example input, your program should do the following
# additions: [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4,
# 13, 17]. Your program should finally return this resulting array in a string
# format with each element separated by a hyphen: 6-4-13-17.

# If the two arrays do not have the same amount of elements, then simply
# append the remaining elements onto the new array (example shown below). Both
# arrays will be in the format: [e1, e2, e3, ...] where at least one element
# will exist in each array.


def array_matching(strArr):
    arr1 = [int(i) for i in strArr[0][1:-1].split(', ')]
    arr2 = [int(i) for i in strArr[1][1:-1].split(', ')]
    length = max(len(arr1), len(arr2))
    newArr = []
    for i in range(length):
        num = 0
        try:
            num += arr1[i]
        except IndexError:
            pass
        try:
            num += arr2[i]
        except IndexError:
            pass
        newArr.append(num)
    newArr = [str(i) for i in newArr]
    return '-'.join(newArr)


test = ["[1, 2, 5, 6]", "[5, 2, 8, 11, 12, 69]"]
print(array_matching(test))
