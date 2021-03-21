const assert = require('assert');
const capitalizeFirstLetters = require('/capitalizeFirstLetters');

assert.strictEqual(typeof capitalizeFirstLetters, 'function');

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');

assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

assert.strictEqual(capitalizeFirstLetters(''), '');

