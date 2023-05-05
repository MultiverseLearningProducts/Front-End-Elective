class Stack {
    // Stack constructor function
    constructor () {
      this.memory = [];
      this.head = 0;
    }
  
    // Stack.prototype.add
    add (item) {
      this.memory[this.head] = item;
      this.head++;
      return this; // for chaining, do not edit
    }
  
    // Stack.prototype.remove
    remove () {
      this.head--;
      return this.memory[this.head];
    }
  }
  
  module.exports = { Stack };
  