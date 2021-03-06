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

// The key seems to be that for a path to be correct, the sum of horizontal
// moves and the sum of vertical moves has to be 4. Perhaps I could use this
// to avoid checking too many possibilities.

function CorrectPath(str) {
  let paths = [""];
  for (let i = 0; i < str.length; i++) {
    const dirs = ["u", "d", "l", "r"];
    if (str[i] === "?") {
      const newPaths = [];
      paths.forEach(path => dirs.forEach(dir => newPaths.push(path + dir)));
      paths = newPaths;
    }
  }
  pathcheck: for (path of paths) {
    let j = 0,
      x = 0,
      y = 0;
    for (let i = 0; i < str.length; i++) {
      let dir = str[i];
      if (dir === "?") {
        dir = path[j];
        j++;
      }
      if (dir === "u") {
        y--;
      } else if (dir === "d") {
        y++;
      } else if (dir === "l") {
        x--;
      } else if (dir === "r") {
        x++;
      }
      if (x < 0 || x > 4 || y < 0 || y > 4) {
        continue pathcheck;
      }
    }
    if (x === 4 && y === 4) {
      j = 0;
      let correctPath = "";
      for (let i = 0; i < str.length; i++) {
        if (str[i] === "?") {
          correctPath += path[j];
          j++;
        } else {
          correctPath += str[i];
        }
      }
      return correctPath;
    }
  }
  return "not possible";
}

// * 0 1 2 3 4
// 0 v > > > V
// 1 v ^ v < V
// 2 v ^ v ^ V
// 3 v ^ < ^ V
// 4 > > > ^ !

// test = "???rrurdr?";
// test = "rrrrd?ll?dr?rrdlllldrr?r";
test = "ddddruuuurddddruuuurdddd";
// test = "dd?dr??r?uul?dl?luu??rrdddd";
console.log(CorrectPath(test));

// hunsoo's answer
// check if the given directions can reach the finish line
// without touching previously visited positions
// function canNavigate(str) {
//   var position = [0, 0];
//   var visited = {};
//   for (var i = 0; i < str.length; i++) {
//     switch (str[i]) {
//       case "u":
//         position[0]--;
//         if (position[0] < 0) return false;
//         break;
//       case "d":
//         position[0]++;
//         if (position[0] > 4) return false;
//         break;
//       case "l":
//         position[1]--;
//         if (position[1] < 0) return false;
//         break;
//       case "r":
//         position[1]++;
//         if (position[1] > 4) return false;
//         break;
//       default:
//         break;
//     }
//     if (visited[position[0] + "-" + position[1]]) {
//       // already visited before
//       return false;
//     } else {
//       // mark as visited
//       visited[position[0] + "-" + position[1]] = i;
//     }
//   }

//   return position[0] === 4 && position[1] === 4;
// }

// function findMissingChars(str) {
//   // first, generate all possible cases: replacing ? with directions
//   var permutations = [""];
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === "?") {
//       var newPermutations = [];
//       permutations.forEach(function(permutation) {
//         newPermutations.push(permutation + "u");
//         newPermutations.push(permutation + "d");
//         newPermutations.push(permutation + "l");
//         newPermutations.push(permutation + "r");
//       });
//       permutations = newPermutations;
//     } else {
//       permutations = permutations.map(permutation => permutation + str[i]);
//     }
//   }

//   // now filter out only valid ones
//   // we need a net result of 4 downs and 4 rights
//   return permutations.filter(function(permutation) {
//     var rightCount =
//       permutation.match(/[r]/g) === null ? 0 : permutation.match(/[r]/g).length;
//     var leftCount =
//       permutation.match(/[l]/g) === null ? 0 : permutation.match(/[l]/g).length;
//     var upCount =
//       permutation.match(/[u]/g) === null ? 0 : permutation.match(/[u]/g).length;
//     var downCount =
//       permutation.match(/[d]/g) === null ? 0 : permutation.match(/[d]/g).length;

//     return rightCount - leftCount === 4 && downCount - upCount === 4;
//   });
// }

// function CorrectPath(str) {
//   var validPaths = findMissingChars(str);

//   for (var validPath of validPaths) {
//     if (canNavigate(validPath)) {
//       return validPath;
//     }
//   }
// }

// // keep this function call here
// CorrectPath(readline());
