def vowel_count(str):
    str = str.lower()
    vowels = 'aeiou'
    count = 0
    for char in str:
        if char in vowels:
            count += 1
    print(count)
    return count


vowel_count('cows eat gras')


def VowelCount(str):
    """Coderbyte solution."""
    # convert the string to all lowercase characters
    str = str.lower()

    # possible vowels
    vowels = "aeiou"

    # where we store our vowel count
    count = 0

    # loop through the string checking each character
    for i in range(0, len(str)):

        # if this character is found in vowels string
        # then the character is a vowel and we add 1 to count
        if str[i] in vowels:
            count = count + 1

    # return the number of vowels found
    return count


print(VowelCount("All cows eat grass"))
