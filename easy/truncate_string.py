def truncate(str, num):
    if num < len(str):
        if num <= 3:
            return str[:num] + '...'
        else:
            return str[:num-3] + '...'
    else:
        return str


print(truncate("A-tisket a-tasket A green and yellow basket", 11))
print(truncate("Peter Piper picked a peck of pickled peppers", 14))
print(truncate("A-tisket a-tasket A green and yellow basket",
               len("A-tisket a-tasket A green and yellow basket")))
print(truncate("A-", 1))
print(truncate("Absolutely Longer", 2))
