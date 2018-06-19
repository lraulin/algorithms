# Challenge
# Using the JavaScript language, have the function CamelCase(str) take the str
# parameter being passed and return it in proper camel case format where the
# first letter of each word is capitalized (excluding the first letter). The
# string will only contain letters and some combination of delimiter
# punctuation characters separating each word.

# For example: if str is "BOB loves-coding" then your program should return
# the string bobLovesCoding.
# Sample Test Cases
# Input:"cats AND*Dogs-are Awesome"

# Output:"catsAndDogsAreAwesome"


# Input:"a b c d-e-f%g"

# Output:"aBCDEFG"

# Hint
# You can try converting the delimiters into empty spaces using a regex. Then
# you can capitalize the letters in each word.

import re


def camel_case(s):
    s = s.lower()
    s = re.sub(r'[\W]', ' ',  s)
    s = s.split(' ')
    res = ''
    for word in s:
        res += word.title()
    return res


test = "cats AND*Dogs-are Awesome"
print(camel_case(test))
