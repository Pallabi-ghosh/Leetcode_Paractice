// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

nums = [1,1,1,1,1]

var runningSum = function (nums) {
  for (i = 0; i < nums.length-1; i++) {
    var firstSum = nums[i] + nums[i+1] ;
    nums[i+1] = firstSum
    //console.log(firstSum)
    //console.log(nums)
  }
  return nums
};

console.log(runningSum(nums));

// 1,2,3,4

// 1,3,6,10

// 1 = 1

// 1 + 2 = 3

// 1+2+3 = 6







