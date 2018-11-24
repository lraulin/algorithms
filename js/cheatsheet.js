let str = "",
  newStr,
  arr = [],
  num = 0,
  item, x, y, z;

// string to array of characters
str.split("");

// reverse a string
x = str
  .split("")
  .reverse()
  .join("");

console.log(x);


str = 'Hello{}World+])*],Hahaha';
// remove non-alphanumeric
// for alpha only, remove 0-9 from regex
// newStr = str.replace(/[^A-za-z0-9]|_/g, "");
str = str.replace(/\W/g, "");
console.log(str);


// remove non-alphanemuric but leave spaces
str.replace(/[^A-za-z0-9\s]|_/g, "");

// get charater from string at index
x = str.charAt(1);
console.log(x);


// get part of string
"hello".substr(1, 3); // 'ello' -- start, number of characters
"hello".substring(1, 4); // 'ello' -- start, end noninclusive

// remove char at index num (substring would work too)
num = 4;
str = str.slice(0, num) + str.slice(num + 1);
console.log(str);


// iterate a string
// for and use charAt etc, or turn into an array

// insert in string (at index 3)
str = str.slice(0, 3) + "!!!!!" + str.slice(3);
console.log(str);


// remove duplicates from array
arr = [true, true, 3, true, 3, 2, 1, 2, 2, 6, 'a', 'a', 3, 'a']
arr = [...new Set(arr)];
console.log(arr);

// remove item from array
item = 6;
arr.splice(arr.indexOf(item), 1);
console.log(arr);


/* NUMBERS */
// format number with commas
num = 8675309;
x = num.toLocaleString();
console.log(x);

// number to string (default base 10)
num.toString();

// number to binary string
x = num.toString(2);
console.log(x);


// find every possible subset of an array
arr = ['a', 'b', 'c', 'd', 'e']
// const subset = [[]];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0, len = subset.length; j < len; q++) {
//     const temp = sets[j].concat(arr[i]);
//     sets.push(temp);
//   }
// }

// oops, I forget what 'sets' was supposed to be.
// anyway, here's a better way, using reduce:

const getAllSubsets =
  theArray => theArray.reduce(
    (subsets, value) => subsets.concat(
      subsets.map(set => [value, ...set])
    ),
    [[]]
  );

console.log(JSON.stringify(getAllSubsets(arr)));


// calculate size of power set without generating it
function sizeOfPowerSet(arr) {
  return 2 ** arr.length;
}

console.log(sizeOfPowerSet(arr));


// sum array
arr = [1, 2, 5, 4]
Array.prototype.sum = function () {
  return this.reduce((a, c) => a + c);
}
console.log(arr.sum());


// average array
Array.prototype.avg = function () {
  return this.reduce((a, c) => a + c) / arr.length;
}
console.log(arr.avg());


// why the hell are basic mathematical operations not built in?

// sort array numerically (default sorts numbers lexigraphically)
Array.prototype.sortNumbers = function () {
  return this.sort((a, b) => a - b);
}

// extract number array from string representation
arr = '[1, 2, 3]'
const testArr = arr
  .slice(1, arr.length - 1)
  .split(",")
  .map(x => parseInt(x));
console.log(testArr);
