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
    //write the condition between param1[i] value with the target value
    if (param1[i] == param2) {
      //in this if statement write the condition about the switch value
      if (isStartPositionFilled == false) {
        //here setting the isStartPositionFilled value with the boolean value
        isStartPositionFilled = true;
        //setting the startPosition value with the index number
        startPosition = i;
      } //this whole if statement is to find the first position of index number

      //console.log(startPosition);
      endPosition = i;
      //when the whole for loop will end it will find the last position of index number and it will set in the
      //endPosition variable
    }
  }
  //console.log(startPosition, endPosition);
  newArray.push(startPosition, endPosition);
  return newArray;
}

//searchRange(nums, target);
console.log(searchRange(nums, target));
