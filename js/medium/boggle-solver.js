/**
 * Challenge
 * Using the JavaScript language, have the function BoggleSolver(strArr) read
 * the array of strings stored in strArr, which will contain 2 elements: the
 * first element will represent a 4x4 matrix of letters, and the second element
 * will be a long string of comma-separated words each at least 3 letters long,
 * in alphabetical order, that represents a dictionary of some arbitrary
 * length. For example: strArr can be: ["rbfg, ukop, fgub, mnry",
 * "bog,bop,gup,fur,ruk"]. Your goal is to determine if all the comma separated
 * words as the second parameter exist in the 4x4 matrix of letters. For this
 * example, the matrix looks like the following:
 *
 * r b f g
 * u k o p
 * f g u b
 * m n r y
 *
 * The rules to make a word are as follows:
 *
 * 1. A word can be constructed from sequentially adjacent spots in the matrix,
 * where adjacent means moving horizontally, vertically, or diagonally in any
 * direction.
 * 2. A word cannot use the same location twice to construct itself.
 *
 * The rules are similar to the game of Boggle. So for the example above, all
 * the words exist in that matrix so your program should return the string
 * true. If all the words cannot be found, then return a comma separated string
 * of the words that cannot be found, in the order they appear in the
 * dictionary.
 * Sample Test Cases
 * Input:"aaey, rrum, tgmn, ball", "all,ball,mur,raeymnl,tall,true,trum"
 *
 * Output:"true"
 *
 *
 * Input:"aaey, rrum, tgmn, ball",
 * "all,ball,mur,raeymnl,rumk,tall,true,trum,yes"
 *
 * Output:"rumk,yes"
 */

// this should be similar to bitmap-holes, except the search is like finding a
// path through a maze...instead of simply marking all acceptable nodes, the
// DFS has to backtrack if it's unable to find the word

const createBoggle = (graph, wordList) => ({
  // factory function to create a graph object with methods to find number of
  // 'holes' (groups of adjacent '0's, where adjacent means above, below, left,
  // or right) in a boolean 2d array represented as an array of strings
  rows: graph.length,
  columns: graph[0].length,
  graph,
  wordList,
  isSafe(i, j, visited, letter) {
    // return true if value at coords is specified letter and not yet visited
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
      this.graph[i][j] === letter
    );
  },
  DFS(row, col, visited, word, index) {
    // current location is valid; mark visited
    visited[row][col] = true;

    // check if we're at the end of the word
    if (index === word.length - 1) {
      return true;
    }

    // get row and column numbers of 8 neighbors
    const rowNum = [-1, -1, -1, 0, 0, 1, 1, 1];
    const colNum = [-1, 0, 1, -1, 1, -1, 0, 1];

    // recur for all neighbors
    for (let k = 0; k < 8; k++) {
      if (this.isSafe(row + rowNum[k], col + colNum[k], visited, word[index])) {
        this.DFS(row + rowNum[k], col + colNum[k], visited, word, index);
      }
    }
  },
  checkWord(word) {
    // initialize boolean 2d array to track visited nodes
    const visited = [];
    for (let i = 0; i < this.rows; i++) {
      visited.push([]);
      for (let j = 0; j < this.columns; j++) {
        visited[i].push(false);
      }
    }

    // traverse all values. when first letter is found, DFS for word
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (!visited[i][j] && this.graph[i][j] === word[0]) {
          // start DFS with word index at 0
          this.DFS(i, j, visited, word, 0);
        }
      }
    }
  },
  checkWords() {
    const foundWords = this.wordList.reduce(x => this.checkWord(x));
    if (foundWords.length === this.wordList.length) {
      return 'true';
    } else if (!foundWords.length) {
      return 'false';
    } else {
      return foundWords.join('');
    }
  }
});

const test = ['rbfg, ukop, fgub, mnry', 'bog,bop,gup,fur,ruk'];
const graph = test[0].split(', ');
const wordList = test[1].split(',');
const boggle = createBoggle(graph, wordList);
console.log(boggle.checkWord('bog'));
