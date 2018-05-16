function duplicates(arr) {
  const hashTable = [];
  const dups = [];
  for (let i = 0; i < arr.length; i++) {
    if (hashTable[arr[i].toString()] === undefined) {
      hashTable[arr[i].toString()] = true;
    } else {
      dups.push(arr[i]);
    }
  }
  console.log(hashTable);
  return dups;
}

console.log(duplicates([1, 21, -4, 103, 21, 4, 1]));

function multiply(x) {
  return function(y) {
    return x * y;
  };
}

console.log(multiply(5)(6));
