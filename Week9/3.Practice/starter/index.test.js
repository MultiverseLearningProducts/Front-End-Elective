const { BinarySearchTree } = require('./index.js');

describe('BinarySearchTree', () => {
  let bst;
  const testValues = [3, 13, 1, -9, 62, -4, 0, 22, 2, 8];

  // Before each spec, create a new BST with 5 at the root
  beforeEach(() => {
    bst = new BinarySearchTree(5);
  });

  describe('initial bst', () => {
    it('initial tree should take a value argument in its constructor', () => {
      expect(bst.value).toBe(5);
    });

    it('initial tree should have left and right values set to null', () => {
      expect(bst.left).toBe(null);
      expect(bst.right).toBe(null);
    });
  });
});

describe('BinarySearchTree', () => {
    let bst;
    const testValues = [3, 13, 1, -9, 62, -4, 0, 22, 2, 8];
  
    // Before each spec, create a new BST with 5 at the root
    beforeEach(() => {
      bst = new BinarySearchTree(5);
    });
  
    it('has a method named `insert`', () => {
      expect(bst).toHaveProperty('insert');
      expect(typeof bst.insert).toBe('function');
    });
  
    describe('`insert` method', () => {
      it('makes nodes on the correct branches, without overwriting existing nodes', () => {
        bst.insert(2);
        bst.insert(200);
        expect(bst.value).toBe(5);
        expect(bst.left.value).toBe(2);
        expect(bst.right.value).toBe(200);
      });
  
      it('sorts values when adding', () => {
        testValues.forEach((val) => bst.insert(val));
        expect(bst.value).toBe(5);
        expect(bst.left.value).toBe(3);
        expect(bst.right.value).toBe(13);
        expect(bst.right.right.left.value).toBe(22);
        expect(bst.left.left.right.value).toBe(2);
        expect(bst.left.left.left.right.right.value).toBe(0);
      });
    });
});