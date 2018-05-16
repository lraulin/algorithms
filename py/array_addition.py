""" 
Dynamic programming solution that handles negative numbers.
From Coderbyte user Corinto
https://coderbyte.com/algorithm/subset-sum-problem?stay=true
"""


def ArrayAddition(arr):
    sum_positive = sum([x for x in arr if x > 0])
    sum_negative = sum([x for x in arr if x < 0])

    num_columns = -sum_negative + 1 + sum_positive

    # get largest number and remove it from array
    goal = max(arr)
    arr.remove(goal)

    # table to track elements
    table = [[False]*num_columns for r in range(0, len(arr)+1)]

    table[0][-sum_negative] = True

    # dynamic programming solution
    for i in range(1, len(arr)+1):
        for j in range(num_columns):
            table[i][j] = table[i-1][j]
            if table[i][j] == False and 0 <= j-arr[i-1] and j-arr[i-1] < num_columns:
                table[i][j] = table[i][j] or table[i-1][j-arr[i-1]]

    if table[len(arr)][-sum_negative+goal]:
        return "true"
    else:
        return "false"


print(ArrayAddition([-1, 1, 2, 3]))
