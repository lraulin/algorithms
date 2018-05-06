<<<<<<< HEAD
# Unlike JS, Python throws TypeError if you give a function extra parameters.
=======
>>>>>>> 18deebd8749965720b8b9294ee22c252c78952f6
def destroyer(arr, *args):
    for arg in args:
        arr = [x for x in arr if x != arg]
    print(arr)
    return arr


<<<<<<< HEAD
=======
destroyer([1, 2, 3, 1, 2, 3], 2, 3)
>>>>>>> 18deebd8749965720b8b9294ee22c252c78952f6
destroyer([3, 5, 1, 2, 2], 2, 3, 5)
