/**
 * Using the JavaScript language, have the function
 * BasicRomanNumerals(str) read str which will be a string of Roman numerals.
 * The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for
 * 100, D for 500 and M for 1000. In Roman numerals, to create a number like 11
 * you simply add a 1 after the 10, so you get XI. But to create a number like
 * 19, you use the subtraction notation which is to add an I before an X or V
 * (or add an X before an L or C). So 19 in Roman numerals is XIX.
 *
 * The goal of your program is to return the decimal equivalent of the
 * Roman numeral given. For example: if str is "XXIV" your program should
 * return 24
 *
 * Hint Try and implement the basic Roman notations such as IV = 4 and
 * VI = 6. Once you have that done you should be able to easily break up a
 * Roman numeral and convert it into a decimal number.
 */

function BasicRomanNumerals(str) {
  key = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  num = 0;
  for (let i = 0; i < str.length; i++) {
    // num < undefined returns false, so no need to check if index is in range
    if (key[str[i]] < key[str[i + 1]]) {
      num -= key[str[i]];
    } else {
      num += key[str[i]];
    }
  }
  return num;
}

const test = "DMVII";
console.log(BasicRomanNumerals(test));
