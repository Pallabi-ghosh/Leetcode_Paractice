/* Given an array of integers nums, you start with an initial positive value startValue.

In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1. */

var nums = [1, -2, -3];

var startValue = 4;

console.log(someObject.name);

function minStartValue(param1) {
  var endValue = [];
  var sum = 0;

  for (i = 0; i < param1.length; i++) {
    //console.log("First poiunter" + " " + param1[i]);

    endValue.push(startValue - param1[i]);
  }
  console.log("First poiunter" + " " + endValue);

  console.log(Math.max(...endValue));
}

minStartValue(nums);
