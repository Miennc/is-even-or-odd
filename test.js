// Simple test for the isEvenOrOdd function
const isEvenOrOdd = require('./index');
const assert = require('assert');

console.log('Running tests for isEvenOrOdd...');

// Test even numbers
assert.strictEqual(isEvenOrOdd(2), 'even', '2 should be even');
assert.strictEqual(isEvenOrOdd(0), 'even', '0 should be even');
assert.strictEqual(isEvenOrOdd(-4), 'even', '-4 should be even');

// Test odd numbers
assert.strictEqual(isEvenOrOdd(1), 'odd', '1 should be odd');
assert.strictEqual(isEvenOrOdd(-3), 'odd', '-3 should be odd');
assert.strictEqual(isEvenOrOdd(99), 'odd', '99 should be odd');

// Test error cases
try {
  isEvenOrOdd('not a number');
  assert.fail('Should have thrown an error for non-number input');
} catch (error) {
  assert(error instanceof Error);
  assert(error.message.includes('valid number'));
}

try {
  isEvenOrOdd(NaN);
  assert.fail('Should have thrown an error for NaN input');
} catch (error) {
  assert(error instanceof Error);
  assert(error.message.includes('valid number'));
}

console.log('All tests passed!');
