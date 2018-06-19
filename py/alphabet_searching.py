# Check if string contains every letter in the alphabet.


def alphabet_searching(str):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for letter in alphabet:
        if letter not in str:
            return False
    return True


# test = "abcdefghijklmnopqrstuvwxyyyy"
test = "zacxyjbbkfgtbhdaielqrm45pnsowtuv"
print(alphabet_searching(test))
