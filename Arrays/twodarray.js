var twoDArray = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];

//normal array sum
var array = [1, 2, 4];

var sum = 0;
for (i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum); //output - 7

//two dimentional array sum
var arraySum = [];

function twoDArraySum(param1) {
  for (i = 0; i < param1.length; i++) {
    //console.log("First poiunter" + " " + twoDArray[i]);
    var sum2 = 0;
    for (j = 0; j < param1[i].length; j++) {
      sum2 += param1[i][j];
    }
    arraySum.push(sum2);
  }
  //console.log(arraySum)
  return arraySum;
}
console.log(twoDArraySum(twoDArray)); //output- [ 3, 5, 7, 9 ]
//twoDArraySum(twoDArray)
