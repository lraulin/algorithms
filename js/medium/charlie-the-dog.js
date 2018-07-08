/**
 * Challenge
 * Using the JavaScript language, have the function CharlietheDog(strArr) read
 * the array of strings stored in strArr which will be a 4x4 matrix of the
 * characters 'C', 'H', 'F', 'O', where C represents Charlie the dog, H
 * represents its home, F represents dog food, and O represents and empty space
 * in the grid. Your goal is to figure out the least amount of moves required
 * to get Charlie to grab each piece of food in the grid by moving up, down,
 * left, or right, and then make it home right after. Charlie cannot move onto
 * the home before all pieces of food have been collected. For example: if
 * strArr is ["FOOF", "OCOO", "OOOH", "FOOO"], then this looks like the
 * following grid:
 *
 *
 *
 * For the input above, the least amount of steps where the dog can reach each
 * piece of food, and then return home is 11 steps, so your program should
 * return the number 11. The grid will always contain between 1 and 8 pieces of
 * food.
 * Sample Test Cases
 * Input:"OOOO", "OOFF", "OCHO", "OFOO"
 *
 * Output:7
 *
 *
 * Input:"FOOO", "OCOH", "OFOF", "OFOO"
 *
 * Output:10
 */

const testInput = ["FOOF", "OCOO", "OOOH", "FOOO"];

function findDistance(start, end) {
  // takes start and end positions as 2-length array [i, j]
  return Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1]);
}

function permutations(arr, start, stop, permArr) {
  if (start === stop) {
    permArr.push(arr);
  } else {
    for (let i = start; i <= stop; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      permArr = permutations(arr, start + 1, stop, permArr);
      // backtrack
      [arr[i], arr[start]] = [arr[start], arr[i]];
    }
  }
  return permArr;
}

function print(obj) {
  console.log(JSON.stringify(obj));
}

function permuteN(n) {
  const permutations = [];
  function permute(a, l, r) {
    if (l === r) {
      // permutations.push(a);
      print(a);
      print(permutations);
      permutations.push(a.slice(0));
      print(permutations);
    } else {
      for (let i = l; i <= r; i++) {
        [a[l], a[i]] = [a[i], a[l]];
        permute(a, l + 1, r);
        [a[i], a[l]] = [a[l], a[i]];
      }
    }
  }
  let nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(i);
  }
  permute(nums, 0, n - 1);
  return permutations;
}

// brute-force solution: find all possible routes

function charlieTheDog(grid) {
  let start, end;
  let food = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // C for Charlie, ie start position
      if (grid[i][j] === "C") {
        start = [i, j];
        // H for House, ie end position
      } else if (grid[i][j] === "H") {
        end = [i, j];
        // F for Food, middle positions that must be traversed in any order
      } else if (grid[i][j] === "F") {
        food.push([i, j]);
      }
    }
  }

  // find all possible orders you could visit each food
  const permArr = [];
  function permutations(a, l, r) {
    if (l === r) {
      // create a copy that won't change when array is mutated
      permArr.push(a.slice(0));
    } else {
      for (let i = l; i < r + 1; i++) {
        [a[l], a[i]] = [a[i], a[l]];
        permutations(a, l + 1, r);
        // backtrack
        [a[l], a[i]] = [a[i], a[l]];
      }
    }
  }
  permutations(food, 0, food.length - 1);
  let minDistance;
  // find distance for each possible route
  // TODO make sure path doesn't go through home
  for (let i = 0; i < permArr.length; i++) {
    let path = [start];
    path = path.concat(permArr[i], [end]);
    let pathDistance = 0;
    for (let i = 0; i < path.length - 1; i++) {
      pathDistance += findDistance(path[i], path[i + 1]);
    }
    // update minDistance if we found a shoter path
    if (!minDistance || pathDistance < minDistance) {
      minDistance = pathDistance;
    }
  }
  return minDistance;
}

console.log(charlieTheDog(testInput));
