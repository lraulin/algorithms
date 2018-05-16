function getIndexToIns(arr, num) {
  arr.push(num);
  arr = arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));
