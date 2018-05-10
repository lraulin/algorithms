import re


def palindrome_two(string):
    string = string.lower()
    string = re.sub(r"[\W_]", "", string)
    return string == string[::-1]


print(palindrome_two('Noel - sees Leon'))
