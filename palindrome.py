def is_palindrome(str):
    new_str = str.replace(' ', '').lower()
    is_palindrome = new_str == new_str[::-1]
    print(str, ':', is_palindrome)
    return is_palindrome

strings = ['string to reverse', 'A but tuba', 'A Santa at Nasa']

is_palindrome(strings[0])
is_palindrome(strings[1])
is_palindrome(strings[2])
