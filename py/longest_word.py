import re


def longestWord(str):
    arr = re.split('[^a-zA-Z]', str)    # split on nonalphanumeric
    longest = ''
    for word in arr:
        if len(word) > len(longest):
            longest = word
        return word


string = "Hello, I love you, won't you tell me your name?"
answer = longestWord(string)
print(answer)
