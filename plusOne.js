// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

var digits = [9];

var newDigits = [];

function plusOne(param1) {
  let firstElement = param1.pop();
  newDigits.push(param1);
  //console.log(newDigits);

  //   if (param1[param1.length - 1]) {
  //     let lastElement = param1[param1.length - 1] + 1;
  //     newDigits.push(param1, lastElement);
  //   }

  let lastElement = firstElement + 1;
  newDigits.push(lastElement);
  //console.log(newDigits);

  for (i = 0; i < newDigits.length; i++) {
    newDigits[i].split("");
    console.log(newDigits);
  }
}

plusOne(digits);
//console.log(plusOne(digits));
