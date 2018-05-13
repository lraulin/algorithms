/**Using the JavaScript language, have the function StringScramble(str1,str2) take 
both parameters being passed and return the string true if a portion of str1 
characters can be rearranged to match str2, otherwise return the string false. 
For example: if str1 is "rkqodlw" and str2 is "world" the output should return 
true. Punctuation and symbols will not be entered with the parameters.  */

function StringScramble(str1, str2) {
  str1 = str1.split("");
  str2 = str2.split("");
  for (let i = 0; i < str2.length; i++) {
    const j = str1.indexOf(str2[i]);
    if (j == -1) {
      return false;
    } else {
      str1[j] = null;
    }
  }
  return true;
}

console.log(StringScramble("win33er", "thisisfalse"));
