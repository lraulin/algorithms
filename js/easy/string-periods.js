/**
 * Challenge
 * Using the JavaScript language, have the function StringPeriods(str) take the
 * str parameter being passed and determine if there is some substring K that
 * can be repeated N > 1 times to produce the input string exactly as it
 * appears. Your program should return the longest substring K, and if there is
 * none it should return the string -1.
 *
 * For example: if str is "abcababcababcab" then your program should return
 * abcab because that is the longest substring that is repeated 3 times to
 * create the final string. Another example: if str is "abababababab" then your
 * program should return ababab because it is the longest substring. If the
 * input string contains only a single character, your program should return
 * the string -1.
 * Sample Test Cases
 * Input:"abcxabc"
 *
 * Output:"-1"
 *
 *
 * Input:"affedaaffed"
 *
 * Output:"-1"
 */

function StringPeriods(str) {
  const half = Math.floor(str.length / 2);
  for (let i = half; i > 0; i--) {
    const part = str.slice(0, i);
    let newstr = "";
    while (newstr.length < str.length) {
      newstr += part;
    }
    if (newstr == str) {
      return part;
    }
  }
  return -1;
}

// test = "abababababab";  // 'ababab'
// test = "abcababcababcab";
// test = "gg";
test = "abcabcabc";
console.log(StringPeriods(test));
