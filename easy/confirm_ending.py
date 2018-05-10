def confirm_ending(str, target):
    return str[-len(target):] == target


print(confirm_ending('Bastian', 'n'))
print(confirm_ending('Open sesame', 'same'))
