/**
 * Challenge 
 * Using the JavaScript language, have the function ConnectFourWinner(strArr) 
 * read the strArr parameter being passed which will represent a 6x7 Connect 
 * Four board. The rules of the game are: two players alternate turns and place 
 * a colored disc down into the grid from the top and the disc falls down the 
 * column until it hits the bottom or until it hits a piece beneath it. The 
 * object of the game is to connect four of one's own discs of the same color 
 * next to each other vertically, horizontally, or diagonally before your 
 * opponent. The input strArr will represent a Connect Four board and it will 
 * be structured in the following format: 
 * ["R/Y","(R,Y,x,x,x,x,x)","(...)","(...)",...)] where R represents the player 
 * using red discs, Y represents the player using yellow discs and x represents 
 * an empty space on the board. The first element of strArr will be either R or 
 * Y and it represents whose turn it is. Your program should determine, based 
 * on whose turn it is, whether a space exists that can give that player a win. 
 * If a space does exist your program should return the space in the following 
 * format: (RxC) where R=row and C=column. If no space exists, return the 
 * string none. The board will always be in a legal setup. 
 * 
 * For example, if strArr is: 
 * ["R","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,x,R,x,x,x)","(x,x,x,R,x,x,x)","(x,x,x,R,Y,Y,Y)"] 
 * then your program should return (3x4). 
 * 
 * Another example, if strArr is: 
 * ["Y","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,Y,Y,x,x,x)","(x,R,R,Y,Y,x,R)","(x,Y,R,R,R,Y,R)"] 
 * then your program should return (3x3). 
 * 
 * Hard challenges are worth 15 points and you are not timed for them. 
 */

