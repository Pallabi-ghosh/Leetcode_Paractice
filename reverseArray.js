/* Exercise 3)
Using a for loop output the elements in reverse order */

let arr = [43, "what", 9, true, "cannot", false, "be", 3.5, true];
// Example output:
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line

var newArray = [];

for (i = arr.length - 1; i >= 0; i--) {
  //console.log("First poiunter" + " " + arr[i]);
  newArray.push(arr[i]);
}
console.log(newArray);
