/* reduce() Parameters
The reduce() method takes in:

callback - The function to execute on each array element (except the first element if no initialValue is provided). It takes in
accumulator - It accumulates the callback's return values.
currentValue - The current element being passed from the array.
initialValue (optional) - A value that will be passed to callback() on first call. If not provided, the first 
element acts as the accumulator on the first call and callback() won't execute on it.
 */

const message = ["JavaScript ", "is ", "fun."];

// reduce join each element of the string
let joinedString = message.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(joinedString); // Output: JavaScript is fun.

const array = [1, -1, 2, 3];

// how its working
// accumulator = 0, currentValue = 1 => 1
// accumulator = 1, currentValue = -1 => 0
// accumulator = 0, currentValue = 2 => 2
// accumulator = 2, currentValue = 3 => 5

var sum = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);
