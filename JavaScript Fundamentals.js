/* // single operations
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

average(2, 7); // Returns 9 */




/* function isCool(string) {
  let coolSentence = string + " is cool!"
  console.log(coolSentence)
  return coolSentence
}

// Call the above function passing in the below arguments:
// Music
// JavaScript
// The world
isCool("Music");
isCool("JavaScript");
isCool("The world"); */



function averageOfTwo(num1, num2) {
  let averageTwoNum = (num1 + num2) / 2;
  return averageTwoNum;
}

console.log(averageOfTwo(3, 7)); // => 5.0
console.log(averageOfTwo(16, 5)); // => 10.5
console.log(averageOfTwo(2, 7.5)); // => 4.75