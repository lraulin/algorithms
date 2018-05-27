/**
 * Challenge Using the JavaScript language, have the function
 * CorrectPath(str) read the str parameter being passed, which will represent
 * the movements made in a 5x5 grid of cells starting from the top left
 * position. The characters in the input string will be entirely composed of:
 * r, l, u, d, ?. Each of the characters stand for the direction to take within
 * the grid, for example: r = right, l = left, u = up, d = down. Your goal is
 * to determine what characters the question marks should be in order for a
 * path to be created to go from the top left of the grid all the way to the
 * bottom right without touching previously travelled on cells in the grid.
 *
 * For example: if str is "r?d?drdd" then your program should output the final
 * correct string that will allow a path to be formed from the top left of a
 * 5x5 grid to the bottom right. For this input, your program should therefore
 * return the string rrdrdrdd. There will only ever be one correct path and
 * there will always be at least one question mark within the input string.
 *
 * Sample Test Cases
 * Input:"???rrurdr?"  Output:"dddrrurdrd"
 * Input:"drdr??rrddd?"  Output:"drdruurrdddd"
 *
 * Hint: Starting from the end of
 * the string and working your way up towards the top-left of the grid is one
 * way to solve this challenge.
 */

function initGrid(size) {
  const grid = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push(false);
    }
    grid.push(row);
  }
  return grid;
}

function CorrectPath(str) {
  current = [0, 0];
  const u = () => (current[1] += 1);
  const d = () => (current[1] += -1);
  const l = () => (current[0] += -1);
  const r = () => (current[0] += 1);
}

test = "";
console.log(CorrectPath(test));
