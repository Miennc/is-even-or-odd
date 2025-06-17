/**
 * Function to check whether a number is even or odd.
 * @param {number} number - The number to check.
 * @returns {string} - Returns "even" if the number is even, and "odd" if the number is odd.
 * @throws {Error} - Throws an error if the input is not a valid number.
 */
function isEvenOrOdd(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    throw new Error('Input must be a valid number');
  }
  return number % 2 === 0 ? 'even' : 'odd';
}

// Export the function as a module
module.exports = isEvenOrOdd;