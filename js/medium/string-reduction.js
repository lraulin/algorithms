/**
 * Challenge
 * Using the JavaScript language, have the function StringReduction(str) take
 * the str parameter being passed and return the smallest number you can get
 * through the following reduction method. The method is: Only the letters a,
 * b, and c will be given in str and you must take two different adjacent
 * characters and replace it with the third. For example "ac" can be replaced
 * with "b" but "aa" cannot be replaced with anything. This method is done
 * repeatedly until the string cannot be further reduced, and the length of the
 * resulting string is to be outputted. For example: if str is "cab", "ca" can
 * be reduced to "b" and you get "bb" (you can also reduce it to "cc"). The
 * reduction is done so the output should be 2. If str is "bcab", "bc" reduces
 * to "a", so you have "aab", then "ab" reduces to "c", and the final string
 * "ac" is reduced to "b" so the output should be 1.
 * Sample Test Cases
 * Input:"abcabc"
 *
 * Output:2
 *
 *
 * Input:"cccc"
 *
 * Output:4
 */

function stringReduction(str) {
  let flag = true;
  while (flag) {
    flag = false;
    // if it's still false after the for loop, that means we've gone through
    // the whole string and found no possible substitutions, so we're done
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] !== str[i + 1]) {
        let newLetter = "abc";
        // remove letters in the current pair, leaving only the one remaining
        // letter
        newLetter = newLetter.replace(str[i], "");
        newLetter = newLetter.replace(str[i + 1], "");
        str = str.slice(0, i) + newLetter + str.slice(i + 2);
        flag = true;
        // we shortened the string by 1, so decrement to cancel the next
        // increment, so next loop will compare new letter with next letter
        i--;
      }
    }
  }
  console.log(str);
  return str.length;
}

// const test = "abcabc"; // 2
// const test = "bcab"; // 1
const test = "cccc"; // 4
console.log(stringReduction(test));
