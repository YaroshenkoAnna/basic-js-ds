const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    const node = new Node(data);
    if (this.root() === null) {
      this._root = node;
    } else {
      this._insertNode(this._root, node);
    }
  }
  _insertNode(currentRoot, node) {
    if (node.data < currentRoot.data) {
      if (currentRoot.left === null) {
        currentRoot.left = node;
      } else {
        this._insertNode(currentRoot.left, node);
      }
    } else {
      if (currentRoot.right === null) {
        currentRoot.right = node;
      } else {
        this._insertNode(currentRoot.right, node);
      }
    }
  }

  has(data) {
    if (this._root.data === data) {
      return true;
    } else return !!this._findNode(this._root, data);
  }

  _findNode(currentRoot, data) {
    if (currentRoot.data > data) {
      if (!currentRoot.left) {
        return null;
      }
      if (currentRoot.left.data === data) {
        return currentRoot.left;
      } else {
        return this._findNode(currentRoot.left, data);
      }
    } else {
      if (!currentRoot.right) {
        return null;
      }
      if (currentRoot.right.data === data) {
        return currentRoot.right;
      } else {
        return this._findNode(currentRoot.right, data);
      }
    }
  }

  find(data) {
    if (this._root.data === data) {
      return this._root;
    } else return this._findNode(this._root, data);
  }

  remove(data) {
    if (!this._root) {
      return null;
    }
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      if (node.left !== null && node.right !== null) {
        const minRight = this._findMin(node.right);
        node.data = minRight.data;
        node.right = this._removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this._root) {
      return null;
    }
    return this._findMin(this._root).data;
  }

  _findMin(node) {
    if (!node.left) {
      return node;
    } else return this._findMin(node.left);
  }

  max() {
    if (!this._root) {
      return null;
    }
    return this._findMax(this._root).data;
  }

  _findMax(node) {
    if (!node.right) {
      return node;
    } else return this._findMax(node.right);
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  BinarySearchTree,
};
