function myFunction(a, b) {
  return a * b;
}
console.log(myFunction(10, 2));

function hello(str) {
  return "HELLO!!!!";
}

function hello2() {
  alert(hello());
}

//function call
const returnHello = hello(hello2);
console.log(returnHello);

// function fun1() {
//   function fun2() {
//     alert("From function fun2");
//     return "Alert from fun2 ";
//   }
//   return fun2();
// }
// console.log(fun1());

function showAlert() {
  var myText = "This can be whatever text you like!";
  alert(myText);
}
console.log(showAlert());

function func(price, height) {
  this.price = price;
  this.height = height;
}

function func2(price, height) {
  func(this, price, height);
}

console.log(func2(33, 5));

function RabbitHole(type) {
  this.type = type;
}

RabbitHole.prototype.speak = function (line) {
  console.log(`This ${type} is immposiable "${line}" to make`);
};

let weirdRabbit = new RabbitHole("weird");

console.log(Object.getPrototypeOf(RabbitHole) == Function.prototype);

console.log(Object.getPrototypeOf(weirdRabbit) == RabbitHole.prototype);
