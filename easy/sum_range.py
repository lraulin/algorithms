def sum_all(arr):
    try:
        total = 0
        for i in range (min(arr), max(arr) + 1):
            total += i
        print(total)
        return total
    except Exception as ex:
        print(ex)

sum_all([4, 1])
