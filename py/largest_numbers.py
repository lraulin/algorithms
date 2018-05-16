def largestList(list):
    max_list = []
    for sublist in list:
        max = 0
        for item in sublist:
            if item > max:
                max = item
        max_list.append(max)
    return max_list

# Using inbuilt function


def largestList2(list):
    max_list = []
    for sublist in list:
        max_list.append(max(sublist))
    print(max_list)
    return max_list

# Using list comprehension


def largestList3(list):
    return [max(sublist) for sublist in list]


alist = [
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]

print(largestList3(alist))
