/**
 * Challenge
 * Using the JavaScript language, have the function BinarySearchTreeLCA(strArr)
 * take the array of strings stored in strArr, which will contain 3 elements:
 * the first element will be a binary search tree with all unique values in a
 * preorder traversal array, the second and third elements will be two
 * different values, and your goal is to find the lowest common ancestor of
 * these two values. For example: if strArr is ["[10, 5, 1, 7, 40, 50]", "1",
 * "7"] then this tree looks like the following:
 *
 * For the input above, your program should return 5 because that is the value
 * of the node that is the LCA of the two nodes with values 1 and 7. You can
 * assume the two nodes you are searching for in the tree will exist somewhere
 * in the tree.
 * Sample Test Cases
 * Input:"[10, 5, 1, 7, 40, 50]", "5", "10"
 *
 * Output:10
 *
 *
 * Input:"[3, 2, 1, 12, 4, 5, 13]", "5", "13"
 *
 * Output:12
 */

// reconstruct binary search tree from preorder traversal array
// solution: assuming you have a BST data structure, check the root node.
// If both nums are less, set 'root' to left child. If both nums are greater,
// check the right child. If one is lesser and one is greater, you're at the
// LCA.

// does it matter how the data is fed in? is there only one possible binary
// search tree for a given set of numbers?

// const test = ["[10, 5, 1, 7, 40, 50]", "1", "7"];
// const test = ["[10, 5, 1, 7, 40, 50]", "5", "10"];
const test = ["[3, 2, 1, 12, 4, 5, 13]", "5", "13"];
// parse input
const testArr = test[0]
  .slice(1, test[0].length - 1)
  .split(",")
  .map(x => parseInt(x));
// can we rely on n1 and n2 being in order? Let's be on the safe side.
const n1 = test[1] < test[2] ? test[1] : test[2];
const n2 = test[1] > test[2] ? test[1] : test[2];

const createNode = key => ({
  key,
  left: null,
  right: null,
});

const createBinarySearchTree = () => ({
  _root: null,
  insert(key) {
    const newNode = createNode(key);
    if (this._root == null) {
      this._root = newNode;
    } else {
      this._insertNode(this._root, newNode);
    }
  },
  _insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  },
  inOrderTraverse(callback) {
    this._inOrderTraverseNode(this._root, callback);
  },
  _inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this._inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this._inOrderTraverseNode(node.right, callback);
    }
  },
  preOrderTraverse(callback) {
    this._preOrderTraverseNode(this._root, callback);
  },
  _preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this._preOrderTraverseNode(node.left, callback);
      this._preOrderTraverseNode(node.right, callback);
    }
  },
  postOrderTraverse(callback) {
    this._postOrderTraverseNode(this._root, callback);
  },
  _postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this._postOrderTraverseNode(node.left, callback);
      this._postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  },
  min() {
    return this._minNode(this._root);
  },
  _minNode(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  },
  printNode(value) {
    console.log(value);
  },
  max() {
    return _maxNode(_root);
  },
  _maxNode(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  },
  search(key) {
    return this._searchNode(this._root, key);
  },
  _searchNode(node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return this._searchNode(node.left, key);
    } else if (key > node.key) {
      return this._searchNode(node.right, key);
    } else {
      return true;
    }
  },
  remove(key) {
    this._root = this._removeNode(this._root, key);
  },
  _removeNode(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = this._removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this._removeNode(node.right, key);
      return node;
    } else {
      // leaf node
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // node with only 1 child
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // node with 2 children
      const aux = this._findMinNode(node.right);
      node.key = aux.key;
      node.right = this._removeNode(node.right, aux.key);
      return node;
    }
  },
  _findMinNode() {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  },
  findLCA(n1, n2) {
    return this._findLCA(this._root, n1, n2);
  },
  _findLCA(root, n1, n2) {
    while (root !== null) {
      if (root.key > n1 && root.key > n2) {
        root = root.left;
      } else if (root.key < n1 && root.key < n2) {
        root = root.right;
      } else break;
    }
    return root.key;
  },
});

const binarySearchTree = createBinarySearchTree();

for (let value of testArr) {
  binarySearchTree.insert(value);
}

console.log(binarySearchTree.findLCA(n1, n2));
