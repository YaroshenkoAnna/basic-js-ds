const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this._prevNode = null;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this._prevNode = node;
    } else this._addNextNode(this._prevNode, node);
  }

  _addNextNode(prevNode, node) {
    if (this._prevNode === this.head) {
      this.afterHeadNode === this.head.next;
    }
    prevNode.next = node;
    this._prevNode = node;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    const deletedNode = this.head;
    this.head = this.head.next;

    return deletedNode.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = {
  Queue,
};
