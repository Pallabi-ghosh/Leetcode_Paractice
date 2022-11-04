//ES6 provides a new kind of parameter so-called rest parameter that has a prefix of three dots (...). A rest parameter allows you to represent an indefinite number of arguments as an array.

function sum(...args) {
  let total = 0;
  for (const a of args) {
    total += a;
  }
  return total;
}

//console.log(sum(1, 2, 3));

function restParameter(a, b, ...args) {
  let sum = a + b;

  //this for loop is looping through and plus it with sum
  for (let n of args) {
    sum = sum + n;
  }

  return sum;
}

var result = restParameter(2, 7, 10, 17, 5); //a,b = 2,7 and rest of the value is storing in arguments(...args)
console.log(result);
