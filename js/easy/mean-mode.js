/**Using the JavaScript language, have the function MeanMode(arr) take the array 
of numbers stored in arr and return 1 if the mode equals the mean, 0 if they 
don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode 
(3) equals the mean (3)). The array will not be empty, will only contain 
positive integers, and will not contain more than one mode.   */

function mean(arr) {
  return (
    arr.reduce((accumulator, currentValue) => accumulator + currentValue) /
    arr.length
  );
}

function mode(arr) {
  // returns the most frequent number, assuming there is only one
  const map = new Map();
  arr.forEach(element => {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  });
  return [...map.keys()][
    [...map.values()].reduce((iMax, x, i, arr) => (x > arr[iMax] ? i : iMax), 0)
  ];
}

function MeanMode(arr) {
  return Number(mean(arr) == mode(arr));
}

const tests = [
  [1, 2, 3],
  [4, 4, 4, 6, 2],
  [10, 10, 10, 19, 1],
  [10, 10, 10, 10, 10, 10, 10, 20, 9, 1]
];

console.log(mean(tests[2]));
console.log(mode(tests[2]));

// for (test of tests) {
//   console.log(MeanMode(test));
// }

// Coderbyte solution
function MeanMode2(arr) {
  // we use the reduce function which will sum
  // up all the numbers in the array
  var summed = arr.reduce(function(previousVal, currentVal, index, self) {
    return previousVal + currentVal;
  });

  // calculate the mean by dividing the sum by the
  // number of elements in arr
  var mean = summed / arr.length;

  // the table that will contain each number as the key
  // and the number of times it occurs as the value
  // e.g. {"5": 1, "3": 3, "1": 1}
  var table = {};

  // loop through each number in the array
  // see if this number already exists in table
  // if so add 1 to the count, if not set count = 1
  for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    table[number] === undefined ? (table[number] = 1) : (table[number] += 1);
  }

  // setup a new object that will store the number with the highest count
  var answer = { number: null, count: 0 };

  // get the mode by determining what number appears most often in the table
  for (var n in table) {
    if (table[n] > answer['count']) {
      answer['count'] = table[n];
      answer['number'] = n;
    }
  }

  // return 1 or 0 if the mode equals the mean
  return answer['number'] == mean ? 1 : 0;
}
