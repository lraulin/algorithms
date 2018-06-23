// You know the drill.

// First solution that occurred to me:

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(100);

// Here's a more elegant and maintainable solution
function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "Fizz";
    }
    if (i % 5 === 0) {
      output += "Buzz";
    }
    console.log(output || i);
  }
}

fizzBuzz(100);
