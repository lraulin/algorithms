# Don't ever use! This is the worst sorting algorithm!
# O(n^2)


def bubble_sort(arr):
    swapped = True
    while swapped:
        swapped = False
        for i in range(len(arr)-1):
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
                swapped = True
        print(arr)
    return arr


arr = [22, 17, 5, 9, 20, 21, 7, 11, 14, 16, 8, 13, 12, 19]
bubble_sort(arr)
