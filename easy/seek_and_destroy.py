# Unlike JS, Python throws TypeError if you give a function extra parameters.
def destroyer(arr, *args):
    for arg in args:
        arr = [x for x in arr if x != arg]
    print(arr)
    return arr


destroyer([1, 2, 3, 1, 2, 3], 2, 3)
destroyer([3, 5, 1, 2, 2], 2, 3, 5)
