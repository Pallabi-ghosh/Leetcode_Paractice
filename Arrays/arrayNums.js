// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.


var sum = [2, 17, 19, 6, 25, 111, 200, 143];
var targetSum = 227;

function totalSum(sum1, targetSum1) {
  for (i = 0; i < sum1.length; i++) {
    for (j = i + 1; j < sum1.length; j++) {
      for (x = i + 1; x < sum1.length; x++) {
        if (sum1[i] + sum1[j] + sum1[x] == targetSum1) {
          return [i, j, x];
        }
      }
    }
  }
}

console.log(totalSum(sum, targetSum));