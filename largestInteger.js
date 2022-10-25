// You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits).

// Return the largest possible value of num after any number of swaps.

var num = 1234;

//output- 3412

function largestInteger(param1) {
  var number = param1.toString().split("");
  //console.log(number);

  var newOddNumber = [];

  var newEvenNumber = [];

  for (i = 0; i < number.length; i++) {
    if (number[i] % 2 === 1) {
      newOddNumber.push(number[i]);
      //console.log(newOddNumber);
    } else {
      newEvenNumber.push(number[i]);
      //console.log(newEvenNumber);
    }
  }

  let lowestToHighestOddNumber = newOddNumber.sort((a, b) => b - a);
  //console.log(lowestToHighestOddNumber);

  let lowestToHighestEvenNumber = newEvenNumber.sort((a, b) => b - a);
  //console.log(lowestToHighestEvenNumber);

  let newSetOfNumber = [];

  for (s = 0; s < number.length; s++) {
    //console.log("First poiunter" + " " + number[s]);
    if (number[s] % 2 === 0) {
      //console.log("First poiunter" + " " + number[s]);
      var j = 0;
      while (number[s] < lowestToHighestEvenNumber[j]) {
        newSetOfNumber.push(lowestToHighestEvenNumber[j]);
      }
    } else {
      for (j = 0; j < lowestToHighestOddNumber.length; j++) {
        //console.log("First poiunter" + " " + newOddNumber[j]);
        newSetOfNumber.push(lowestToHighestOddNumber[j]);
      }
    }
    //console.log(newSetOfNumber);
  }
}

console.log(largestInteger(num));
