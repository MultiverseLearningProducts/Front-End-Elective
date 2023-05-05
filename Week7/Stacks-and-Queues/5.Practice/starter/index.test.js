const { Queue } = require('./index.js');

describe('A queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('has a property called memory', () => {
    expect(queue).toHaveProperty('memory');
    expect(Array.isArray(queue.memory)).toBeTruthy();
  });

  it('memory is an empty array by default', () =>  {
    expect(Array.isArray(queue.memory)).toBeTruthy();
    expect(queue.memory.length).toBe(0);
  });

  it('has a property called head',() => {
    expect(queue).toHaveProperty('head');
    expect(typeof queue.head).toBe('number');
  });

  it('head is the number 0 by default',() => {
    expect(typeof queue.head).toBe('number');
    expect(queue.head).toBe(0);
  });

  it('has a property called tail',() => {
    expect(queue).toHaveProperty('tail');
    expect(typeof queue.tail).toBe('number');
  });

  it('tail is the number 0 by default',() => {
    expect(typeof queue.tail).toBe('number');
    expect(queue.tail).toBe(0);
  });
});

describe('A queue', () => {
    let queue;
  
    beforeEach(() => {
      queue = new Queue();
    });
  
    it('adds an item', () => {
      queue.add('Harry');
      expect(queue.remove()).toBe('Harry');
    });
  
    it('adds multiple items', () => {
      queue.add('First').add('Second');
      expect(queue.memory[0]).toBe('First');
      expect(queue.memory[1]).toBe('Second')
    })
  
    it('handles many data types', () => {
      const obj = { meaningOfLife: 42 };
      const str = 'Into the Multiverse';
      const num = 42;
      const fun = () => { console.log('I\'m a function!'); };
      const arr = [42, 'forty two is the best number', { bestNum: 42 }];
      queue.add(obj).add(str).add(num).add(fun).add(arr);
      expect(queue.remove()).toBe(obj);
      expect(queue.remove()).toBe(str);
      expect(queue.remove()).toBe(num);
      expect(queue.remove()).toBe(fun);
      expect(queue.remove()).toBe(arr);
    })
});

describe('A queue', () => {
    let queue;
  
    beforeEach(() => {
      queue = new Queue();
    });
  
    it('returns `undefined` on underflow (empty)', () => {
      expect(queue.remove()).toBe(undefined);
      queue.add('howdy');
      expect(queue.remove()).toBe('howdy');
      expect(queue.remove()).toBe(undefined);
    });
  
    // FIFO: First In, First Out
    it('adds and removes three items in a FIFO way', () => {
      queue.add('FIFO > LIFO').add('i <3 javascript').add('multiverse');
      expect(queue.remove()).toBe('FIFO > LIFO');
      expect(queue.remove()).toBe('i <3 javascript');
      expect(queue.remove()).toBe('multiverse');
      expect(queue.remove()).toBe(undefined);
    });
  
    it('can handle interspersed add and remove', () => {
      queue.add(1);
      expect(queue.remove()).toBe(1);
      queue.add(2).add(3);
      expect(queue.remove()).toBe(2);
      queue.add(4);
      expect(queue.remove()).toBe(3);
      expect(queue.remove()).toBe(4);
      expect(queue.remove()).toBe(undefined);
    });
  
    // no globals!!
    it('adds and removes its own items', () => {
      const q2 = new Queue();
      queue.add('multiverse');
      q2.add('JavaScript');
      expect(q2.remove()).toBe('JavaScript');
      expect(q2.remove()).toBe(undefined);
      expect(queue.remove()).toBe('multiverse');
      expect(queue.remove()).toBe(undefined);
    });
});  