var columnTitle = "ZYY";

var columnTitleSplit = columnTitle.split("");
//console.log(columnTitleSplit);

function printIndexNumber(param1) {
  var alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // create a variable which can hold the sume of the values
  var totalCount = 0;

  for (i = 0; i < columnTitleSplit.length; i++) {
    //console.log(alphabets.length)
    // create a second for loop for the columnTitleSplit (which is what ? : an Array) then compare the position of alphabet and the element in the 'sum' array
    for (j = 0; j < alphabets.length; j++) {
      //console.log(columnTitleSplit.length)
      if (columnTitleSplit[i] == alphabets[j]) {
        //console.log("First poiunter" + " " + alphabets[i]);
        //console.log("First poiunter" + " " + columnTitleSplit[j]);
        // remember to add 26 every time you are increasing the index
        totalCount = totalCount + j + 1;
      }
    }
  }
  // describe why did I write this ??
  // when come to the second letter then 26 will add with the totalCount after fininshing the loop and 26 will mutiply with the i value 
  //console.log(totalCount + 26 * (i - 1))
  return totalCount + 26 * (i - 1);
}

// ip: anyletter  op: indexNumber

console.log(printIndexNumber(columnTitle));
