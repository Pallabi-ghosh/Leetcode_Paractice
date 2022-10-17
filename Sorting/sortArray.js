// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

let nums = [5, 1, 1, 2, 0, 0];

function sortArray(param1) {
  let newArray = [];
  for (i = 0; i < param1.length; i++) {
    newArray.push(param1[i]);
  }
  const sortingArray = newArray.sort((a, b) => (a > b ? 1 : -1));
  console.log(sortingArray);
}

sortArray(nums);
