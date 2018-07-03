/**
 * Challenge 
 * Using the JavaScript language, have the function MatrixPath(strArr) take the 
 * strArr parameter being passed which will be a 2D matrix of 0 and 1's of some 
 * arbitrary size, and determine if a path of 1's exists from the top-left of 
 * the matrix to the bottom-right of the matrix while moving only in the 
 * directions: up, down, left, and right. If a path exists your program should 
 * return the string true, otherwise your program should return the number of 
 * locations in the matrix where if a single 0 is replaced with a 1, a path of 
 * 1's will be created successfully. If a path does not exist and you cannot 
 * create a path by changing a single location in the matrix from a 0 to a 1, 
 * then your program should return the string not possible. For example: if 
 * strArr is ["11100", "10011", "10101", "10011"] then this looks like the 
 * following matrix: 
 * 
 * 1 1 1 0 0 
 * 1 0 0 1 1 
 * 1 0 1 0 1 
 * 1 0 0 1 1 
 * 
 * For the input above, a path of 1's from the top-left to the bottom-right 
 * does not exist. But, we can change a 0 to a 1 in 2 places in the matrix, 
 * namely at locations: [0,3] or [1,2]. So for this input your program should 
 * return 2. The top-left and bottom-right of the input matrix will always be 
 * 1's. 
 * Sample Test Cases 
 * Input:"10000", "11011", "10101", "11001" 
 * 
 * Output:1 
 * 
 * 
 * Input:"1000001", "1001111", "1010101" 
 * 
 * Output:"not possible" 
 */

