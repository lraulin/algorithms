"""
Using the Python language, have the function RectangleArea(strArr) take the 
array of strings stored in strArr, which will only contain 4 elements and be in 
the form (x y) where x and y are both integers, and return the area of the 
rectangle formed by the 4 points on a Cartesian grid. The 4 elements will be in 
arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] 
then your program should return 6 because the width of the rectangle is 3 and 
the height is 2 and the area of a rectangle is equal to the width * height.  
"""
import re


def RectangleArea(strArr):
    rectangle = []
    for s in strArr:
        replaced = re.sub("[()]", "", s)
        replaced = replaced.split(" ")
        replaced[0] = int(replaced[0])
        replaced[1] = int(replaced[1])
        rectangle.append(replaced)
    width = max(x for (x, y) in rectangle) - min(x for (x, y) in rectangle)
    height = max(y for (x, y) in rectangle) - min(y for (x, y) in rectangle)
    return width * height


input = "(1 1)", "(1 3)", "(3 1)", "(3 3)"
print(RectangleArea(input))
