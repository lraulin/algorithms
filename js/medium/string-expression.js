/**
 * Challenge
 * Using the JavaScript language, have the function StringExpression(str) read
 * the str parameter being passed which will contain the written out version of
 * the numbers 0-9 and the words "minus" or "plus" and convert the expression
 * into an actual final number written out as well. For example: if str is
 * "foursixminustwotwoplusonezero" then this converts to "46 - 22 + 10" which
 * evaluates to 34 and your program should return the final string threefour.
 * If your final answer is negative it should include the word "negative."
 * Sample Test Cases
 * Input:"onezeropluseight"
 *
 * Output:"oneeight"
 *
 *
 * Input:"oneminusoneone"
 *
 * Output:"negativeonezero"
 */

const nums = {
  "0": "zero",
  "1": "one",
  "2": "two",
  "3": "three",
  "4": "four",
  "5": "five",
  "6": "six",
  "7": "seven",
  "8": "eight",
  "9": "nine",
  "-": "negative",
};

// this is almost certainly not a good solution, but it works
function stringExpression(str) {
  let expStr = "";
  // there are only 11 possibilities, and a maximum of 2 for each initial
  // letter. figure out what the 1st word is, then remove it from the string,
  // and repeat until done.
  while (str.length) {
    // eight
    if (str[0] === "e") {
      expStr += "8";
      str = str.slice(5);
    } else if (str[0] === "f") {
      // four
      if (str[1] === "o") {
        expStr += "4";
        str = str.slice(4);
        // five
      } else if (str[1] === "i") {
        expStr += "5";
        str = str.slice(4);
      }
      // minus
    } else if (str[0] === "m") {
      // instead of subtracting, we'll just make the next number negative
      expStr += " -";
      str = str.slice(5);
      // nine
    } else if (str[0] === "n") {
      expStr += "9";
      str = str.slice(4);
      // one
    } else if (str[0] === "o") {
      expStr += "1";
      str = str.slice(3);
      // plus
    } else if (str[0] === "p") {
      // operators separate numbers, so add a space
      expStr += " ";
      str = str.slice(4);
    } else if (str[0] === "s") {
      // seven
      if (str[1] === "e") {
        expStr += "7";
        str = str.slice(5);
        // six
      } else if (str[1] === "i") {
        expStr += "6";
        str = str.slice(3);
      }
    } else if (str[0] === "t") {
      // three
      if (str[1] === "h") {
        expStr += "3";
        str = str.slice(5);
        // two
      } else if (str[1] === "w") {
        expStr += "2";
        str = str.slice(3);
      }
      // zero
    } else if (str[0] === "z") {
      expStr += "0";
      str = str.slice(4);
    } else {
      console.log("Error: Invalid Input");
    }
  }
  console.log(expStr);
  const res = expStr
    .split(" ")
    .map(x => parseInt(x))
    .reduce((a, c) => a + c)
    .toString()
    .split("");

  let resString = "";
  for (let i = 0; i < res.length; i++) {
    resString += nums[res[i]];
  }
  return resString;
}

const test = "oneminusoneone";
console.log(stringExpression(test));
