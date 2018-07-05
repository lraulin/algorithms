/**
 * Using the JavaScript language, have the function ArithGeoII(arr) take
 * the array of numbers stored in arr and return the string "Arithmetic" if the
 * sequence follows an arithmetic pattern or return "Geometric" if it follows a
 * geometric pattern. If the sequence doesn't follow either pattern return -1.
 * An arithmetic sequence is one where the difference between each of the
 * numbers is consistent, where as in a geometric sequence, each term after the
 * first is multiplied by some constant or common ratio. Arithmetic example:
 * [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be
 * entered as parameters, 0 will not be entered, and no array will contain all
 * the same elements.
 */

function ArithGeoII(arr) {
  // set flags
  let arithmetic = true;
  let geometric = true;
  // find relationship between 1st and 2nd values
  let difference = arr[1] - arr[0];
  let ratio = arr[1] / arr[0];
  // compare each subsequent pair of values and see if either pattern holds
  // for every pair
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== difference) {
      arithmetic = false;
    }
    if (arr[i + 1] / arr[i] !== ratio) {
      geometric = false;
    }
  }

  if (arithmetic) {
    return "Arithmetic";
  } else if (geometric) {
    return "Geometric";
  } else {
    return -1;
  }
}

// const test = [-2, -4, -6, -8];
// const test = [2, 6, 18, 54];
const test = [2, 6, 3, 1, 9, 7, 100, 50];
console.log(ArithGeoII(test));
