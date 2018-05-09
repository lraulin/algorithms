// Don't ever use! This is the worst sorting algorithm!
// O(n^2)

function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    console.log(arr);
  }
  return arr;
}

arr = [22, 17, 5, 9, 20, 21, 7, 11, 14, 16, 8, 13, 12, 19];
bubbleSort(arr);
