/**
 * Challenge
 * Using the JavaScript language, have the function GroupTotals(strArr) read in
 * the strArr parameter containing key:value pairs where the key is a string
 * and the value is an integer. Your program should return a string with new
 * key:value pairs separated by a comma such that each key appears only once
 * with the total values summed up.
 * For example: if strArr is ["B:-1", "A:1", "B:3", "A:5"] then your program
 * should return the string A:6,B:2.
 *
 * Your final output string should return the keys in alphabetical order.
 * Exclude keys that have a value of 0 after being summed up.
 * Sample Test Cases
 * Input:"X:-1", "Y:1", "X:-4", "B:3", "X:5"
 *
 * Output:"B:3,Y:1"
 *
 *
 * Input:"Z:0", "A:-1"
 *
 * Output:"A:-1"
 */

function GroupTotals(strArr) {
  const pairs = {};
  strArr.forEach(el => {
    const temp = el.split(":");
    const key = temp[0];
    const value = temp[1];
    if (pairs.hasOwnProperty(key)) {
      pairs[key] += Number(value);
    } else {
      pairs[key] = Number(value);
    }
  });
  const keys = Object.keys(pairs).sort();
  // according to Stack Exchange, reduce is the best way to map and filter
  // at the same time
  const answArr = keys.reduce((filtered, x) => {
    if (pairs[x] !== 0) {
      filtered.push("" + x + ":" + pairs[x]);
    }
    return filtered;
  }, []);
  return answArr.join(",");
}

// const test = ["X:-1", "Y:1", "X:-4", "B:3", "X:5"];
const test = ["Z:0", "A:-1"];
console.log(GroupTotals(test));
