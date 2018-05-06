function sumAll(arr) {
  if (arr.length != 2) {
    throw new Error(
      'Incorrect parameter. sumAll requires array of two numbers.'
    );
  }
  try {
    const min = arr[0] < arr[1] ? arr[0] : arr[1];
    const max = arr[0] > arr[1] ? arr[0] : arr[1];
    let total = 0;
    for (let i = min; i <= max; i++) {
      total += i;
    }
    return total;
  } catch (e) {
    console.log(e.name);
  }
}

console.log(sumAll([1, 4]));
