// Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

// function SimpleSymbols(str) {
//   for (let i = 0; i <= str.length; i++) {
//     console.log(str[i - 1] + '[' + str[i] + ']' + str[i + 1]);
//     if (str[i]) {
//       console.log('char exists');
//       if (str[i].match(/[a-z]/i)) {
//         console.log("it's a letter");
//         if (str[i - 1] != '+') {
//           console.log("char before isn't +");
//           return false;
//         } else if (str[i + 1] != '+') {
//           console.log("char after isn't +");
//           return false;
//         }
//       } else {
//         console.log('not a letter');
//       }
//     }
//   }
//   console.log('string checks out!');
//   return true;
// }

// function SimpleSymbols(str) {
//   for (let i = 0; i <= str.length; i++) {
//     if (str[i]) {
//       if (str[i].match(/[a-z]/i)) {
//         if (str[i - 1] != '+') {
//           return false;
//         } else if (str[i + 1] != '+') {
//           return false;
//         }
//       } else {
//       }
//     }
//   }
//   return true;
// }

function SimpleSymbols(str) {
  for (let i = 0; i <= str.length; i++) {
    if (
      str[i] &&
      str[i].match(/[a-zA=Z]/i) &&
      (str[i - 1] != '+' || str[i + 1] != '+')
    )
      return false;
  }
  return true;
}

function SimpleSymbols(str) {
  if (str.match(/[^+][A-Za-z][^+]/g)) return false;
  else if (str.match(/[+][A-Za-z][^+]/g)) return false;
  else if (str.match(/[^+][A-Za-z][+]/g)) return false;
  return true;
}

const test1 = '+d+=3=+s+'; // true
const test2 = 'f++d+'; // false
const answer = SimpleSymbols(test1);
console.log(answer);
const answer2 = SimpleSymbols(test2);
console.log(answer2);

true && true && (str[i - 1] != '+' || str[i + 1] != '+');
