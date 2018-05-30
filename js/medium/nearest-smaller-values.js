/**
 * Challenge 
 * Using the JavaScript language, have the function NearestSmallValues(arr) 
 * take the array of integers stored in arr, and for each element in the list, 
 * search all the previous values for the nearest element that is smaller than 
 * the current element and create a new list from these numbers. If there is no 
 * element before a certain position that is smaller, input a -1. For example: 
 * if arr is [5, 2, 8, 3, 9, 12] then the nearest smaller values list is [-1, 
 * -1, 2, 2, 3, 9]. The logic is as follows: 
 * 
 * For 5, there is no smaller previous value so the list so far is [-1]. For 2, 
 * there is also no smaller previous value, so the list is now [-1, -1]. For 8, 
 * the nearest smaller value is 2 so the list is now [-1, -1, 2]. For 3, the 
 * nearest smaller value is also 2, so the list is now [-1, -1, 2, 2]. This 
 * goes on to produce the answer above. Your program should take this final 
 * list and return the elements as a string separated by a space: -1 -1 2 2 3 9 
 * Sample Test Cases 
 * Input:5, 3, 1, 9, 7, 3, 4, 1 
 * 
 * Output:"-1 -1 -1 1 1 1 3 1" 
 * 
 * 
 * Input:2, 4, 5, 1, 7 
 * 
 * Output:"-1 2 4 -1 1" 
 */

