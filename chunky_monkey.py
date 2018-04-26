def chunky_monkey(arr, size):
    output = []
    for i in range(0, len(arr), size):
        output.append(arr[i:i+size])
    print(output)
    return output

chunky_monkey(["a", "b", "c", "d"], 2)
