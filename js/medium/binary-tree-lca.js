/**
 * Challenge
 * Using the JavaScript language, have the function BinaryTreeLCA(strArr) take
 * the array of strings stored in strArr, which will contain 3 elements: the
 * first element will be a binary tree with all unique values in a format
 * similar to how a binary heap is implemented with NULL nodes at any level
 * represented with a #, the second and third elements will be two different
 * values, and your goal is to find the lowest common ancestor of these two
 * values. For example: if strArr is
 * ["[12, 5, 9, 6, 2, 0, 8, #, #, 7, 4, #, #, #, #]", "6", "4"] then this tree
 * looks like the following:
 *
 *
 *
 * For the input above, your program should return 5 because that is the value
 * of the node that is the LCA of the two nodes with values 6 and 4. You can
 * assume the two nodes you are searching for in the tree will exist somewhere
 * in the tree.
 * Sample Test Cases
 * Input:"[5, 2, 6, 1, #, 8, #]", "2", "6"
 *
 * Output:5
 *
 *
 * Input:"[5, 2, 6, 1, #, 8, 12, #, #, #, #, #, #, 3, #]", "3", "12"
 *
 * Output:12
 */

/* I've been making this more complicated than it needs to be. I've been trying
 * to figure out how to recreate a linked node tree from the array. Which 
 * shouldn't be too hard. But also unnecessary. Since it just takes simple math
 * to find the left or right child of any 'node', it should be pretty 
 * straightforward to write any binary method to operate directly on the array.
 * Actually probably easier.
 */

// Method 1: root to n1 and root to n2, find where they don't overlap

const createBinaryTree = (arr = []) => ({
  tree: arr,
  leftChildIndex(index) {
    return 2 * index + 1;
  },
  rightChildIndex(index) {
    return 2 * index + 2;
  },
  nodeNotNull(index) {
    if (this.tree[index] === undefined || this.tree[index] === "#") {
      return false;
    } else {
      return true;
    }
  },
  testFindPath(n) {
    let root = 0;
    const path = this.findPath(root, [], n);
    console.log("path to " + n + ": ");
    console.log(path);
    for (let i of path) {
      let str = "" + i + ": " + this.tree[i] + ", ";
      console.log(str);
    }
  },
  findPath(root, path, n) {
    if (!this.nodeNotNull(root)) {
      return false;
    }
    path.push(root);
    if (this.tree[root] === n) {
      return path;
    }
    if (
      this.findPath(this.leftChildIndex(root), path, n) ||
      this.findPath(this.rightChildIndex(root), path, n)
    ) {
      return path;
    }

    path.pop();
    return false;
  },
  findLCA(n1, n2) {
    const path1 = this.findPath(0, [], n1);
    const path2 = this.findPath(0, [], n2);
    if (path1.length && path2.length) {
      let node;
      for (let i = 0; i < path1.length || i < path2.length; i++) {
        if (path1[i] === path2[i]) {
          node = this.tree[path1[i]];
        } else {
          return node;
        }
      }
    }
  },
});

// let's see if this Rube-Goldberg device is going to work...
// first, parse input
// const test = ["[12, 5, 9, 6, 2, 0, 8, #, #, 7, 4, #, #, #, #]", "6", "4"];
// const test = ["[5, 2, 6, 1, #, 8, #]", "2", "6"];
const test = ["[5, 2, 6, 1, #, 8, 12, #, #, #, #, #, #, 3, #]", "3", "12"];
const testArr = test[0]
  .slice(1, test[0].length - 1)
  .split(",")
  .map(x => {
    if (Number.isNaN(parseInt(x))) {
      return "#";
    } else {
      return parseInt(x);
    }
  });
const n1 = parseInt(test[1]);
const n2 = parseInt(test[2]);
const tree = createBinaryTree(testArr);
console.log(tree.findLCA(n1, n2));

// It works... but most implimentations pass in the array, but only return
// true or false, and rely on the array being appropriately mutated as a side-
// effect. When I try it that way, it stops working. Why?
