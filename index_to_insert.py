def get_index_to_ins(arr, num):
    arr.append(num)
    arr.sort()
    return arr.index(num)


print(get_index_to_ins([10, 20, 30, 40, 50], 35))  # 3
print(get_index_to_ins([10, 20, 30, 40, 50], 30))  # 2
print(get_index_to_ins([40, 60], 50))  # 1
print(get_index_to_ins([3, 10, 5], 3))  # 0
print(get_index_to_ins([5, 3, 20, 3], 5))  # 2
print(get_index_to_ins([2, 20, 10], 19))  # 2
print(get_index_to_ins([2, 5, 10], 15))  # 3
