/* Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity. */

let nums = [5, 8, 8, 8, 10];

let target = 8;

var startPosition = -1;

var endPosition = -1;

var newArray = [];

function searchRange(param1, param2) {
  let isStartPositionFilled = false;
  for (i = 0; i < param1.length; i++) {
    //console.log("First poiunter" + " " + [i]);
    if (param1[i] == param2) {
      if (isStartPositionFilled == false) {
        isStartPositionFilled = true;
        startPosition = i;
      }
      //console.log(startPosition);
      endPosition = i;
    }
  }
  //console.log(startPosition, endPosition);
  newArray.push(startPosition, endPosition);
  return newArray;
}

//searchRange(nums, target);
console.log(searchRange(nums, target));
