/**
 * Challenge
 * Using the JavaScript language, have the function SnakeCase(str) take the str
 * parameter being passed and return it in proper snake case format where each
 * word is lowercased and separated from adjacent words via an underscore. The
 * string will only contain letters and some combination of delimiter
 * punctuation characters separating each word.
 *
 * For example: if str is "BOB loves-coding" then your program should return
 * the string bob_loves_coding.
 * Sample Test Cases
 * Input:"cats AND*Dogs-are Awesome"
 *
 * Output:"cats_and_dogs_are_awesome"
 *
 *
 * Input:"a b c d-e-f%g"
 *
 * Output:"a_b_c_d_e_f_g"
 *
 * Hint
 * You can try converting the delimiters into empty spaces using a regex. Then
 * you can insert an underscore in between each adjacent pair of words.
 */

function SnakeCase(str) {
  str = str
    .toLowerCase()
    .replace(/[\W]/g, " ")
    .split(" ")
    .join("_");
  return str;
}
