class Queue {
    constructor() {
      this.memory = [];
      this.head = 0;
      this.tail = 0;
    }
  
    add(item) {
      this.memory[this.tail] = item;
      this.tail++;
      return this;
    }
  
    remove() {
      if (this.head === this.tail) return undefined;
      const dequeued = this.memory[this.head];
      this.head++;
      return dequeued;
    }
  }
  
  module.exports = { Queue };