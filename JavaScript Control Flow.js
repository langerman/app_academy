// Control Flow

// Conditionals

// function numberSeparator(number) {
//     if (number > 100) {
//       bigNumber();
//     } else {
//       smallNumber();
//     }
//   }
  
//   // this also works
//   function numberSeparator(number) {
//     if (number <= 100) {
//       smallNumber();
//     } else {
//       bigNumber();
//     }
//   }



// function isFive(num) {
//     if (num === 5) {
//       return true;
//     }
//     // we don't have to wrap this in an `else` because if the above code did *not*
//     // run then the number can't be 5 so we can just return false!
//     return false
//   }



// function isOdd(num) {
//     return (num % 2 !== 0)
//   }
  
//   function isOddConditional(num) {
//       if (num % 2 !== 0) {
//           return true
//       }
//       return false
//   }
  
//   console.log(isOdd(2)); // => false
//   console.log(isOdd(5)); // => true
//   console.log(isOdd(-17)); // => true



// function isSubstring(searchString, subString) {
//     let lowerSearchStr = searchString.toLowerCase();
//     let lowerSubStr = subString.toLowerCase();

//     return lowerSearchStr.indexOf(lowerSubStr) !== -1;
// }

// console.log(isSubstring("The cat went to the store", "he cat went")); // => true
// console.log(isSubstring("Time to program", "time")); // => true
// console.log(isSubstring("Jump for joy", "joys")); // => false



// Loops

// let array = [0, 1, 2];
// let index = 0;

// while (index < array.length) {
//   console.log(
//     "Both the index and the current array position are " + array[index]);
//   index++;
// }



A for loop can be broken down into three sections:

The initial expression which will be run once at the beginning of the loop.
The condition which is checked every time the loop is run. If this condition is true the loop will run again. If this condition is false the loop will end.
The loopEnd expression which will be run at the end of the loop before checking the condition again.
for (<initial expression>;<condition>;<loopEnd expression>)



