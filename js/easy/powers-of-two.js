/**Using the JavaScript language, have the function PowersofTwo(num) take the num 
parameter being passed which will be an integer and return the string true if 
it's a power of two. If it's not return the string false. For example if the 
input is 16 then your program should return the string true but if the input is 
22 then the output should be the string false.   */

function PowersofTwo(num) {
  let current = 1;
  while (current < num) {
    current = current * 2;
    if (current === num) return true;
  }
  return false;
}
