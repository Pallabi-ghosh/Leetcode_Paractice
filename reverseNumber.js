// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go
// outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

var x = -1534236770066;

var result = 0;

var y = "-";

function reverse(param1) {
  var num = param1.toString().split("");
  //console.log(num)
  //console.log(num.length)
  var newArray = [];
  if (num[0] == y) {
    newArray.push(num[0]);
  }

  for (i = num.length; i >= 0; i--) {
    if (num[i] != y) {
      //console.log(y)
      newArray.push(num[i]);
      //console.log(num[i])
    }
  }
  var value = newArray.join("");
  if (value > 2147483648 || value < -2147483648) {
    return 0;
  } else {
    return value;
  }
}
//reverse(x)
console.log(reverse(x));
