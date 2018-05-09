def abc_check(str):
    str = str.lower()
    for i in range(len(str)):
        if str[i] == 'a':
            try:
                if str[i-4] == 'b':
                    return True
            except IndexError:
                pass
            try:
                if str[i+4] == 'b':
                    return True
            except IndexError:
                pass
    return False


print(ABCheck(''))
print(ABCheck('laura sobs'))


def ABCheck(str):
    """CoderByte solution."""

    # convert the whole string to lowercase letters
    str = str.lower()

    # loop through the string
    for i in range(0, len(str)):

        # check for "a...b" but we can't go out of bounds on the
        # list or an error will be thrown
        if (str[i] == 'a' and i+4 < len(str) and str[i+4] == 'b'):
            return 'true'

        # check for "b...a"
        if (str[i] == 'b' and i+4 < len(str) and str[i+4] == 'a'):
            return 'true'

    # if none of above were encountered
    # then return false by default
    return 'false'


print ABCheck("Laura sobs")
