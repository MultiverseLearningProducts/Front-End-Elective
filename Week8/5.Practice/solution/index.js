class LinkedList {
    constructor() {
        this.head = this.tail = null;
    }

    addToHead(node) {
        const formerHead = this.head;
        this.head = node;

        if (formerHead) {
            node.next = formerHead;
        } else {
            this.tail = node;
        }
    }

    addToTail(node) {
        const formerTail = this.tail;
        this.tail = node;

        if (formerTail) {
            formerTail.next = node;
        } else {
            this.head = node;
        }
    }
}

class Node {
  constructor(val) {
      this.value = val;
      this.next = null;
  }
}

module.exports = { LinkedList, Node };
