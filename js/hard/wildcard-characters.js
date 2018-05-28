/**
 * Challenge 
 * Using the JavaScript language, have the function WildcardCharacters(str) 
 * read str which will contain two strings separated by a space. The first 
 * string will consist of the following sets of characters: +, *, and {N} which 
 * is optional. The plus (+) character represents a single alphabetic 
 * character, the asterisk (*) represents a sequence of the same character of 
 * length 3 unless it is followed by {N} which represents how many characters 
 * should appear in the sequence where N will be at least 1. Your goal is to 
 * determine if the second string exactly matches the pattern of the first 
 * string in the input. 
 * 
 * For example: if str is "++*{5} gheeeee" then the second string in this case 
 * does match the pattern, so your program should return the string true. If 
 * the second string does not match the pattern your program should return the 
 * string false. 
 * 
 * Hard challenges are worth 15 points and you are not timed for them. 
 * Sample Test Cases 
 * Input:"+++++* abcdemmmmmm" 
 * 
 * Output:"false" 
 * 
 * 
 * Input:"**+*{2} mmmrrrkbb" 
 * 
 * Output:"true" 
 */

