const { Stack } = require('./index.js');

describe('A stack', function () {

  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('has a property called memory', function () {
    expect(stack).toHaveProperty('memory');
    expect(Array.isArray(stack.memory)).toBeTruthy();
  });

  it('memory is an empty array by default', function () {
    expect(Array.isArray(stack.memory)).toBeTruthy();
    expect(stack.memory.length).toBe(0);
  });

  it('has a property called head', function () {
    expect(stack).toHaveProperty('head');
    expect(typeof stack.head).toBe('number');
  });

  it('head is the number 0 by default', function () {
    expect(typeof stack.head).toBe('number');
    expect(stack.head).toBe(0);
  });
});

describe('A stack', function () {

    let stack, uniqueObj = { id: 123 };
    beforeEach(() => {
      stack = new Stack();
    });
  
    it('adds an item', function () {
      stack.add(uniqueObj);
      expect(stack.memory[0]).toBe(uniqueObj);
    });
  
    it('adds multiple items', function () {
      stack.add('first').add('second');
      expect(stack.memory[0]).toBe('first');
      expect(stack.memory[1]).toBe('second');
    });
});

describe('A stack', function () {

    let stack, uniqueObj = { id: 123 };
    beforeEach(() => {
      stack = new Stack();
    });
  
    it('adds and removes an item', function () {
      stack.add(uniqueObj);
      expect(stack.remove()).toBe(uniqueObj);
    });
  
    it('returns `undefined` on underflow (empty)', function () {
      expect(stack.remove()).toBe(undefined);
      stack.add(uniqueObj);
      expect(stack.remove()).toBe(uniqueObj);
      expect(stack.remove()).toBe(undefined);
    });
  
    // LIFO: Last In, First Out
    it('adds and removes three items in a LIFO way', function () {
      stack.add(5).add(uniqueObj).add('multiverse');
      expect(stack.remove()).toBe('multiverse');
      expect(stack.remove()).toBe(uniqueObj);
      expect(stack.remove()).toBe(5);
      expect(stack.remove()).toBe(undefined);
    });
  
    it('can handle interspersed add and remove', function () {
      stack.add(1);
      expect(stack.remove()).toBe(1);
      stack.add(2).add(3);
      expect(stack.remove()).toBe(3);
      stack.add(4);
      expect(stack.remove()).toBe(4);
      expect(stack.remove()).toBe(2);
      expect(stack.remove()).toBe(undefined);
    });
  
    // no globals!
    it('adds and removes its own items', function () {
      const s2 = new Stack();
      stack.add('multiverse');
      s2.add('i <3 javascript');
      expect(stack.remove()).toBe('multiverse');
      expect(stack.remove()).toBe(undefined);
      expect(s2.remove()).toBe('i <3 javascript');
      expect(s2.remove()).toBe(undefined);
    });
  
});  