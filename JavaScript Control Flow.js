// Control Flow

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



function isFive(num) {
    if (num === 5) {
      return true;
    }
    // we don't have to wrap this in an `else` because if the above code did *not*
    // run then the number can't be 5 so we can just return false!
    return false
  }