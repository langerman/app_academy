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

let array = [0, 1, 2];
let index = 0;

while (index < array.length) {
  console.log(
    "Both the index and the current array position are " + array[index]);
  index++;
}


