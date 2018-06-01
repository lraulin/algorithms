/**
 * Challenge
 * Using the JavaScript language, have the function QuestionsMarks(str) take
 * the str string parameter, which will contain single digit numbers, letters,
 * and question marks, and check if there are exactly 3 question marks between
 * every pair of two numbers that add up to 10. If so, then your program should
 * return the string true, otherwise it should return the string false. If
 * there aren't any two numbers that add up to 10 in the string, then your
 * program should return false as well.
 *
 * For example: if str is "arrb6???4xxbl5???eee5" then your program should
 * return true because there are exactly 3 question marks between 6 and 4, and
 * 3 question marks between 5 and 5 at the end of the string.
 * Sample Test Cases
 * Input:"aa6?9"
 *
 * Output:"false"
 *
 *
 * Input:"acc?7??sss?3rr1??????5"
 *
 * Output:"true"
 *
 * Hint
 * It may help to first find all the pairs of numbers that add up to 10, and
 * then check what's between them.
 */

function QuestionsMarks(str) {
  const re = /\d.*?\d/;
  const matches = [];
  while (true) {
    try {
      const match = str.match(re);
      matches.push(match[0]);
      str = str.slice(str.indexOf(match[0]) + match[0].length - 1);
    } catch (e) {
      break;
    }
  }
  for (let match of matches) {
    if (Number(match[0]) + Number(match[match.length - 1]) === 10) {
      let marks = 0;
      for (let i = 1; i < match.length - 1; i++) {
        if (match[i] === "?") {
          marks++;
        }
      }
      if (marks === 3) {
        return "true";
      }
    }
  }
  return "false";
}

test = "acc?7??sss?3???75r1??????5";
console.log(QuestionsMarks(test));
