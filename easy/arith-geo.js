function ArithGeo(arr) {
  if (arr.length < 3) return -1;
  let difference = arr[1] - arr[0];
  let arith = true;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] != difference) {
      arith = false;
      break;
    }
  }
  if (arith) return "Arithmetic";
  let ratio = arr[1] / arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] / arr[i] != ratio) return -1;
  }
  return "Geometric";
}

console.log(ArithGeo([2, 4]));
