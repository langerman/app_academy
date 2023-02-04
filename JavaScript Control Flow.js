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



// A for loop can be broken down into three sections:

// The initial expression which will be run once at the beginning of the loop.
// The condition which is checked every time the loop is run. If this condition is true the loop will run again. If this condition is false the loop will end.
// The loopEnd expression which will be run at the end of the loop before checking the condition again.
// for (<initial expression>;<condition>;<loopEnd expression>)



// let testString = "testing";

// // We can use the testString's length as our condition!
// // Since we know the testString's index starts at 0
// // and our index starts at 0 we can access each letter:
// for (let index = 0; index < testString.length; index += 1) {
//   let letter = testString[index];
//   console.log(letter);
// }



// // these two do the exact same thing!
// function forLoopDoubler (array) {
//     // it is convention to shorten index to just i in most cases
//     for (let i = 0; i < array.length; i++) {
//       array[i] = array[i] * 2;
//     }
//     return array;
//   };
  
//   function whileLoopDoubler (array) {
//     let i = 0;
//     while (i < array.length) {
//       array[i] = array[i] * 2;
//       i++;
//     }
//     return array;
//   };
  
//   forLoopDoubler([1, 2, 3]); // => [2,4,6]
//   whileLoopDoubler([1, 2, 3]); //=> [2,4,6]



function logBetween(lowNum, highNum) {
    for (let i = lowNum; i <= highNum; i += 1) {
      console.log(i);
    }
  }
  
  // Examples:
  logBetween(-1, 2); // prints out:
  // -1
  // 0
  // 1
  // 2
  
  logBetween(14, 6); // => prints nothing
  
  logBetween(4, 6); // prints out:
  // 4
  // 5
  // 6