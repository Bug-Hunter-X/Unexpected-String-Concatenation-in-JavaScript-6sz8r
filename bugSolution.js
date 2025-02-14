function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Invalid input: Both arguments must be numbers';
  }
  return a + b;
}

console.log(foo(1, '2')); // Output: Invalid input: Both arguments must be numbers
console.log(foo(1, 2)); // Output: 3

//Or using parseInt to convert string to number
function foo2(a, b) {
  return parseInt(a) + parseInt(b);
}
console.log(foo2(1, '2')); //Output: 3