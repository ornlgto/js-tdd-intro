const assert = require('assert');
const rectangle = require('../Rectangle.js');

describe('rectangle', () => {
    it('is a function accepting two arguments', () => {
        assert.strictEqual(typeof rectangle, 'function');
        assert.strictEqual(rectangle.length, 2);
    });

    it('checks if it is a square', () => {
        assert.strictEqual(new rectangle(5, 5).isSquare(), true);
        assert.strictEqual(new rectangle(10, 5).isSquare(), false);
    });

    it('returns its area', () => {
        assert.strictEqual(new rectangle(10, 5).getArea(), 50);
    });

    it('returns its perimeter', () => {
        assert.strictEqual(new rectangle(10, 5).getPerimeter(), 30);
    });
});