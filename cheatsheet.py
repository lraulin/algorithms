import re

s = ''
L = []
d = {}

# reverse a string or array
s = s[::-1]

# remove nonalphanemuric
regex = re.compile('[^a-zA-Z]')
x = regex.sub('', 'ab 3_d *E')
print(x)
