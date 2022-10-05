//Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.
const nums = [1, 2, 1];
var n = nums.length;

var getConcatenation = function (nums) {
  var ans = [nums[0], nums[1], nums[2], nums[0], nums[1], nums[2]];
  for (let i = 0; i < n * 2; i++) {
    return ans;
  }
};

console.log(getConcatenation(nums));
