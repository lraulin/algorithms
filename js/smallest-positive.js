/** Given an array of integers from -1,000,000 to 1,000,000 inclusive,
 *  return the smallest positive integer that is not included.
 *  Integers may be duplicates and can appear in any order.
 *
 *  My naive solution
 *  100% correctness
 *  Completes in O(n^2) time
 */

function solution(A) {
  let answer = 1;
  for (let i = 0; i < A.length; i++) {
    if (!A.includes(i)) {
      return i;
    }
  }
  return 1;
}

/** O(n) time, O(1) space solution
 *  From https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/
 */

// Put all non-positive integers on left side of array
// and return count (of non-positive).
function segregate(arr, size) {
  let count = 0;
  for (let i = 0; i < size; i++) {
    if (arr[i] <= 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]]; // swap using ES6 destructuring
      count++; // increment count of non-positive ints
    }
  }
  console.log('Segregated array: ');
  console.log(arr);
  console.log('# nonpositive: ');
  console.log(count);
  return count;
}

// Find smallest positive in array of only positive integers
function findMissingPositive(arr, size) {
  for (let i = 0; i < size; i++) {
    console.log('For i = ' + i);
    const current = Math.abs(arr[i]) - 1;
    console.log('current = ' + current);
    console.log(arr);
    if (current < size && arr[current] > 0) {
      // index is < size of array, and value at index is > 0
      arr[current] = -arr[current]; // change value at index to neg to mark as checked
    }
    console.log(arr);
  }
  console.log(arr);
  // return index of first positive value
  for (let i = 0; i < size; i++) {
    console.log('arr[' + i + '] = ' + arr[i]);
    if (arr[i] > 0) {
      console.log('arr[i] = ' + arr[i] + ' is > 0');
      console.log('returning i + 1 = ' + (i + 1));
      return i + 1;
    }
  }
  return size + 1;
}

function findMissing(arr, size) {
  const shift = segregate(arr, size);
  const arr2 = [];
  //build an array of the positive values
  let j = 0;
  for (let i = shift; i < size; i++) {
    arr2[j] = arr[i];
    j++;
  }
  console.log('Positive Array: ');
  console.log(arr2);
  return findMissingPositive(arr2, j);
}

// const arr = [-4, -4, -5, -2, 3, 5, 2, -5, -2, 1];
// const arr = [0, 10, 2, -10, -20];
// const arr = [1, 2, 4, 5];
// const arr = [2, 3, 7, 6, 8, -1, -10, 15];
const arr = [2, 3, -7, 6, 8, 1, -10, 15];
const size = arr.length;
const missing = findMissing(arr, size);
console.log('The smallest missing positive integer is ' + missing);

// Lets assume only positive ints for now

// function firstMissingPositive(arr) {
//   const len = arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     while (arr[i] != i + 1) {
//       if (arr[i] <= 0 || arr[i] >= len) break;
//       if (arr[i] == arr[arr[i] - 1]) break;
//       [arr[i], arr[arr[i] - 1]] = [arr[arr[i] - 1], arr[i]];
//     }
//   }

//   for (let i = 0; i < len; i++) {
//     if (arr[i] != i + 1) return i + 1;
//   }

//   return len + 1;
// }

// const arr = [1, 9, 1, 3, 3, 7, 2, 3, 2, 0];
// console.log(firstMissingPositive(arr));
