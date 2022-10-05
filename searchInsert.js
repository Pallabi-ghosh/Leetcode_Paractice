// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not,
//return the index where it would be if it were inserted in order.

let nums = [1, 3, 5, 6];

//console.log(nums[0])

let target = 3;

function searchInsert(param1, param2) {
  let position = 0;
  for (i = 0; i < param1.length; i++) {
    //console.log(i);
    //console.log(param1[i]);
    if (param1[i] == param2) {
      return i;
    } else if (param1[i] > param2) {
      //console.log(param1[i]);
      position = i;
      //console.log(position);
      return position;
    }
  }
  var maximum_index = param1.length - 1;
  //console.log(param1.length);
  return maximum_index + 1;
}
//searchInsert(nums, target);
console.log(searchInsert(nums, target));
