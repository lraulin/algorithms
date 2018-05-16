str = 'hello'
new_str = ''
for i in range(len(str), 0, -1):
    new_str += str[i-1]

print(new_str)

# or
print(str[::-1])
