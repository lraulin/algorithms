/**
 * Challenge
 * Using the JavaScript language, have the function BitmapHoles(strArr) take
 * the array of strings stored in strArr, which will be a 2D matrix of 0 and
 * 1's, and determine how many holes, or contiguous regions of 0's, exist in
 * the matrix. A contiguous region is one where there is a connected group of
 * 0's going in one or more of four directions: up, down, left, or right. For
 * example: if strArr is ["10111", "10101", "11101", "11111"], then this looks
 * like the following matrix:
 *
 * 1 0 1 1 1
 * 1 0 1 0 1
 * 1 1 1 0 1
 * 1 1 1 1 1
 *
 * For the input above, your program should return 2 because there are two
 * separate contiguous regions of 0's, which create "holes" in the matrix. You
 * can assume the input will not be empty.
 * Sample Test Cases
 * Input:"01111", "01101", "00011", "11110"
 * 01111
 * 01101
 * 00011
 * 11110
 *
 * Output:3
 *
 *
 * Input:"1011", "0010"
 *
 * Output:2
 *
 * Solution from https://www.geeksforgeeks.org/find-number-of-islands/
 * How it works: Check every node in matrix. If it's '0' and not yet found,
 * mark as found and use DFS to find all adjacent '0's, marking each as found,
 * and increment the count of 'holes'.
 */

const makeGraph = graph => ({
  // factory function to create a graph object with methods to find 'holes' in
  // a boolean 2d array represented as an array of strings
  rows: graph.length,
  columns: graph[0].length,
  graph,
  isSafe(i, j, visited) {
    // return true if value at coords is an unvisited '0'
    return (
      i >= 0 &&
      i < this.rows &&
      j >= 0 &&
      j < this.columns &&
      // checking that location is in-bounds should be unnecessary in JS, as
      // the value of an out-of-bounds array index is undefined, which is not
      // equal to '0' (even using loose equality, undefined is equal only to
      // itself and null, not other falsy value)
      !visited[i][j] &&
      this.graph[i][j] === '0'
    );
  },
  DFS(i, j, visited) {
    /* only considers 4 neighbors (up, down, left, right) as adjacent */

    // get row and column numbers of neighbors (left, down, right, up)
    const rowNum = [-1, 0, 0, 1];
    const colNum = [0, -1, 1, 0];

    // mark cell as visited
    visited[i][j] = true;

    // recur for all neighbors
    for (let k = 0; k < 4; k++) {
      if (this.isSafe(i + rowNum[k], j + colNum[k], visited)) {
        this.DFS(i + rowNum[k], j + colNum[k], visited);
      }
    }
  },
  countHoles() {
    /* return count of 'holes' (adjacent '0's) */

    // initialize boolean 2d array to track visited nodes
    const visited = [];
    for (let i = 0; i < this.rows; i++) {
      visited.push([]);
      for (let j = 0; j < this.columns; j++) {
        visited[i].push(false);
      }
    }

    // initialize count as 0 and traverse all cells in graph
    let count = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        // if a cell with value '0' is not yet visited, a new hole is found
        if (!visited[i][j] && this.graph[i][j] === '0') {
          // increase hole count and mark all nodes in hole as visited
          this.DFS(i, j, visited);
          count++;
        }
      }
    }
    return count;
  }
});

// const test = ['01111', '01101', '00011', '11110']; // 3
// const test = ['1011', '0010']; //2
const test = ['10111', '10101', '11101', '11111'];
const graph = makeGraph(test);
console.log(graph.countHoles());
