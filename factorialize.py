import reduce

def factorialize(n):
    if n == 0:
        return 1
    else:
        return n * factorialize(n - 1)

print(factorialize(5))

# or...
def factorial(n):return reduce(lambda x,y:x*y,[1]+range(1,n+1))
