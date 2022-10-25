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

//console.log(joinedString); // Output: JavaScript is fun.

const array = [1, -1, 2, 3];

// how its working
// accumulator = 0, currentValue = 1 => 1
// accumulator = 1, currentValue = -1 => 0
// accumulator = 0, currentValue = 2 => 2
// accumulator = 2, currentValue = 3 => 5

var sum = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

//console.log(sum);

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  //console.log("The value of accumulator: ", accumulator);
  //console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);

//console.log(newSum);

let flatArray = [
  [1, 2, 3],
  [4, 5],
  [8, 9],
];

const newSumArray = flatArray.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(newSumArray);

let array2 = [[1, 2], [[3, 4]], [[[5], [6]]]];

const flatten = (arr) =>
  arr.reduce((a, v) => {
    v instanceof Array ? a.push(...flatten(v)) : a.push(v);
    return a;
  }, []);

console.log(flatten(array2));
