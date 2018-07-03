/*Using the JavaScript language, have the function ArrayAdditionI(arr) take the 
array of numbers stored in arr and return the string true if any combination of 
numbers in the array can be added up to equal the largest number in the array, 
otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 
1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will 
not be empty, will not contain all the same elements, and may contain negative 
numbers.*/

// Naive solution. O(n^n)
function ArrayAdditionI(arr) {
  const sum = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(sum), 1);

  const sets = [[]];
  console.log(arr);
  // create superset
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, len = sets.length; j < len; j++) {
      const temp = sets[j].concat(arr[i]);
      sets.push(temp);
      const s = temp.reduce((p, c) => p + c);
      console.log(sets);
      if (s === sum) {
        return 'true';
      }
    }
  }
  return 'false';
}

ArrayAdditionI([5, 7, 16, 1, 2]);
