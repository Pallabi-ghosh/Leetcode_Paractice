/* Given an array of integers nums, you start with an initial positive value startValue.

In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1. */

var nums = [11];

var startValue = 0;

function minStartValue(param1) {
  //var continueLoop = true;
  while (startValue == 0) {
    var sum = 0;
    var someSwitch = false;
    for (i = 0; i < param1.length; i++) {
      sum += param1[i];
      console.log("First poiunter" + " " + startValue);
      console.log("First poiunter" + " " + param1[i]);
      if (sum < 0) {
        someSwitch = true;
        break;
      }
    }
    startValue++;
    //continueLoop = false;
  }
  console.log(startValue);
}

//minStartValue(nums);
console.log(minStartValue(nums));
