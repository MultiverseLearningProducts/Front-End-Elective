const { LinkedList, Node } = require('./index.js');

describe('linked list', () => {
    let ll;

    beforeEach(() => {
        ll = new LinkedList();
    });

    it('should have a head property, set to null', () => {
        expect(ll).toHaveProperty('head');
        expect(ll.head).toBe(null);
    });

    it('should have a tail property, set to null', () => {
        expect(ll).toHaveProperty('tail');
        expect(ll.tail).toBe(null);
    });
});

describe('addToHead', () => {
    let ll;

    beforeEach(() => {
        ll = new LinkedList();
    });

    it('has addToHead method', () => {
        expect(typeof ll.addToHead).toBe('function');
      });

      it('should use `Node` class to add nodes', () => {
        let banana = new Node('banana');
        ll.addToHead(banana);
        expect(ll.head instanceof Node).toBe(true);
      });

      it('should be able to add to head without removing or overwriting existing nodes', () => {
        let banana = new Node('banana');
        let mango = new Node('mango');

        ll.addToHead(banana);
        expect(ll.head.value).toBe('banana');

        ll.addToHead(mango);
        expect(ll.head.value).toBe('mango');
        expect(ll.head.next.value).toBe('banana');
      });

      it('if the linked list consists of a single node after adding to head, that node should be both the head and the tail', () => {
        let apple = new Node('apple');
        ll.addToHead(apple);

        expect(ll.head.value).toBe('apple');
        expect(ll.tail.value).toBe('apple');
      });
});

describe('addToTail', () => {
    let ll;

    beforeEach(() => {
        ll = new LinkedList();
    });

      it('has a addToTail method', () => {
        expect(typeof ll.addToTail).toBe('function');
      });

      it('adds a node to tail of linked list', () => {
        let newNode = new Node('apple');
        ll.addToTail(newNode);

        expect(ll.tail instanceof Node).toBe(true);
        expect(ll.tail.value).toBe('apple');
      });

      it('can add multiple nodes to tail without overwriting previous nodes', () => {
        let banana = new Node('banana');
        let apple = new Node('apple');
        let mango = new Node('mango');

        ll.addToTail(banana);
        ll.addToTail(apple);
        ll.addToTail(mango);

        expect(ll.head.value).toBe('banana');
        expect(ll.head.next.value).toBe('apple');
        expect(ll.head.next.next).toBe(ll.tail);
        expect(ll.tail.value).toBe('mango');
      });

      it('if a linked list is created with only one node, that node is both the Head and Tail', () => {
        let banana = new Node('banana');
        ll.addToTail(banana);

        expect(ll.tail.value).toBe('banana');
        expect(ll.head.value).toBe('banana');
      });
});