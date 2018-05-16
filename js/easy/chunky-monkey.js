// Write a function that splits an array (first argument) into groups the
// length of size (second argument) and returns them as a two-dimensional
// array.

function chunkArrayInGroups(arr, size) {
  const twoDArray = [];
  let start = 0;
  let stop = size;
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    twoDArray.push(arr.slice(start, stop));
    start += size;
    stop += size;
  }
  console.log(twoDArray);
  return twoDArray;
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);

// Same solution, less verbose
function chunkArrayInGroups(arr, size) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i+=size) {
	arr2.push(arr.slice(i , i+size));
  }
  return arr2;
}

// Another approach
function chunkArrayInGroups2(arr, size) {

  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1)
      temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }
  if (temp.length !== 0)
    result.push(temp);
  return result;
}

// Another
function chunkArrayInGroups3(arr, size) {
  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Another
function chunkArrayInGroups4(arr, size) {
  // Break it up.
  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);