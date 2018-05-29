/**
 * Have the function RunLength(str) take the str parameter being passed 
 * and return a compressed version of the string using the Run-length encoding 
 * algorithm. This algorithm works by taking the occurrence of each repeating 
 * character and outputting that number along with a single character of the 
 * repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The 
 * string will not contain any numbers, punctuation, or symbols. 
 * 
 * Use the Parameter Testing feature in the box below to test your code with 
 * different arguments. 
 * 
 */


def RunLength(string):
string = string.lower()
new_string = ''
repeats = 1
for i in range(len(string)):
    if i < len(string) - 1 and string[i] == string[i+1]:
        repeats += 1
    else:
        new_string += str(repeats) + string[i]
        repeats = 1
return new_string