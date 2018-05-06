# use ord() and chr() to convert


def caesar(str, shift=13):
    new_word = ''
    str = str.upper()
    for char in str:
        if char.isalpha():
            char = ord(char) + shift
            if char > 90:
                char -= 26
            char = chr(char)
        new_word += char
    print(new_word)
    return new_word


caesar("SERR PBQR PNZC")
