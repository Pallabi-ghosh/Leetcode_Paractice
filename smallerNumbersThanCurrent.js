// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

nums = [8, 1, 2, 2, 3];

var arr = [];

function smallerNumbersThanCurrent(param1) {
  for (var i = 0; i < param1.length; i++) {
    //console.log("First poiunter" + " " + nums[i]);
    //console.log("First poiunter" + " " + (nums.length));
    var count = 0;
    for (var j = 0; j < param1.length; j++) {
      //console.log("First poiunter" + " " + nums[j]);
      if (param1[i] > param1[j]) {
        //   console.log("First poiunter" + " " + nums[i]);
        //   console.log("First poiunter" + " " + nums[j]);
        count++;

      }
      
    }
    arr.push(count);
  }
  return arr;
}
console.log(smallerNumbersThanCurrent(nums));
