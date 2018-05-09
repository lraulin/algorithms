

def duplicates(arr):
    hashTable = {}
    dups = []
    for i in arr:
        if i not in hashTable:
            hashTable[i] = True
        else:
            dups.append(i)
    print(hashTable)
    return dups


print(duplicates([1, 21, -4, 103, 21, 4, 1]))
