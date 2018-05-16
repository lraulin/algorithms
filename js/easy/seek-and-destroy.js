function destroyer(arr) {
  let output = arguments[0];
  for (let index = 1; index < arguments.length; index++) {
    output = output.filter(x => x != arguments[index]);
  }
  return output;
}

const answer = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
const answer2 = destroyer([3, 5, 1, 2, 2], 2, 3, 5);
console.log(answer);
