# @mienchichi/is-even-odd

A simple utility to check if a number is even or odd.

## Installation

Install the package using npm:

```bash
npm install @mienchichi/is-even-odd
```

## Usage

Import the package and use the `isEvenOrOdd` function:

```javascript
const isEvenOrOdd = require('@mienchichi/is-even-odd');

console.log(isEvenOrOdd(4)); // Output: "even"
console.log(isEvenOrOdd(7)); // Output: "odd"
```

## API

### `isEvenOrOdd(number)`

- **Parameters:**
  - `number` (number): The number to check.
- **Returns:**
  - `string`: `"even"` if the number is even, `"odd"` if the number is odd.
- **Throws:**
  - Throws an error if the input is not a valid number.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.