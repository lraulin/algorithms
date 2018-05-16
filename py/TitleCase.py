# Easy way
str = 'hello i love you won\'t you tell me your name'
print(str.title())


# "Hard" way (using list comprehension syntax)
def title_case(str):
    words = str.split()
    return ' '.join([word[0].upper() + word[1:] for word in words]) 
    
print(title_case('lucy in the sky with diamonds'))
