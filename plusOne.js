/* You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits. */

let digits = [9, 8];

var newDigits = [];

var extra = 0;

function plusOne(param1) {
  for (i = param1.length - 1; i >= 0; i--) {
    //console.log("First poiunter" + " " + param1[i]);
    if (i == param1.length - 1) {
      var j = param1[i] + 1;
    } else {
      j = param1[i] + extra;
    }
    if (j > 9) {
      newDigits.push(0);
      extra = 1;
    } else {
      newDigits.push(j);
      extra = 0;
    }
  }

  if (extra > 0) {
    extra = 1;
    newDigits.push(extra);
  }

  //console.log(newDigits);
  return newDigits.reverse();
}

console.log(plusOne(digits));
