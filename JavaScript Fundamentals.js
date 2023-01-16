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



/* function averageOfTwo(num1, num2) {
  let averageTwoNum = (num1 + num2) / 2;
  return averageTwoNum;
}

console.log(averageOfTwo(3, 7)); // => 5.0
console.log(averageOfTwo(16, 5)); // => 10.5
console.log(averageOfTwo(2, 7.5)); // => 4.75 */



/* function hello(str) {
  console.log("Hello, " + str);
}

hello("cat"); // prints "Hello, cat"
hello("Helen"); // prints "Hello, Helen"
hello("Sting"); // prints "Hello, Sting" */



/* function divideByThree(num) {
  let numByThree = num/3;
  return numByThree;
}

console.log(divideByThree(9)); // => 3.0
console.log(divideByThree(15)); // => 5.0
console.log(divideByThree(98)); // => 32.666666666666664 */



/* function whisper(str) {
  let whisperedStr = "..." + str.toLowerCase();
  return whisperedStr;
}

console.log(whisper("Hey Buddy")); // => "...hey buddy..."
console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..." */



/* function averageOfFour(num1, num2, num3, num4) {
  let sum = num1 + num2 + num3 + num4;
  let average = sum / 4;
  return average;
}

console.log(averageOfFour(10, 10, 15, 5)); // => 10
console.log(averageOfFour(3, 10, 11, 4)); // => 7
console.log(averageOfFour(1, 2, 3, 4)); // => 2.5 */



/* function yell(str) {
  let yelledStr = str.toUpperCase();
  return yelledStr;
}

console.log(yell("I want to go to the store")); // => "I WANT TO GO TO THE STORE!!!"
console.log(yell("Time to program")); // => "TIME TO PROGRAM!!!" */



function echo(string) {
  // use .toUpperCase() to echoLoud
  let echoLoud = string.toUpperCase();
  // use .toLowerCase() to echoLow
  let echoLow = string.toLowerCase();
  // return output
  return console.log(echoLoud + " ... " + string + " ... " + echoLow);
}

echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey"); // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"