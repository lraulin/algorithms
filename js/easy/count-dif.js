function countDiff(arr, dif) {
  // Return the number of pairs with specified difference
  // Assume unsorted array of unique integers
  // Edge case: zero
  const arrayDict = {};
  for (let i of arr) {
    arrayDict[i] = i;
  }
  let count = 0;
  for (let i of arr) {
    if (!Number.isNaN(Number(arrayDict[i + dif]))) {
      count++;
    }
  }
  return count;
}

const t0 = new Date().getTime();
console.log(countDiff(numArray, 2));
const t1 = new Date().getTime();
console.log((t1 - t0) / 1000 + " s");
