let str = "",
  arr = [],
  num = 0,
  item;

// string to array of characters
str.split("");

// reverse a string
str
  .split("")
  .reverse()
  .join("");

// remove non-alphanumeric
// for alpha only, remove 0-9 from regex
str.replace(/[^A-za-z0-9]|_/g, "");

// remove non-alphanemuric but leave spaces
str.replace(/[^A-za-z0-9\s]|_/g, "");

// get charater from string at index
str.charAt[1];

// get part of string
"hello".substr(1, 3); // 'ello' -- start, number of characters
"hello".substring(1, 4); // 'ello' -- start, end noninclusive

// iterate a string
// for and use charAt etc, or turn into an array

// insert in string (at index 3)
str.slice(0, 3) + "bar" + str.slice(3);

// remove duplicates from array
[...new Set(arr)];

// remove item from array
arr.splice(arr.indexOf(item), 1);

/* NUMBERS */
// format number with commas
num.toLocaleString();

// number to string
num.toString();
// base optional
num.toString(10);

// find every possible subset of an array
const subset = [[]];
for (let i=0; i<arr.length; i++) {
  for (let j=0, len=subset.length; j<len; q++) {
    const temp = sets[j].concot(arr[i]);
    sets.push(temp);
  }
}
