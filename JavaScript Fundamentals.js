// single operations
console.log(-4 * 1.5); // => -6
console.log(-4 + 1.0); // => -3

// multiple operations
console.log(5 * 3 + 2); // => 17
console.log(2 + 3 * 5); // => 17
console.log((2 + 3) * 5); // => 25

// JavaScript outputs a single value, e.g.
console.log(1 + 1)
console.log(2.5 - 2)
console.log(3 * 4)

console.log("bootcamp".indexOf("o")); // => 1, only shows first found!

// Prints 1 and returns undefined.
function sayNumber(number) {
    console.log(number);
  }
  
 sayNumber(1);

function average(number1, number2) {
  let sum = number1 + number2;
  return sum;
  // Anything under the `return sum` statement will NOT be executed.
  console.log("this will not run");
  return false;
}

average(2, 7); // Returns 9