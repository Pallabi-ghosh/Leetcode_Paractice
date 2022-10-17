// Increment the large integer by one and return the resulting array of digits.

var digits = [9, 9];

var newDigits = [];

function incrementInteger(param1) {
  let firstElement = param1.pop();

  for (i = 0; i < param1.length; i++) {
    newDigits.push(param1[i]);
  }
  //console.log(newDigits);

  let lastElement = firstElement + 1;
  if (lastElement > 9) {
    var newArray = lastElement.toString().split("");
    for (j = 0; j < newArray.length; j++) {
      newDigits.push(newArray[j] - 0);
    }
  } else {
    newDigits.push(lastElement);
  }

  return newDigits;
}

//incrementInteger(digits);
console.log(incrementInteger(digits));
