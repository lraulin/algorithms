/**Using the JavaScript language, have the function ArrayAdditionI(arr) take the 
array of numbers stored in arr and return the string true if any combination of 
numbers in the array can be added up to equal the largest number in the array, 
otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 
1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will 
not be empty, will not contain all the same elements, and may contain negative 
numbers.   */

// Naive solution. O(n^n)
function ArrayAddition(arr) {
  const max = Math.max(arr);
  const powerSet = [[]];
  arr = arr.filter(x => x != max);

  // construct power set
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < sets.length; j++) {
      const newSet = sets[j].concat(arr[i]);
      if (newSet.reducet((t, n) => t + n) == max) return "true";
      sets.push(newSet);
    }
  }

  return "false";
}

ArrayAddition([4, 6, 23, 10, 1, 3]);
