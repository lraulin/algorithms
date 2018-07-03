/**
 * Challenge
 * Using the JavaScript language, have the function SerialNumber(str) take the
 * str parameter being passed and determine if it is a valid serial number with
 * the following constraints:
 *
 * 1. It needs to contain three sets each with three digits (1 through 9)
 * separated by a period.
 * 2. The first set of digits must add up to an even number.
 * 3. The second set of digits must add up to an odd number.
 * 4. The last digit in each set must be larger than the two previous digits in
 * the same set.
 *
 * If all the above constraints are met within the string, the your program
 * should return the string true, otherwise your program should return the
 * string false. For example: if str is "224.315.218" then your program should
 * return "true".
 * Sample Test Cases
 * Input:"11.124.667"
 *
 * Output:"false"
 *
 *
 * Input:"114.568.112"
 *
 * Output:"true"
 */

function SerialNumber(str) {
  const re = /\d{3}.\d{3}.\d{3}/;
  if (!re.test(str)) {
    return "false";
  }
  const groups = str.split(".");
  if (
    (Number(groups[0][0]) + Number(groups[0][1]) + Number(groups[0][2])) % 2 !==
    0
  ) {
    return "false";
  }
  if (
    (Number(groups[1][0]) + Number(groups[1][1]) + Number(groups[1][2])) % 2 ===
    0
  ) {
    return "false";
  }
  for (let i = 0; i < groups.length; i++) {
    if (
      Number(groups[i][0]) >= Number(groups[i][2]) ||
      Number(groups[i][1]) >= Number(groups[i][2])
    ) {
      return "false";
    }
  }
  return "true";
}

test = "311.124.667";
console.log(SerialNumber(test));
