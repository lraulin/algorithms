// Using the JavaScript language, have the function ArrayMatching(strArr) read the array of strings stored in strArr which will contain only two elements, both of which will represent an array of positive integers. For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements in the input represent two integer arrays, and your goal for this challenge is to add the elements in corresponding locations from both arrays. For the example input, your program should do the following additions: [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. Your program should finally return this resulting array in a string format with each element separated by a hyphen: 6-4-13-17.

//If the two arrays do not have the same amount of elements, then simply append the remaining elements onto the new array (example shown below). Both arrays will be in the format: [e1, e2, e3, ...] where at least one element will exist in each array.

const testCase1 = ["[5, 2, 3]", "[2, 2, 3, 10, 6]"];
const testCase2 = ["[1, 2, 1]", "[2, 1, 5, 2]"];

function ArrayMatching(strArr) {
  const newArr = [];
  strArr = strArr.map(x =>
    x
      .slice(1, x.length - 1)
      .split(" ")
      .map(x => parseInt(x)),
  );
  const length = Math.max(strArr[0].length, strArr[1].length);
  for (let i = 0; i < length; i++) {
    if (i < strArr[0].length && i < strArr[1].length) {
      newArr.push(strArr[0][i] + strArr[1][i]);
    } else {
      newArr.push(i < strArr[0].length ? strArr[0][i] : strArr[1][i]);
    }
  }
  return newArr.join("-");
}

console.log(ArrayMatching(testCase1));
console.log(ArrayMatching(testCase2));
