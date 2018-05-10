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
    if (newNode.key < nodekey) {
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
});

const tree = createBinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
tree.remove(8);
tree.insert(1);
console.log("IN ORDER");
tree.inOrderTraverse(tree.printNode);
console.log("PRE-ORDER");
tree.preOrderTraverse(tree.printNode);
console.log("POST-ORDER");
tree.postOrderTraverse(tree.printNode);
console.log("MIN");
tree.printNode(tree.min());
console.log("SEARCH");
console.log(tree.search(1) ? "Key 1 found" : "Key 1 not found");
console.log(tree.search(8) ? "Key 8 found" : "Key 8 not found");
