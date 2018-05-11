const createNode = key => ({
  key,
  left: null,
  right: null,
});

/**
 * Could enforce "private members" with vars and funcs outside the returned
 * object, but I figure why not take the Python approach... We're all adults
 * here. Programmers know what underscore means.
 */
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

const createAVLTree = () => ({
  _root: null,
  insert(key) {
    this.root = this._insertNode(this._root, key);
  },
  _insertNode(node, key) {
    if (node === null) {
      node = createNode(key);
    } else if (key < node.key) {
      node.left = this._insertNode(node.left, key);
      if (node.left !== null) {
        // verify if balancing is neede
        if (this._heightNode(node.left) - this._heightNode(node.right) > 1) {
          // do rotations
          if (key < node.left.key) {
            node = this._rotationLL(node);
          } else {
            node = this._rotationLR(node);
          }
        }
      }
    } else if (key > node.key) {
      node.right = this._insertNode(node.right, key);
      if (node.right !== null) {
        // verify if balancing is needed
        if (this._heightNode(node.right) - this._heightNode(node.left) > 1) {
          // do rotations
          if (key > node.right.key) {
            node = this._rotationRR(node);
          } else {
            node = this._rotationRL(node);
          }
        }
      }
    }
    return node;
  },
  _heightNode(node) {
    if (node === null) {
      return -1;
    } else {
      return (
        Math.max(this._heightNode(node.left), this._heightNode(node.right)) + 1
      );
    }
  },
  _rotationRR(node) {
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  },
  _rotationLL(node) {
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  },
  _rotationLR(node) {
    node.left = this._rotationRR(node.left);
    return this._rotationLL(node);
  },
  _rotationRL(node) {
    node.right = this._rotationLL(node.right);
    return this._rotationRR(node);
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
