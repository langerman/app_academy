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



// function logBetween(lowNum, highNum) {
//     for (let i = lowNum; i <= highNum; i += 1) {
//       console.log(i);
//     }
//   }
  
//   // Examples:
//   logBetween(-1, 2); // prints out:
//   // -1
//   // 0
//   // 1
//   // 2
  
//   logBetween(14, 6); // => prints nothing
  
//   logBetween(4, 6); // prints out:
//   // 4
//   // 5
//   // 6



// function printFives(max) {
//     for (let i = 0; i < max; i += 5) {
//       console.log(i);
//     }
//   }
  
  // function printFives(max) {
  //   let i = 0;
  //   while (i < max) {
  //     if (i % 5 === 0) {
  //       console.log(i);
  //     }
  //     i++;
  //   }
  // }
  // Example:
  
//   printFives(20) // prints out:
  // 0
  // 5
  // 10
  // 15



// function logBetweenStepper(min, max, step) {
//     for (let i = min; i < max; i += step) {
//         console.log(i);
//     }
// }

// // Examples:
// logBetweenStepper(5, 9, 1); // prints out:
// // 5
// // 6
// // 7
// // 8
// // 9


// logBetweenStepper(-10, 15, 5)  // prints out:
// // -10
// // -5
// // 0
// // 5
// // 10
// // 15



// function fizzBuzz(max) {
//     for (let i = 0; i < max; i += 1) {
//       if (i % 3 === 0 && i % 5 !== 0) {
//         console.log(i);
//       } else if (i % 5 === 0 && i % 3 !== 0) {
//         console.log(i);
//       }
//     }
//   }
//   // Examples:
  
//   fizzBuzz(20); // prints out:
//   // 3
//   // 5
//   // 6
//   // 9
//   // 10
//   // 12
//   // 18



// function combineArray(array1, array2) {
//     let newArray = array1.concat(array2);
//     return newArray;
// }

// console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
// console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]




// let doubleArray = [];
// function doubler(numbers) {
//     for (i = 0; i < numbers.length; i++){
//         let oldNum = numbers[i];
//         let newNum = oldNum * 2;
//         doubleArray = doubleArray.concat(newNum);
//     }
//     return doubleArray;
// }

// console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
// console.log(doubler([7, 1, 8])); // => [14, 2, 16]



// function countVowels(word) {
//     let vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (vowels.includes(word[i].toLowerCase())) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("bootcamp")); // => 3
// console.log(countVowels("apple")); // => 2
// console.log(countVowels("pizza")); // => 2



