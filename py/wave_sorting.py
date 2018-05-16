'''
Using the Python language, have the function WaveSorting(arr) take the array of
positive integers stored in arr and return the string true if the numbers can
be arranged in a wave pattern: a1 > a2 < a3 > a4 < a5 > ..., otherwise return
the string false. For example, if arr is: [0, 1, 2, 4, 1, 4], then a possible
wave ordering of the numbers is: [2, 0, 4, 1, 4, 1]. So for this input your
program should return the string true. The input array will always contain at
least 2 elements. More examples are given below as sample test cases.

Input:0, 1, 2, 4, 1, 1, 1
Output:"false"

Input:0, 4, 22, 4, 14, 4, 2
Output:"true"
'''
import math


def WaveSorting(arr):
    sortedarr = sorted(arr)
    midpoint = int(math.floor(len(sortedarr)/2))
    arr0 = sortedarr[0:midpoint]
    arr1 = sortedarr[midpoint:]
    wavearr = []
    for i in range(len(arr1)):
        wavearr.append(arr1[i])
        if i < len(arr0):
            wavearr.append(arr0[i])
    for j in range(len(wavearr)-1):
        if j % 2 == 0:
            if not wavearr[j] > wavearr[j+1]:
                return 'false'
        else:
            if not wavearr[j] < wavearr[j+1]:
                return 'false'
    return 'true'


print(WaveSorting([1, 2, 3, 100]))

# Looks like I overcomplicated things!


def qlogin(arr):
    sarr = sorted(arr)
    mid = len(sarr) / 2 - 1
    return ['false', 'true'][sarr[mid] < sarr[mid + 1]]


# How the hell does this work? Any numbers will do as long as they're not the same number?

def ssprogis(arr):
    print(set(arr))
    if len(set(arr)) == 1:
        return 'false'
    else:
        return 'true'


print(ssprogis([0, 1, 2, 4, 1, 1, 1]))
