const nums = [2, 11, 7, 15];
const target = 9;

function twoSum(nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum(nums, target));
