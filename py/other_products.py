"""
Using the Python language, have the function OtherProducts(arr) take the array 
of numbers stored in arr and return a new list of the products of all the other 
numbers in the array for each element. For example: if arr is [1, 2, 3, 4, 5] 
then the new array, where each location in the new array is the product of all 
other elements, is [120, 60, 40, 30, 24]. The following calculations were 
performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), 
(1*2*3*4)]. You should generate this new array and then return the numbers as a 
string joined by a hyphen: 120-60-40-30-24. The array will contain at most 10 
elements and at least 1 element of only positive integers.  
"""
from functools import reduce


def OtherProducts(arr):
    newarr = []
    for i in range(len(arr)):
        subarr = []
        for j in range(len(arr)):
            if j != i:
                subarr.append(arr[j])
        product = reduce((lambda x, y: x*y), subarr)
        newarr.append(product)
    return '-'.join(map(str, newarr))


print(OtherProducts((1, 1, 1)))

# Can't figure out how to use list comprehension to exclude item by index
# when list contains duplicates

# Here's a more clever way to do it from Coderbyte user Qlogin:

from operator import mul


def OtherProducts2(arr):
    prod = reduce(mul, arr, 1)
    prod_arr = map(lambda x: str(prod / x), arr)
    return '-'.join(prod_arr)
