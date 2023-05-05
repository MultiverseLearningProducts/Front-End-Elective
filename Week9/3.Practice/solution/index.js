class BinarySearchTree {
    // Your code here!
    constructor (value) {
      this.value = value;
      this.left = this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
          if (this.left) {
              this.left.insert(value);
          } else {
              this.left = new BinarySearchTree(value);
          }
      } else if (value > this.value) {
          if (this.right) {
              this.right.insert(value);
          } else {
              this.right = new BinarySearchTree(value);
          }
      }
    }
}
  
module.exports = { BinarySearchTree };