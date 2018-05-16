// One way
function FirstReverse(str) {
  let array = str.split('');
  let revStr = '';
  for (let index = array.length; index > 0; index--) {
    revStr += array[index];
  }
  // code goes here
  return revStr;
}

// Better way
function reverseString(str) {
  var newStr = str.split('').reverse().join('');
  return newStr;
}

// With Decrement Loop
function reverseString(str) {
  // Step 1. Create an empty string that will host the new created string
  var newString = '';

  // Step 2. Create the FOR loop
  /* The starting point of the loop will be (str.length - 1) which corresponds to the 
     last character of the string, "o"
     As long as i is greater than or equals 0, the loop will go on
     We decrement i after each iteration */
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i]; // or newString = newString + str[i];
  }
  /* Here hello's length equals 5
      For each iteration: i = str.length - 1 and newString = newString + str[i]
      First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
      Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
      Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
      Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
      Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
  End of the FOR Loop*/

  // Step 3. Return the reversed string
  return newString; // "olleh"
}

reverseString('hello');

// With Recursion
/* 
function reverseStringRecursively(str) {
  if (
    str === '' // This is the terminal case that will end the recursion
  )
    return '';
  else return reverseString(str.substr(1)) + str.charAt(0);
First Part of the recursion method
You need to remember that you won’t have just one call, you’ll have several nested calls
Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
4th call – reverseString("lo")      will return   reverseString("o")              + "l"
5th call – reverseString("o")       will return   reverseString("")               + "o"
Second part of the recursion method
The method hits the if condition and the most highly nested call returns immediately
5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
}
*/

function reverseString(str) {
  if (str === '') return '';
  else return reverseString(str.substr(1)) + str.charAt(0);
}
reverseStringRecursively('hello');
