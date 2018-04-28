function destroyer(arr) {
  const args = arguments.slice(1);
  for (arg of args) {
    arr = arr.filter(x => x == arg)
  }
  return arr;
}

const answer = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(answer);
