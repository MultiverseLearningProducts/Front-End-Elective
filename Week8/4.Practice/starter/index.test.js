const { Node } = require('./index.js');

describe('node constructor', () => {
    it('should take a value and store it as the property value', () => {
        const node = new Node(42);

        expect(node.value).toBe(42);
    })
});

describe('node constructor', () => {
    let node;

    beforeEach(() => {
        node = new Node(42);
    })

    it('should contain a next property', () => {
        expect(node).toHaveProperty('next');
    })

    it('next should be null by default', () => {
        expect(node.next).toBe(null);
    })
});

describe('node constructor', () => {
    let node;

    beforeEach(() => {
        node = new Node(42);
    })

    it('should contain a previous property', () => {
        expect(node).toHaveProperty('previous');
    })

    it('previous should be null by default', () => {
        expect(node.previous).toBe(null);
    })
});