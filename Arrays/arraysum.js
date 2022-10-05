//This is possible by looping over all items, and adding them on each iteration to a sum-variable
var arr = [11, 44, 88];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);

//The lodash library has a sum method that can easily add the numbers present in an array
//Have to install the lodash npm
var lodash = require("lodash");
var arr = [11, 44, 88];

var sum = lodash.sum(arr);

console.log(sum);

//console.log highest number in the array
console.log(Math.max(1, 4, 5, 9));

//console.log lowest number in the array
console.log(Math.min(1, 4, 5, 9));

//Solving the maximum subarray sum
var array = [11, 44, 88];
function subArray(array) {
  let currentSum = array[0];
  let maxSum = currentSum;
  for (let i = 1; i < array.length; i++) {
    currentSum = Math.max(array[i], currentSum + array[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(subArray(array));
