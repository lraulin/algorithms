// Using the JavaScript language, have the function SimpleAdding(num) add up all
// the numbers from 1 to num. For example: if the input is 4 then your program
// should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the
// parameter num will be any number from 1 to 1000.

function SimpleAdding(num) {
  sum = 0;
  for (let i = 1; i < num + 1; i++) {
    sum += i;
  }
  return sum;
}

test = 4;
answer = SimpleAdding(test);

// With recursion
function SimpleAddingRecursively(num) {
  if (num > 0) {
    console.log('foo(' + (num - 1) + ') + ' + num);
    return SimpleAddingRecursively(num - 1) + num;
  } else {
    return num;
  }
}

// ((((0 + 1) + 2) + 3) + 4)

answer = SimpleAddingRecursively(test);
console.log(answer);
