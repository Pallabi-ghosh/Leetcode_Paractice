// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// [] = alt + 8
// {} = alt + shift + 8

nums = [1,1,2,2], n = 2

//console.log(nums.length / 2);
let arrayA = [];
let arrayB = [];
var newArray = [];

function shuffle(param1, n) {
  for (i = 0; i < param1.length; i++) {
    var sum = param1[i];
    //console.log("First poiunter" + " " +i);
    if (i <= n - 1) {
      //console.log("First poiunter" + " " + nums[i]);
      arrayA.push(sum);
    } else {
      arrayB.push(sum);
    }
  }
  for (j = 0; j < arrayA.length; j++) {
    newArray.push(arrayA[j], arrayB[j]);
  }
  console.log(newArray)
  return newArray
}
shuffle(nums, n)

// what is the length for the below for loop ?
// for loop {
//     first array [i]
//     second array [i]
// }

// Can you solve this by one array ?
// Hint:
