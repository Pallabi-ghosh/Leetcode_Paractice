//for ([initialExpression]; [conditionExpression]; [incrementExpression])
//statement

//Create a loop that runs from 0 to 9
for (let i = 0; i < 10; i++) {
  //console.log(i)
}

//Write a JS code to print a 2D array
var arr = [
  [1, 2, 3, 4, 5, 6],
  [7, 6, 9, 6, 1],
];

function printArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      //console.log(arr[i][j]);
    }
  }
}
printArray(arr);

//Write a JS code to print Even numbers in given array
var arr = [13, 23, 12, 45, 22, 48, 66, 100];

function printEven(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      //console.log(arr[i]);
    }
  }
}
printEven(arr);

//Write a JS code to print 2D array with multiple sub-arrays
var arr = [
  [99, 100, 10, 55],
  [22, 44],
  [66, 77, 88],
  [6, 7, 8],
  [166, 177, 188],
];

function twoDimentionalArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      //console.log(arr[i][j])
    }
  }
}
twoDimentionalArray(arr);

//Find first letter of each string
var arr = ["John", "Will", "Mike"];

function arrayOfString(arr) {
  for (var i = 0; i < arr.length; i++) {
    //console.log(arr[i][0])
  }
}
arrayOfString(arr);

//Find any letter from a string
var arr = "Pallabi";

//console.log(arr[5])

//Write a JS code to delete all occurrence of element in given array
var arr = [22, 57, 90, 34, 11];

function deleteElement(arr, ele) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == ele) {
      arr.splice(i);
    }
  }
  return arr;
}
console.log(deleteElement(arr, 11));

//Write a JS code to delete one element in given array
//The splice method can be used to add or remove elements from an array.
var arr2 = ["John", "Will", "Mike"];

function deleteElement(param1, ele) {
  for (var i = 0; i < param1.length; i++) {
    if (param1[i] == ele) {
      param1.splice(i, 1); // Starting at index position 0, remove one elements ["Will"] and retains [ 'John', 'Mike' ].
    }
  }
  return param1;
}
console.log(deleteElement(arr2, "Will"));

//Here we use the splice method to remove two elements starting from position three (zero based index):
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var removed = arr.splice(5, 2);

console.log(removed); //You can see the removed array contains [3, 4] and the original array contains the remaining values.

var list = ["bar", "baz", "foo", "qux"];

list.splice(0, 2);
// Starting at index position 0, remove two elements ["bar", "baz"] and retains ["foo", "qux"].
