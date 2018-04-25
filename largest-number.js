// Return array of largest number in each array in an array of arrays

function largestNumber(arr) {
  maxArr = [];
  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] > max) max = arr[i][j];
    }
    maxArr.push(max);
  }
  return maxArr;
}

console.log(
  largestNumber([
    [ 4, 5, 1, 3 ],
    [ 13, 27, 18, 26 ],
    [ 32, 35, 37, 39 ],
    [ 1000, 1001, 857, 1 ]
  ])
);
console.log(
  JSON.stringify(
    largestNumber([
      [ 13, 27, 18, 26 ],
      [ 4, 5, 1, 3 ],
      [ 32, 35, 37, 39 ],
      [ 1000, 1001, 857, 1 ]
    ])
  ) == JSON.stringify([ 27, 5, 39, 1001 ])
);
console.log(
  JSON.stringify(
    largestNumber([
      [ 4, 9, 1, 3 ],
      [ 13, 35, 18, 26 ],
      [ 32, 35, 97, 39 ],
      [ 1000000, 1001, 857, 1 ]
    ])
  ) == JSON.stringify([ 9, 35, 97, 1000000 ])
);

// Declarative appreach
function largestOfFour(arr) {
  return arr.map((group) =>
    group.reduce((prev, current) => (current > prev ? current : prev))
  );
}

// Declarative
function largestOfFour2(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
